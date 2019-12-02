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
          <Route exact path="/work/uroom" component={Disney} />
          <Route exact path="/work/ytube" component={Europe} />
          <Route exact path="/work/magic" component={USJ} />
          <Route exact path="/work/smart-lock" component={Disney} />
          <Route exact path="/work/qolab" component={Europe} />
          <Route exact path="/work/qiita" component={USJ} />
          <Route exact path="/work/capybalife" component={Disney} />
          <Route exact path="/work/tapitapi" component={Europe} />
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
