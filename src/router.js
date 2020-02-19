import Vue from 'vue';
import Router from 'vue-router';

import One from '@/views/One.vue';
import Two from '@/views/Two.vue';
import Home from '@/views/Home.vue';

Vue.use(Router);

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '*',
			redirect: '/home',
		},
		{
			path: '/',
			redirect: '/home',
        },
        {
			path: '/home',
			name: 'home',
			component: Home,
		},
		{
			path: '/one',
			name: 'one',
			component: One,
		},
		{
			path: '/two',
			name: 'two',
			component: Two,
		}
		
	],
});



export default router;
