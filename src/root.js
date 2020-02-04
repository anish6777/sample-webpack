import React from "react";

import Provider from './Provider';
import ErrorBoundary from './containers/ErrorBoundary';
import App from "./App";


function Root(props) {
    return (
      <Provider store={props.store}>
              <ErrorBoundary>
                <App />
              </ErrorBoundary>
      </Provider>
    )
  }
export default Root;
