import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//import '../styles/app.css';
import Home from './components/Home';
//import Pagination from './components/Pagination';
/*
class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hello</p>
      </div>
    )
  }
} 
* */
try {   
	ReactDOM.render(<Router><Home /></Router>, document.getElementById('root'));
	console.log('rendered');
} catch (e) {
  console.log(e);
}
