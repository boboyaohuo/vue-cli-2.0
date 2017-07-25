import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Hello = (resolve) => {
  import('components/Hello').then((module) => {
    resolve(module);
  });
};

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/hello'
    },
    {
      path: '/hello',
      component: Hello
    }
  ]
});
