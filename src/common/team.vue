<template>
	<div class="team">
		<div class="title">我的球队</div>
		<div class="content">
			<div class="card">
				<div class="team-name">Sportgo冰球队</div>
				<div class="operate"><img src="static/icons/point.png" class="card-icon"/></div>
			</div>
			<div class="card">
				<div class="team-name">Sportgo冰球队</div>
				<span class="card-btn" @click="exit">退出球队</span>
			</div>
		</div>
		<v-popout class="pop-style" v-show="showPop" :click="close">
			<div class="text">确认退出球队？</div>
			<div class="btn">
				<div class="puplic-popbtn" @click="close">取消</div>
				<div class="puplic-popbtn">确认</div>
			</div>
		</v-popout>
	</div>
</template>

<script>
	export default{
		name : 'team',
		data() {
			return {
				showPop : false
			}
		},
		methods: {
			exit() {
				this.showPop = !this.showPop
			},
			close() {
				this.showPop = false
			}
		}
	}
</script>

<style lang="scss">
	.team{
		text-align: left;
		padding: 0 10px;
		font-family: fontM;
		.title{
			font-size: 15px;
			line-height: 35px;
		}
		.content{
			.card{
				line-height: 40px;
				font-size: 14px;
				box-shadow: 0 2px 4px rgba(0,0,0,.35);
				border-radius: 8px;
				display: flex;
				flex: 1;
				justify-content: space-between;
				padding: 0 10px;
				margin-bottom: 20px;
				.card-icon{
					width: 4px;
					height: 18px;
					vertical-align: middle;
				}
				.card-btn{
					height: 28px;
					line-height: 28px;
					color: #fff;
					background-color: #AAAAAA;
					margin-top: 7px;
					padding: 0 14px;
				}
			}
		}
		.pop-style{
			.text{
				margin-bottom: 40px;
			}
			.btn{
				display: flex;
				justify-content: space-around;
			}
		}
	}
</style>