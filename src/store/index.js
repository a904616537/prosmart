import Vue          from 'vue'
import Vuex         from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import User         from './module/user'
import Setting      from './module/setting'

Vue.use(Vuex)

export default new Vuex.Store({
	actions,
	getters,
	modules : {
		User,
		Setting
	},
	// strict  : debug
})