import Vue from 'vue';
import Mint from 'mint-ui';
import VueRouter from 'vue-router';

import App from './App';
import Home from './components/Home';
import Animals from './components/Animals';
import AnimalInfo from './components/AnimalInfo';

Vue.use(Mint);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/animals', component: Animals },
  { path: '/animals/:name', component: AnimalInfo },
];

const router = new VueRouter({
  routes,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
});
