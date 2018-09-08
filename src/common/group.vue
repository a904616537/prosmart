<template>
	<div class="group">
		<div class="head">
			<div class="head-img" style="background-image: url('static/imgs/ball-head.jpg')"></div>
			<div class="title">Sportgo冰球队</div>
		</div>
		<div class="title">球队具体信息</div>
		<div class="card">
			教练:<span>Coach</span><br/>
			人数:<span>15人</span><br/>
			分布:<span><img src="static/icons/boy.png" class="boy-icon" />11 , <img src="static/icons/girl.png" class="girl-icon" />4</span><br/>
			组别:<span>青年组</span><br/>
			地址:<span>上海市，静安区，康定路，****大楼</span><br/>
			时间:<span>成立于2014年6月8日</span>
		</div>
		<div class="title">球员列表</div>
		<div class="card card-box">
			<div class="item-list">
				<div class="item">
					<img src="static/imgs/user-1.jpeg" class="user-img" />
					user
				</div>
				<div class="item">
					<img src="static/imgs/user-2.jpeg" class="user-img" />
					user
				</div>
				<div class="item">
					<img src="static/imgs/user-3.jpeg" class="user-img" />
					user
				</div>
				<div class="item">
					<img src="static/imgs/user-4.jpeg" class="user-img" />
					user
				</div>
				<div class="item">
					<img src="static/imgs/user-2.jpeg" class="user-img" />
					user
				</div>
				<div class="item">
					<img src="static/imgs/user-1.jpeg" class="user-img" />
					user
				</div>
				<div class="item">
					<img src="static/imgs/user-3.jpeg" class="user-img" />
					user
				</div>
			</div>
			<p class="more">查看更多<img src="static/icons/more.png" class="more-icon"/></p>
		</div>
	</div>
</template>

<script>
	export default{
		name : 'group',
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss">
	$puplic-space: 20px;
	.group{
		padding: 0 10px;
		text-align: left;
		.head{
			padding: 30px 0 0;
			text-align: center;
		}
		.title{
			font-family: fontM;
			font-weight: 500;
			font-size: 15px;
			line-height: 40px;
		}
		.head-img{
			width: $puplic-space*5;
			height: $puplic-space*5;
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
			border-radius: 50px;
			margin: 0 auto;
		}
		.card{
			padding: $puplic-space/2;
			box-shadow: 0 2px 4px rgba(0,0,0,.35);
			border-radius: 8px;
			font-size: 14px;
			line-height: 30px;
			margin-bottom: $puplic-space;
			span{
				margin-left: $puplic-space/2;
			}
			.boy-icon{
				width: 17px;
				height: 17px;
			}
			.girl-icon{
				width: 15px;
				height: 15px;
			}
			.user-img{
				width: 50px;
				height: 50px;
				border-radius: 50px;
				box-shadow: 0 2px 4px rgba(0,0,0,.35);
				display: block;
				margin: 0 auto;
			}
		}
		.card-box{
			.item-list{
				display: flex;
				flex: auto;
				flex-wrap: wrap;
				.item{
					width: 20%;
					margin-bottom: 20px;
					text-align: center;
				}
			}
			.more{
				text-align: center;
				.more-icon{
					width: 12px;
					height: 12px;
					margin-left: 5px;
				}
			}
			
		}
	}
</style>