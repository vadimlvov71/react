import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
//import '../styles/app.css';
import Home from './components/Home';
import Users from './components/Users';
 //const location = useLocation();
  //console.log(location.pathname);
/*
try {   
	ReactDOM.render(<Router><Home /></Router>, document.getElementById('root'));
	console.log('rendered');
} catch (e) {
  console.log(e);
}
*/
ReactDOM.render(<Router><Switch><Route exact path="/" component={Home}/><Route exact path="/:item" component={Users}/></Switch></Router>, document.getElementById('root'));
/*class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
				  <Route path="/users" component={Users}/>
				  <Route path="/" component={Home}/>
				</Switch>
			</BrowserRouter>
		);
	  }
  }*/
