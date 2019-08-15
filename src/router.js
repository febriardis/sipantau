import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Grafik from './views/Grafik';
import History from './views/History';
import Information from './views/Information';
import Input from './views/Input';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: '/grafik',
      name: 'grafik',
      component: Grafik
    },
    {
      path: '/history',
      name: 'history',
      component: History
    },
    {
      path: '/information',
      name: 'information',
      component: Information
    },
    {
      path: '/input',
      name: 'input',
      component: Input
    }
  ]
});
