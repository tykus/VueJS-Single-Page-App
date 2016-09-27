import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';

import App from './components/App.vue';
import Category from './components/Category.vue';
import HomeView from './components/HomeView.vue';

Vue.use(Router);
Vue.use(Resource);

var router = new Router({
  history: true
});

router.map({
  '/': {
    name: 'home',
    component: HomeView
  },
  '/category/:categoryId': {
    name: 'category',
    component: Category
  }
});

router.redirect({
  '*': '/'
});

router.start(App, 'app');
