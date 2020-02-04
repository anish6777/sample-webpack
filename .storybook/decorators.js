import React from "react";

import Provider from '../src/Provider.js'
import {storeInstance} from '../src/redux/store.js'

export const withProvider = (story) => (
  <Provider store={storeInstance}>
    { story() }
  </Provider>
)

