<!--  导航  -->
<template>
	<div class="weclome">
		<div class="logos" :class="{active : show}">
			<img src="static/logo/Sportgo_Logo_RGB.png">
			<p>Learn. Play. Connect.</p>
		</div>
	 <transition :name="transition" mode="out-in">
		<router-view />
	</transition>
	</div>
</template>

<script>
	import {mapState, mapActions} from 'vuex';
	export default{
		name : 'weclome',
		data() {
			return {
				show : false,
			}
		},
		computed : mapState({
			user       : state => state.User.user,
			token      : state => state.User.token,
			is_login   : state => state.User.isLogin,
			transition : state => state.Setting.transition
        }),
		methods: {
			...mapActions([
	            'onShowNav',
	        ]),
		},
		mounted() {
			this.onShowNav(false);
			setTimeout(() => {
					this.show = true;
					// this.$router.replace({path : '/switchrole'});
					this.$router.replace({path : '/cutvideo'});
			}, 1000);
		}
	}
</script>

<style scoped>
.weclome {
	width           : 100vw;
	display         : flex;
	flex-direction  : column;
	align-items     : center;
	justify-content : center;
	overflow        : hidden;
}
.weclome .logos{
	width           : 60vw;
	height          : 100vh;
	display         : flex;
	flex-direction  : column;
	align-items     : center;
	justify-content : center;
	transition      : height 1s;
}
.weclome .logos.active {
	height: 40vh;
}
.weclome .logos img {
	width: 100%;
}
.weclome .logos p {
	margin-top : 1em;
	font-size  : 10pt;

}

.translation-enter-active {
  animation: translation-in 0.5s;
}
.translation-leave-active {
  animation: translation-in 0.5s reverse;
}
@keyframes translation-in {
  0% {
    transform: translate(100vw, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>