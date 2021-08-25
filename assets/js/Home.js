// ./assets/js/components/Home.js
    
import React, {Component} from 'react';
import {Route, Switch,Redirect, Link, withRouter} from 'react-router-dom';
import Users from './Users';
import Goods from './Goods';
import Brands from './Brands';
import Categories from './Categories';

//import Posts from './Posts';   
class Home extends Component {
    
    render() {
        return (
           <div>
           <section className="shop spad">
				<div className="container">
					<div className="row">
						<div className="col-lg-3">
							<div className="shop__sidebar">
								<div className="shop__sidebar__accordion">
									<div className="accordion" id="accordionExample">
										<Categories/>
										<Brands/>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-9">
						   <Goods/>
						</div>
					</div>
				</div>
			</section>
           </div>
        )
    }
}
    
export default Home;
