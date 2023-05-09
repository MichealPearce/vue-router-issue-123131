import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from './pages/index.vue'
import AboutPage from './pages/about.vue'
import ContactPage from './pages/contact.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: IndexPage,
		},
		{
			path: '/about',
			component: AboutPage,
		},
		{
			path: '/contact',
			component: ContactPage,
		},
	],
})

createApp(App).use(router).mount('#app')
