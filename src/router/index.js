import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const index = () => import('components/index/index');

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: {
        name: 'index'
      }
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      meta: {
        title: '首页',
        keepAlive: true // 需要被缓存
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  };
  next();
});

export default router;
