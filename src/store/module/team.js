import * as types  from '../mutation-types'
// initial state
const state = {
	team : []
}

const actions = {
	setTeam({commit}, data) {
		commit(types.SET_TEAM, data);
	},
	clearTeam({commit}, data) {
		commit(types.CLEAR_TEAM, data);
	}
}

// mutations
const mutations = {
	[types.SET_TEAM] (state, data) {
		console.log('set team', data)
		state.team = data;
	},
	[types.CLEAR_TEAM] (state, data) {
		state.team = [];
	},
}

export default {
	state,
	actions,
	mutations
}