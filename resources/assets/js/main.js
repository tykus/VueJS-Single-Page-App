import Vue from 'vue';
import Router from 'vue-router';
import App from './components/App.vue';

Vue.use(Router);

var router = new Router();

router.start(App, '#app');
