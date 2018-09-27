import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './view/Home'
import registerServiceWorker from './registerServiceWorker';
import { Router, browserHistory, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(

    <Router history={browserHistory}>
        <Route path='/' component={App}>
            {<Route path="home" component={Home}/>}
        </Route>
    </Router>,

     document.getElementById('root'));
registerServiceWorker();
