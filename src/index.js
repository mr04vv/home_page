import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import './index.css';
import Top from './components/Top'
import configureStore from "./redux/";
import registerServiceWorker from './registerServiceWorker';
import Product from "./components/Product";
import Gallery from "./components/Gallery";

const store = configureStore();

const Application = () => (
  <Fragment>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path={"/"} component={Top}/>
          <Route exact path={"/product"} component={Product}/>
          <Route exact path={"/gallery"} component={Gallery}/>
        </Switch>
      </Router>
    </Provider>
  </Fragment>

);


ReactDOM.render(<Application />, document.getElementById('root'));
registerServiceWorker();
