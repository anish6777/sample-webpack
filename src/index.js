import React from 'react';
import ReactDOM from 'react-dom';
import { storeInstance } from './redux/store';
import Root from './root.js';

ReactDOM.render(
  <Root store={storeInstance}  />,
  document.getElementById('sp')
);
