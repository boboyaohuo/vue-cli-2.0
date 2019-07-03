// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import router from './router';
import VueLazyload from 'vue-lazyload';
import store from './store';
import '@/assets/stylus/index.styl';

Vue.config.productionTip = false;

// 开启vue网页调试
if (process.env.NODE_ENV === 'development') {
  Vue.config.devtools = true;
} else {
  Vue.config.devtools = false;
};

Vue.use(VueLazyload, {
  preLoad: 1.5,
  attempt: 10
});

// 设置eventBus传值
window.eventBus = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
