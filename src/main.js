// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue    from 'vue'
import App    from './App'
import router from './router'
import Store  from './store'
import Mixins from './Mixins';
import iView  from 'iview';

import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false

Vue.use(Store)
Vue.use(iView, {
	transfer : true,
	size     : 'large'
});

Vue.setting = {
	api : 'http://localhost:0000'
}


/* eslint-disable no-new */
new Vue({
	router,
	el         : '#app',
	components : { App },
	template   : '<App/>',
	mixins     : [Mixins]
})