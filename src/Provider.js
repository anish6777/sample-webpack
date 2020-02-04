import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";




function ProviderWrapper({children,store}) {
    return (
      <Provider store={store}>
        <BrowserRouter>
          { children }
        </BrowserRouter>
      </Provider>

    )
}
export default ProviderWrapper;
