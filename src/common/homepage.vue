<!--  首页  -->
<template>
	<div class="homepage">
		<div class="headline">
			<span>欢迎你 {{user}}</span>
			<span>回顾</span>	
		</div>
		<div class="card">
			<div class="title">欢迎来到Sportgo!</div>
			<div class="text">
				像任何俱乐部或团队一样，Sportgo在被整个团队使用时效果最好。<br/>
				把你的冰球队的技能提高到一个新的水平，把我们的运动训练内容，包括进步的实践计划，技能录像和动画训练，附在你计划的事件上。
			</div>		
		</div>
		<div class="lesson">
			<div class="title">冰球训练课程</div>
			<div class="title-img">
				<div class="img-style" style="background-image: url('static/imgs/pic-3.jpg')"></div>
			</div>
		</div>
		<div class="team">
			<div class="title">新增球队</div>
			<div class="title-img">
				<div class="img-style" style="background-image: url('static/imgs/pic-8.jpg')"></div>
				<div class="bottom">
					<router-link to="/search"><span>发现球队</span></router-link>
					<span @click="popOut">创建球队</span>
				</div>
			</div>
		</div>
		<v-popout class="pop-style" v-show="showPop" :click="close">
			<div class="text">创建球队将进入教练登录页面</div>
			<div class="puplic-popbtn">教练登录</div>
		</v-popout>
	</div>
</template>

<script>
	export default{
		name : 'homepage',
		data() {
			return {
				user : 'User Name!',
				showPop : false
			}
		},
		methods: {
			popOut() {
				this.showPop = !this.showPop
			},
			close() {
				this.showPop = false
			}
		}
	}
</script>

<style lang="scss">
	$title: 15px;
	$puplic-space: 20px;
	.homepage{
		text-align: left;
		padding: 0 10px;
		font-size: $title;
		.headline{
			display: flex;
			justify-content: space-between;
		}
		.card{
			padding: $puplic-space/4;
			box-shadow: 0 2px 4px rgba(0,0,0,.35);
			border-radius: 8px;
			font-size: 14px;
			margin-top: $puplic-space/2;
		}
	}
	.title{
		font-family: fontM;
		font-weight: 500;
		line-height: $puplic-space*2;
		font-size: $title;
	}
	.title-img{
		border-radius: 8px;
		margin-bottom: $puplic-space/2;
		box-shadow: 0 2px 4px rgba(0,0,0,.35);
		overflow: hidden;
		.img-style{
			height: 190px;
			width: 100%;
			background-size: cover;
			background-repeat: no-repeat;
		}
		.bottom{
			font-size: 14px;
			line-height: 30px;
			padding: $puplic-space/2;
			span{
				margin-right: $puplic-space*2;
			}
		}
	}
	.pop-style{
		.text{
			margin-bottom: $puplic-space;
		}
	}
</style>