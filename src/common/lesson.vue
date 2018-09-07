<template>
	<div class="lesson">
		<div class="head">
			<div>
				<img src="static/icons/video-back.png" class="back-icon" />
				初级阶段
			</div>
			<div>
				<img src="static/icons/level.png" class="level-icon" />
			</div>
		</div>
		<div class="head-nav">
			<li class="checked">初级阶段</li>
			<li>中级阶段</li>
			<li>高级阶段</li>
		</div>
		<div class="content">
			<div class="item">
				<img src="static/imgs/pic-2.jpg" alt="" class="img-style" />
				<div class="inner">
					<div class="title">冰球课程</div>
					<div class="text">初级阶段的冰球训练课程，将一些冰球规则和基础性的冰球技巧教授给学员，让学员更加熟悉冰球这一项活动</div>
				</div>
			</div>
			<div class="item">
				<img src="static/imgs/pic-2.jpg" alt="" class="img-style" />
				<div class="inner">
					<div class="title">技能</div>
					<div class="text">在这个技能视频教程中Evan Marble示范如何返回到站在最安全，最快，最可控的方式。跌倒是不可避免的，但爬起来是一种学习的技能。</div>
				</div>
			</div>
			<div class="item">
				<img src="static/imgs/pic-2.jpg" alt="" class="img-style" />
				<div class="inner">
					<div class="title">演习</div>
					<div class="text">初级阶段的演习是新手刚开始接触冰球时必不可少的一个阶段！</div>
				</div>
			</div>
			<div class="item">
				<img src="static/imgs/pic-2.jpg" alt="" class="img-style" />
				<div class="inner">
					<div class="title">生活健康</div>
					<div class="text">初级阶段的演习是新手刚开始接触冰球时必不可少的一个阶段！</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name : 'lesson',
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss">
	$puplic-space: 20px;
	.lesson{
		font-size: 14px;
		.head{
			background-color: rgba(33,36,54,.6);
			color: #fff;
			display: flex;
			flex: 1;
			justify-content: space-between;
			line-height: $puplic-space*2;
			padding: 0 $puplic-space/2;
			.back-icon{
				width: 17px;
				height: 17px;
				margin-right: $puplic-space/2;
				vertical-align: middle;
			}
			.level-icon{
				width: 28px;
				height: 28px;
				vertical-align: middle;
			}
		}
		.head-nav{
			line-height: $puplic-space*2;
			padding: 0 $puplic-space/2;
			box-shadow: 0 2px 4px rgba(0,0,0,.35);
			display: flex;
			flex: 1;
			justify-content: space-around;
			li{
				display: inline-block;
			}
			.checked{
				color: #AAAAAA;
			}
		}
		.content{
			.item{
				padding: $puplic-space $puplic-space/2;
				display: flex;
				text-align: left;
				border-bottom: 1px solid rgba(33,36,54,.1);
			}
			.img-style{
				width: 110px;
				height: 110px;
				border-radius: 8px;
				margin-right: $puplic-space/2;
			}
			.title{
				font-family: fontM;
				font-weight: 500;
				font-size: 15px;
				margin-bottom: $puplic-space/2;
			}
		}
	}
</style>