// ./assets/js/components/Home.js
import axios from "axios";
import React, { Component } from "react";
//import Goods from "./Goods";
import Breadcrums from "./Breadcrums";
import Gallery from "./Gallery";
import Description from "./Description";
import ItemBaseDetail from "./ItemBaseDetail";
import { getUri } from './Helpers';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = { item: null, loading: true};;
        this.uri = getUri(window.location.href);
        this.baseURL = "/api/detail/" + this.uri;
    }
    
    componentDidMount() {
        this.getitem();
    }
    getitem() {
       axios.get(this.baseURL).then(item => {
           this.setState({ item: item.data, loading: false})
       })
    }
    render() {
        const loading = this.state.loading;
        const item = this.state.item;

        const greeting = 'Welcome to React';
        return (
        <div>
            
                <section className="shop-details">
                    {loading ? (
                        <div className={'row text-center'}>
                            <div className="col-lg-12">
                                <span className="fa fa-spin fa-spinner fa-4x"></span>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="product__details__pic">
                                <div className="container">

                                    <Breadcrums item={item}/>
                                        
                                    <Gallery item={item}/>
                                   
                                </div>
                            </div>
                            <div className="product__details__content">
                                <div className="container">
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-lg-8">
                                            <div className="product__details__text">
                                                <ItemBaseDetail item={item}/>
                                                <div className="product__details__option">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                    <Description/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
        </div>
        );
    }
}

export default Detail;
