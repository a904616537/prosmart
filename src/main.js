// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue    from 'vue'
import App    from './App'
import router from './router'
import Store  from './store'
import Mixins from './Mixins'
import iView  from 'iview'
import VueVideoPlayer from 'vue-video-player'

import 'iview/dist/styles/iview.css'
import 'video.js/dist/video-js.css'

Vue.config.productionTip = false

Vue.use(Store)
Vue.use(iView, {
	transfer : true,
	size     : 'large'
});

Vue.use(VueVideoPlayer, {});

Vue.setting = {
	// api : 'http://192.168.0.102:8081',
	api : 'https://7296bf1d.ngrok.io',
}


/* eslint-disable no-new */
new Vue({
	router,
	el         : '#app',
	store      : Store,
	components : { App },
	template   : '<App/>',
	mixins     : [Mixins]
})
