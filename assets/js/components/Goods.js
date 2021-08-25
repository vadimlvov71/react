// ./assets/js/components/goods.js
    
import React, {Component} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
    
class Goods extends Component {
    constructor(props) {
        super(props);
        this.state = { goods: [], loading: true};
    }
    
    componentDidMount() {
        this.getGoods(null, null);
    }
    componentDidUpdate(prevProps){
		console.log(this.props.location.search);
		this.getCategory();
	}
	getCategory(){
		const uri = this.props.location.search;
		const arr = uri.split("=");
		let key = arr[0];
		const value = arr[1];
		console.log(arr);
		key = key.replace('?','');
		console.log("key: " + key);
		console.log("value: " + value);
		this.getGoods(key, value)
		//?cat=woman_watches
	}
    getGoods(key, value) {
		//let key = 'cat';
       axios.get('/api/goods', {
			params: {
			[key]: value
		}
		}).then(goods => {
           this.setState({ goods: goods.data, loading: false})
       })
    }
    
    render() {
        const loading = this.state.loading;
        return(
            <div>
                <section className="product spad" >
					<div className="">
                        {loading ? (
                            <div className={'row text-center'}>
                                <span className="fa fa-spin fa-spinner fa-4x"></span>
                            </div>
                        ) : (
                            <div className={'row'}>
                                { this.state.goods.map(good =>
                                    <div className="col-lg-4  mix good-item" key={good.id}>
										<div className="product__item ">
											<div className="product__item__pic set-bg" style={{backgroundImage: `url(${"img/" + good.img})`}} >
											<div className="price">{good.price}</div>
											</div>
											<div className="product__item__text text-center">
												<h6>{good.name}</h6>
											</div>
										</div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </section>
            </div>
        )
    }
}
export default withRouter(Goods);
