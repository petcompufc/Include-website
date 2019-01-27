import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/schedule/:day',
      name: 'schedule',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "programming" */ './views/Schedule.vue'),
    },
    {
      path: '/certificates',
      name: 'certificates',
      component: () => import(/* webpackChunkName: "certificates" */ './views/Certificates.vue'),
    },
    {
      path: '/map',
      name: 'map',
      component: () => import(/* webpackChunkName: "map" */ './views/Map.vue'),
    },
  ],
});
