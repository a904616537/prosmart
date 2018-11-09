<template>
	<div class="activityPage">
		<div class="title">所有活动</div>
		<div class="item">
			<label>练习冰球时间</label>
			<p><img class="icon" src="static/icons/time.png" alt=""/>2018-8-27, 9:00-14:00</p>
			<label>练习冰球地点</label>
			<p><img class="icon" src="static/icons/local.png" alt=""/>上海市, 静安区, **大厦, 7楼</p>
			<label>活动类型</label>
			<p class="type"><img class="icon" src="static/icons/type.png" alt=""/>游戏| 初级阶段| 练习计划1-2</p>
			<div class="bottom">
				<div class="">Sportgo冰球</div>
				<div class=""><img src="static/icons/share.png" class="icon" alt="分享"/></div>
			</div>
		</div>
		<div class="item">
			<label>练习冰球时间</label>
			<p><img class="icon" src="static/icons/time.png" alt=""/>2018-8-27, 9:00-14:00</p>
			<label>练习冰球地点</label>
			<p><img class="icon" src="static/icons/local.png" alt=""/>上海市, 静安区, **大厦, 7楼</p>
			<label>活动类型</label>
			<p class="type"><img class="icon" src="static/icons/type.png" alt=""/>游戏| 初级阶段| 练习计划3-4</p>
			<div class="bottom">
				<div class="">Sportgo冰球</div>
				<div class=""><img src="static/icons/share.png" class="icon" alt="分享"/></div>
			</div>
		</div>
		<div class="item">
			<label>练习冰球时间</label>
			<p><img class="icon" src="static/icons/time.png" alt=""/>2018-8-27, 9:00-14:00</p>
			<label>练习冰球地点</label>
			<p><img class="icon" src="static/icons/local.png" alt=""/>上海市, 静安区, **大厦, 7楼</p>
			<label>活动类型</label>
			<p class="type"><img class="icon" src="static/icons/type.png" alt=""/>游戏| 初级阶段| 练习计划3-4</p>
			<div class="bottom">
				<div class="">Sportgo冰球</div>
				<div class=""><img src="static/icons/share.png" class="icon" alt="分享"/></div>
			</div>
		</div>
		<div class="more" @click="more">查看所有活动<img class="icon" src="static/icons/more.png" /></div>
	</div>
</template>

<script>
	export default{
		name : 'activity',
		data() {
			return {

			}
		},
		methods: {
			more() {
				console.log('more')
			}
		}
	}
</script>

<style lang="scss">
	$title: 15px;
	$puplic-space: 20px;
	.activityPage{
		text-align: left;
		padding: 0 10px;
		.title{
			font-weight: 500;
			font-family: fontM;
			font-size: $title;
		}
		.item{
			padding: $puplic-space/2;
			box-shadow: 0 2px 4px rgba(0,0,0,.35);
			border-radius: 8px;
			font-size: 14px;
			margin-bottom: $puplic-space;
			label{
				font-weight: 500;
				font-size: $title;
			}
			p{
				margin-bottom: 10px;
				.icon{
				    width: 20px;
				    vertical-align: middle;
				}
			}
			.type{
				text-decoration: underline;
			}
			.bottom{
				border-top: 1px solid #eee;
				font-weight: 500;
				font-size: $title;
				display: flex;
				justify-content: space-between;
				line-height: $puplic-space*2;
				padding-top: $puplic-space/2;
				.icon{
					width: 28px;
				}
			}
		}
		.more{
			text-align: center;
			margin-bottom: $puplic-space;
			img.icon{
				width: 14px;
				margin-left: $puplic-space/3;
				vertical-align: middle;
			}
		}
	}
</style>