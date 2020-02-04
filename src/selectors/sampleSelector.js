import React from 'react';
import { createSelector } from 'reselect';

const makeGetData = (val) => {
  return function (state) {
    return state.get(val);
  }
}



