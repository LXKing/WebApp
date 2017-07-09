import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
	mode: 'history',
	// 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
	scrollBehavior: () => ({　　　　
		y: 0　　
	}),
	routes: [{
			path: '/home',
			name: 'home',
			component: Home
		},
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: '*',
			redirect: '/home'
		}
	]
})