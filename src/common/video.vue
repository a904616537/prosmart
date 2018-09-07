<template>
	<div class="video">
		<div class="head">
			<img src="static/icons/video-back.png" alt="" class="icon-style" @click="back"/>
			力量滑冰
		</div>
		<div class="video-box">
			
		</div>
		<div class="video-bottom">
			<div class="inner">
				<img src="static/icons/share.png" class="share-icon">
				分享
			</div>
		</div>	
		<div class="content">
			<div class="title">力量滑冰</div>
			<div class="text">
				在这个ProSmart视频教程中Evan Marble示范如何返回到站在最安全，最快，最可控的方式。跌倒是不可避免的，但爬起来是一种学习的技能。
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name : 'video',
		data() {
			return {

			}
		},
		methods : {
			back() {
				console.log('back')
			}
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
		.video-box{
			width: 100%;
			height: $puplic-space*10;
			background: #f4f4f4;
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