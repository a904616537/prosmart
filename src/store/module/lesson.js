import * as types  from '../mutation-types'

// initial state
const state = {
	lesson : []
}

const actions = {
	setLesson({commit}, data) {
		commit(types.SET_LESSON, data);
	}
}

// mutations
const mutations = {
	[types.SET_LESSON] (state, data) {
		state.lesson = data;
	}
}

export default {
	state,
	actions,
	mutations
}