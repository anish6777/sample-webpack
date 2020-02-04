import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fromJS } from 'immutable';
import expect from 'expect';

//import * as actions from '../actions'
import {} from './../types';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Actions ', () => {
  
  const actions = require('../actions');
  
})
