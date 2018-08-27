import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)


const routers = [
	{
		path      : '/',
		name      : 'HelloWorld',
		component : HelloWorld
	}
]


const router = new Router({
	// mode: 'history',
	routes : routers,
})

router.beforeEach((to, from, next) => {
	document.body.scrollTop = 0;
	next();
})

export default router;