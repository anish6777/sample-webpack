import React from 'react';

import { Provider } from 'react-redux';

function withProvider(Component,store) {
  return function ConnectedComponent(props) {
    return (
      <Provider store={store}>
         <Component {...props}  />
      </Provider>
      )};
  }

  export default withProvider;