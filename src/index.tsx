import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import { StylesProvider } from '@material-ui/core';
import registerServiceWorker from './registerServiceWorker';
import { TopViewContainer } from './pages/top';
import { Header } from './components/Header';
import { Disney, Europe, USJ, Youtube, Usagi } from './pages/galleryDetail';
import { TapiTapi } from './pages/productDetail/tapitapi';
import { Capybalife } from './pages/productDetail/capybalife';
import { Uroom } from './pages/productDetail/uroom';
import { Qolab } from './pages/productDetail/qolab';
import { Magic } from './pages/productDetail/magic';
import { SmartLock } from './pages/productDetail/smartLock';
import { Ytube } from './pages/productDetail/ytube';
import { Css } from './pages/productDetail/css';
import { PostCollection } from './pages/productDetail/postCollection';
import { SocialDock } from './pages/productDetail/socialDock';

const Application = () => (
  <Fragment>
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={TopViewContainer} />
          <Route exact path="/works/uroom" component={Uroom} />
          <Route exact path="/works/ytube" component={Ytube} />
          <Route exact path="/works/post_collection" component={PostCollection} />
          <Route exact path="/works/css" component={Css} />
          <Route exact path="/works/magic" component={Magic} />
          <Route exact path="/works/smart-lock" component={SmartLock} />
          <Route exact path="/works/qolab" component={Qolab} />
          <Route exact path="/works/capybalife" component={Capybalife} />
          <Route exact path="/works/tapitapi" component={TapiTapi} />
          <Route exact path="/works/socialdock" component={SocialDock} />
          <Route exact path="/gallery/disney" component={Disney} />
          <Route exact path="/gallery/europe" component={Europe} />
          <Route exact path="/gallery/usj" component={USJ} />
          <Route exact path="/gallery/usagi" component={Usagi} />
          <Route exact path="/gallery/youtube" component={Youtube} />
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
