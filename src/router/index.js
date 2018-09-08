import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/common/homepage' //公共首页
import Search from '@/common/search' //搜索团队
import Profile from '@/common/profile' //个人信息
import ProfileEditor from '@/common/profileEditor' //编辑个人信息
import Video from '@/common/video' //视频
import Lesson from '@/common/lesson' //课程列表
import LessonItem from '@/common/lessonItem' //详细课程
import Team from '@/common/team' //团队
import Group from '@/common/group' //团队信息

import Navbar from '@/components/navbar'
import Popout from '@/components/popout' //弹框


Vue.use(Router)
Vue.component('v-popout', Popout)
Vue.component('v-nav', Navbar)


const routers = [
	{
		path      : '/',
		component : Homepage
	},
	{
		path      : '/search',
		component : Search
	},
	{
		path      : '/profile',
		component : Profile
	},
	{
		path      : '/editor',
		component : ProfileEditor
	},
	{
		path      : '/video',
		component : Video
	},
	{
		path      : '/lesson',
		component : Lesson
	},
	{
		path      : '/lessonItem',
		component : LessonItem
	},
	{
		path      : '/team',
		component : Team
	},
	{
		path      : '/group',
		component : Group
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