<template>
	<div class="video-box">
		<video-player class="video-player-box"
		ref="videoPlayer"
		:options="playerOptions"
		:playsinline="true"
         customEventName="customstatechangedeventname">
			</video-player>
		<div class="play" @click="onPlay">
			<img v-show="show_play" src="static/icons/play.png" class="play-btn">
		</div>
		
	</div>
</template>

<script>
	export default{
		name : 'popout',
		data() {
			return {
				show_play : true,

				playerOptions: {
					width         : this.width,
					muted         : false,
					controls      : false,
					playbackRates : [0.7, 1.0, 1.5, 2.0],
					sources       : [{
						type          : "video/mp4",
						src           : "http://image.mybarrefitness.com/images/1537286401184.mp4"
					}],
					poster        : this.$route.query.img || 'static/imgs/pic-2.jpg',
				}
			}
		},
		props: {
			click: {
				type : Function,
				default : () => console.log('clost')
			},
			width : {
				type    : Number,
				default : document.body.scrollWidth
			}
		},
		computed: {
			player() {
				return this.$refs.videoPlayer.player
			}
		},
		methods : {
			onPlayerPlay(player) {
				// 播放中，隐藏按钮
				this.show_play = false;
			},
			onPlayerPause(player) {
				// 暂停，显示按钮
				this.show_play = true;
			},
			onPlay() {
				if(this.show_play) {
					this.show_play = false;
					this.player.play();
				} else {
					this.show_play = true;
					this.player.pause();
				}
			},
			// ...player event

			// or listen state event
			playerStateChanged(playerCurrentState) {
				// console.log('player current update state', playerCurrentState)
			},

			// player is ready
			playerReadied(player) {
				console.log('the player is readied', player)
				// you can use it to do something...
				// player.[methods]
			}
		}
	}
</script>

<style scoped>
.video-box{
	width: 100%;
	background: #f4f4f4;
	position: relative;	
}
.video-box .play {
	width: 100%;
	height : 100%;
	top: 0;
	position: absolute;
	z-index: 99999;
	display: flex;
	align-items: center;
	justify-content: center;
}
.video-box .play .play-btn {
		margin: 0 auto;
		width: 20vw;
	}
</style>