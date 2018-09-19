import * as types  from '../mutation-types'

// initial state
const state = {
	shownav : true,
	level   : new Map([
					[0, '初级阶段'],
					[1, '中级阶段'],
					[2, '高级阶段'],
				])
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