<!--  导航  -->
<template>
	<div class="logovideo">
		<v-video ref="logovideo" :src="video" poster="static/logo/Sportgo_Logo.png" :end="toPage"/>
	</div>
</template>

<script>
	import Vue                    from 'vue';
	import axios                  from 'axios';
	import {mapState, mapActions} from 'vuex';
	import Video      from '@/components/video';
	export default{
		name : 'logovideo',
		data() {
			return {
				video : 'static/logo/Sportgo.mp4'
			}
		},
		components : {
			'v-video' : Video
		},
		computed : mapState({

        }),
		methods: {
			...mapActions([
	            'onShowNav',
	            'onSetIdentity',
	            'onUpdateTrans'
	        ]),
	        toPage() {
	        	this.$router.replace({path : '/switchrole'});
	        },
		},
		mounted() {
			setTimeout(() => {
				if(this.$refs.logovideo) {
					this.$refs.logovideo.player.play();
				}
				
				this.onUpdateTrans('translation');
				setTimeout(() => {
					if(this.$refs.logovideo) {
						this.$refs.logovideo.player.pause()
					}
				}, 5000);
			}, 2000);

		}
	}
</script>

<style scoped>

</style>