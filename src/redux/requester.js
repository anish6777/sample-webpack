import axios from 'axios';

export function get (url, data,useSession) {
    let requestHeaders = _getHeaders(data, useSession);
    return _makeRequest('GET', url, data, requestHeaders);
}

export function post (url, data, useSession) {
    let requestHeaders = _getHeaders(data, useSession);
    return _makeRequest('POST', url, data, requestHeaders);
}

export function put (url, data, useSession) {
  let requestHeaders = _getHeaders(data, useSession)
  return _makeRequest('PUT', url, data, requestHeaders)
}

export function remove (url, data, useSession) {
  let requestHeaders = _getHeaders(data, useSession)
  return _makeRequest('DELETE', url, data, requestHeaders)
}

function _makeRequest(method, url, data, headers) {
    var options = {
        method: method,
        url: url,
        data: data,
        headers:headers
    };
    const output = axios(options);
    return output;
}

function _getHeaders (isjson, usesession) {
    let headers = {}

    if (isjson) {
            headers['content-type'] = 'application/json';
        }

    headers['access-control-allow-origin'] = '*';
    headers['access-control-allow-methods'] = '*';
    headers['access-control-allow-headers'] = '*';
    return headers;
}

export default {
    get,
    post,
    put,
    remove
};        