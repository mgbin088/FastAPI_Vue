import { baseUrl } from  './config'
import store from '../store'
import { getToken, TokenKey } from "./auth";
import Axios from 'axios'

const request = Axios.create({
  baseURL: baseUrl,
  withCredentials: true,
  timeout: 10000
});


request.interceptors.request.use(
    config => {
      if (store.getters.userToken) {
        config.headers[TokenKey] = getToken()
      }
      return config
    },
    error => {
      return Promise.error(error);
    }
);


request.interceptors.response.use(
    response => {
      if (response.status === 200) {
        return Promise.resolve(response);
      } else {
        return Promise.reject(response);
      }
    },
    error => {
      if (error.response.status) {
        switch (error.response.status) {
          case 401:
            break;
          case 402:
            break;
          case 403:
            break;
          case 404:
            break;
          default:
          
        }
        return Promise.reject(error.response);
      }
    }
);

export function get(url, params) {
  return new Promise((resolve, reject) => {
    request.get(url, {
      params: params
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
    
  })
}

export function post(url, params) {
  return new Promise((resolve, reject) => {
    request.post(url, 
        params
    ).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}


export function put(url, params) {
  return new Promise((resolve, reject) => {
    request.put(url,
        params
    ).then( res => {
      resolve(res)
    }).catch(err => (
        reject(err)
    ))
  })
}

export function del(url) {
  return new Promise((resolve, reject) => {
    request.delete(url).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}


export {
  request
}