import Vue from 'vue'
import Router from 'vue-router'

import Guide from '../views/guide/Guide.vue'
import Home from '../views/home/Home.vue'
import Account from '../views/account/Account.vue'
import AccountIndex from '../views/account/children/AccountIndex.vue'
import Consumption from '../views/account/children/Consumption.vue'
import Earn from '../views/account/children/Earn.vue'
import Bill from '../views/bill/Bill.vue'
import Chart from '../views/chart/Chart.vue'

import Tool from '../assets/lib/Tool'

Vue.use(Router);

const router = new Router({
	mode: 'history',
	// 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
	scrollBehavior: () => ({　　　　
		y: 0　　
	}),
	routes: [
		/**引导页*/
		{
			path: '/guide',
			name: 'guide',
			component: Guide,
			meta: {
				status: 0
			}
		},
		/**首页*/
		{
			path: '/home',
			name: 'home',
			component: Home,
			meta: {
				status: 1
			}
		},
		/**记账*/
		{
			path: '/account',
			name: 'account',
			component: Account,
			meta: {
				status: 2
			},
			children: [{
					path: '/account/account_index',
					name: 'account_index',
					component: AccountIndex,
					meta: {
						status: 3
					}
				},
				{
					path: '/account/consumption',
					name: 'consumption',
					component: Consumption,
					meta: {
						status: 4
					}
				},
				{
					path: '/account/earn',
					name: 'earn',
					component: Earn,
					meta: {
						status: 5
					}
				}
			]
		},
		/**账单页面*/
		{
			path: '/bill',
			name: 'bill',
			component: Bill,
			meta: {
				status: 6
			}
		},
		/**分析页面*/
		{
			path: '/chart',
			name: 'chart',
			component: Chart,
			meta: {
				status: 7
			}
		},
		/**默认跳转页面*/
		{
			path: '/',
			redirect: '/guide'
		},
		/**错误页面*/
		{
			path: '*',
			redirect: '/error'
		}
	]
});

/**
 * 判断用户是否第一次打开APP，是否启动引导页面
 * 设置路由之间的跳转动画
 * */
router.beforeEach((to, from, next) => {
	let store = this.a.app.$store;
	if(store) {
		if(from.meta.status > to.meta.status) store.commit('SET_ANIMATE_NAME', 'vux-pop-out');
		else store.commit('SET_ANIMATE_NAME', 'vux-pop-in');
	}
	let is_not_first = Tool.dataToLocalStorageOperate.achieve('is_not_first');
	if(!is_not_first && to.path != '/guide') next('/guide');
	else if(is_not_first && to.path == '/guide') next('/home');
	else next();
});

export default router