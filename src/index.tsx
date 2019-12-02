import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import { StylesProvider } from '@material-ui/core';
import registerServiceWorker from './registerServiceWorker';
import { TopViewContainer } from './pages/top';
import { Header } from './components/Header';
import { Disney, Europe, USJ } from './pages/galleryDetail';

const Application = () => (
  <Fragment>
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={TopViewContainer} />
          <Route exact path="/gallery/disney" component={Disney} />
          <Route exact path="/gallery/europe" component={Europe} />
          <Route exact path="/gallery/usj" component={USJ} />
        </Switch>
      </>
    </Router>
  </Fragment>
);

ReactDOM.render(
  <StylesProvider injectFirst>
    <Application />
  </StylesProvider>,
  document.getElementById('root')
);
registerServiceWorker();
