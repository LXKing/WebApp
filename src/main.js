// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import GuidePage from './components/guidePage'
import axios from 'axios'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

import { Indicator, Toast } from 'mint-ui';

Vue.use(GuidePage);
Vue.use(Mint);


Vue.config.productionTip = false

//axios配置
axios.interceptors.request.use(function(request){
	//showloading
	Indicator.open('加载中...');
	return request;
}, function(error){
	return Promise.reject(error);
});

axios.interceptors.response.use(function(response){
	//hideloading
	Indicator.close();
	return response;
}, function(error){
	return Promise.reject(error);
});
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
//axios.defaults.baseURL = 'http://localhost:8088/';

Vue.prototype.$http = axios;

require('../static/css/swiper.min.css');
require('../static/js/jquery.min.js');
require('../static/js/swiper.min.js');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  	store,
template: '<App/>',
components: { App }
  	//render: h => h(App)
})
