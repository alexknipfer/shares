import { Router, browserHistory } from 'react-router'

import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../src/index.js';
import routes from '../src/routes/routes'

window.onload = function(){
  <div>
    <Router history={browserHistory} routes={routes} />
  </div>,

  ReactDOM.render(<Main />, document.getElementById('app'));
}
