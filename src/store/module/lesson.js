import * as types  from '../mutation-types'

// initial state
const state = {
	lesson : [
		{
			title : '冰球课程',
			desc : '初级阶段的冰球训练课程，将一些冰球规则和基础性的冰球技巧教授给学员，让学员更加熟悉冰球这一项活动',
			img : 'static/imgs/pic-1.jpg',
			level : 0
		},{
			title : '技能',
			desc : '在这个技能视频教程中Evan Marble示范如何返回到站在最安全，最快，最可控的方式。跌倒是不可避免的，但爬起来是一种学习的技能。',
			img : 'static/imgs/pic-2.jpg',
			level : 1
		},{
			title : '演习',
			desc : '初级阶段的演习是新手刚开始接触冰球时必不可少的一个阶段！',
			img : 'static/imgs/pic-3.jpg',
			level : 2
		},{
			title : '生活健康',
			desc : '初级阶段的演习是新手刚开始接触冰球时必不可少的一个阶段！',
			img : 'static/imgs/pic-4.jpg',
			level : 1
		},
	]
}

const actions = {
	onShowNav({commit}, data) {
		commit(types.SETTING_SHOWNAV, data);
	},
}

// mutations
const mutations = {
	[types.SETTING_SHOWNAV] (state, data) {
		state.shownav = data;
	},
}

export default {
	state,
	actions,
	mutations
}