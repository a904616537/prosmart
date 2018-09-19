<template>
	<div class="video">
		<div class="head">
			<img src="static/icons/video-back.png" alt="" class="icon-style" @click="back"/>
			{{data.title}}
		</div>
		
		<v-video />
		<div class="video-bottom">
			<div class="inner">
				<img src="static/icons/share.png" class="share-icon">
				分享
			</div>
		</div>	
		<div class="content">
			<div class="title">{{data.title}}</div>
			<div class="text" v-html="data.desc"></div>
		</div>
	</div>
</template>

<script>
	import Video      from '@/components/video';
	import {mapState, mapActions} from 'vuex';
	export default{
		name : 'videos',
		components : {
			'v-video' : Video
		},
		data() {
			return {
				data : this.$route.query || {},
			}
		},
		methods : {
			back() {
				this.$router.back();
			},
		},
		mounted() {

				// console.log('this.$refs.videoPlayer.player', this.$refs.videoPlayer.player)
				// this.$refs.videoPlayer.player.play();
		}
	}
</script>

<style lang="scss">
	$puplic-space: 20px;
	.video{
		text-align: left;
		.head{
			background-color: rgba(33,36,54,.6);
			color: #fff;
			line-height: $puplic-space*2;
			font-size: 14px;
			padding: 0 $puplic-space/2;
			.icon-style{
				width: 17px;
				height: 17px;
				vertical-align: middle;
				margin-right: $puplic-space/2;
			}
		}

		.video-bottom{
			line-height: 40px;
			padding: 0 $puplic-space/2;
			font-family: fontM;
			font-weight: 500;
			border-bottom: 1px solid rgba(33,36,54,.1);
			.share-icon{
				width: $puplic-space;
				height: $puplic-space;
				margin-top: 10px;
				margin-right: $puplic-space/4;
			}
			.inner{
				display: flex;
				justify-content: flex-end;
			}
		}
		.content{
			font-size: 14px;
			font-family: fontM;
			font-weight: 500;
			padding: $puplic-space $puplic-space/2;
			.title{
				font-size: 15px;
				text-align: center;
				margin-bottom: $puplic-space/2;
			}
		}
	}
</style>