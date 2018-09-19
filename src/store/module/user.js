import * as types  from '../mutation-types'
import Cookie      from 'vue-cookie';

// initial state
const state = {
	isLogin  : Cookie.get('user-token') != null && Cookie.get('user-token') != 'undefined',
	user     : JSON.parse(Cookie.get('user')),
	token    : Cookie.get('user-token'),
	username : 'store 数据测试！',
	identity : {}					// 身份信息

}

const actions = {
	onLogin({commit}, data) {
		commit(types.USER_LOGIN, data);
	},
	Logout({commit}, data) {
		commit(types.USER_LOGOUT, data);
	},
	onSetIdentity({commit}, data) {
		commit(types.USER_SET_IDENTITY, data);
	},
}

// mutations
const mutations = {
	[types.USER_LOGIN] (state, data) {
		const {user, token} = data;
		state.user     = user;
		state.identity = user.identity || {};
		Cookie.set('user', JSON.stringify(user));

		if(token) {
			state.token    = token;
			Cookie.set('user-token', token);
		}
		state.isLogin  = true;
		state.showFrom = false;
	},
	[types.USER_LOGOUT] (state, data) {
		state.isLogin = false;
		state.token   = '';
		state.user    = {};
		Cookie.delete('user');
		Cookie.delete('user-token');
	},
	[types.USER_SET_IDENTITY] (state, data) {
		state.identity = data;
	},
}

export default {
	state,
	actions,
	mutations
}