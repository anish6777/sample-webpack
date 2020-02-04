
import expect from 'expect';

  
describe('Service ', () => {
    jest.doMock('./../requester',() => ({
        get: () => ({status:200,data:[]})
      }))
      const service = require('../service');
  })
  