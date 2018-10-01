import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './views/About';
import FilmView from './views/FilmView';
import registerServiceWorker from './registerServiceWorker';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/film/:id" component={FilmView} />
    </div>
  </BrowserRouter>,

  document.getElementById('root'),
);
registerServiceWorker();
