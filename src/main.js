import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import './assets/lib/flexible.js'
import './assets/lib/Chart'
import axios from 'axios'
//import Mint from 'mint-ui';
//import 'mint-ui/lib/style.css';
//import { Indicator, Toast } from 'mint-ui';

/**使用vux的插件功能*/
import { LoadingPlugin, ToastPlugin } from 'vux'

Vue.use(LoadingPlugin);
Vue.use(ToastPlugin);

//Vue.use(Mint);

Vue.config.productionTip = false

//axios配置
axios.interceptors.request.use(function(request) {
	//showloading
	//Indicator.open('加载中...');
	// 显示
	vue.$vux.loading.show({
		text: '加载中...'
	});
	return request;
}, function(error) {
	return Promise.reject(error);
});

axios.interceptors.response.use(function(response) {
	//hideloading
	//Indicator.close();
	// 隐藏
	vue.$vux.loading.hide();
	return response;
}, function(error) {
	return Promise.reject(error);
});
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
//axios.defaults.baseURL = 'http://localhost:8088/';

Vue.prototype.$http = axios;

var vue = new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: {
		App
	}
	//render: h => h(App)
})