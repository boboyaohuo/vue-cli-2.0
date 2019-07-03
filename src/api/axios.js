import axios from 'axios';
import qs from 'qs';
import store from '../store';
import {
  env
} from 'api/config';

// axios 配置
if (env === 1) {
  // 线上接口
} else {
  // 测试接口
};

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.timeout = 50000; // 超时时间
/**
 * get 请求方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function get(url, data) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: Object.assign(data, {
        'token': store.state.token
      })
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err);
    });
  });
}

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(Object.assign(data, {
      'token': store.state.token
    }))).then(res => {
      resolve(res.data);
    }, err => {
      reject(err);
    });
  });
}

// 添加一个请求拦截器
axios.interceptors.request.use(function(config) {
  // 在请求发出之前进行一些操作
  return config;
}, function(err) {
  // Do something with request error
  return Promise.reject(err);
});

// 添加一个响应拦截器
axios.interceptors.response.use(function(res) {
  // 在这里对返回的数据进行处理
  return res;
}, function(err) {
  // Do something with response error
  return Promise.reject(err);
});
