import mockAxios from 'jest-mock-axios';

const requester = require('../requester');
jest.mock('axios');

describe('requester ', () => {
    afterEach(() => {
        mockAxios.reset();
    });
  it('testing get without data', () => {
    requester.get('/sampleurl/')
    expect(mockAxios).toHaveBeenCalledWith( {"data": undefined, "headers": {"access-control-allow-headers": "*", "access-control-allow-methods": "*", "access-control-allow-origin": "*"}, "method": "GET", "url": "/sampleurl/"})
  })
  it('testing get with data', () => {
    requester.get('/sampleurl/',{"task":"test"})
    expect(mockAxios).toHaveBeenCalledWith( {"data": {"task":"test"}, "headers": {"access-control-allow-headers": "*", "access-control-allow-methods": "*", "access-control-allow-origin": "*","content-type": "application/json"}, "method": "GET", "url": "/sampleurl/"})
  })
  
  it('testing post with data', () => {
    requester.post('/sampleurl/',{"task":"test"})
    expect(mockAxios).toHaveBeenCalledWith( {"data": {"task":"test"}, "headers": {"access-control-allow-headers": "*", "access-control-allow-methods": "*", "access-control-allow-origin": "*","content-type": "application/json"}, "method": "POST", "url": "/sampleurl/"})
  })
  
  it('testing put with data', () => {
    requester.put('/sampleurl/',{"task":"test"})
    expect(mockAxios).toHaveBeenCalledWith( {"data": {"task":"test"}, "headers": {"access-control-allow-headers": "*", "access-control-allow-methods": "*", "access-control-allow-origin": "*","content-type": "application/json"}, "method": "PUT", "url": "/sampleurl/"})
  })
  
  it('testing remove', () => {
    requester.remove('/sampleurl/',{})
    expect(mockAxios).toHaveBeenCalledWith( {"data": {}, "headers": {"access-control-allow-headers": "*", "access-control-allow-methods": "*", "access-control-allow-origin": "*","content-type": "application/json"}, "method": "DELETE", "url": "/sampleurl/"})
  })
})