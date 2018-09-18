<!--  导航  -->
<template>
	<div v-if="shownav" class="navbar">
		<div class="head">
			<img src="static/logo/Sportgo_Logo_RGB.png" class="logo-img" alt="sportgo" />
			<img src="static/icons/menu.png" class="icon" alt="menu" @click="showMenu"/>
		</div>
		<div class="dropdown" v-show="dropdown">
			<li @click="toPage('/home')">主页</li>
			<li>
				<span @click="me">我的<img src="static/icons/down.png" class="drop-icon" /></span>
				<div class="drop" v-show="showMe">
					<a @click="toPage('/profile')">个人中心</a><br>退出
				</div>			
			</li>
			<li @click="toPage('/lesson')">冰球课程</li>
			<li @click="toPage('/search')">发现球队</li>
			<li @click="toPage('/team')">我的球队</li>
			<li @click="toPage('/profile')">活动日历</li>
			<li @click="toPage('/profile')">冰球商店</li>
		</div>
	</div>
</template>

<script>
	import {mapState, mapActions} from 'vuex';
	export default{
		name : 'navbar',
		data() {
			return {
				dropdown : false,
				showMe   : false
			}
		},
		computed : mapState({
			shownav : state => state.Setting.shownav,
        }),
		methods: {
			toPage(path) {
				this.showMenu();
				this.$router.push({path});
			},
			showMenu() {
				this.dropdown = !this.dropdown
				if(this.dropdown)
					this.showMe = false
			},
			me() {
				this.showMe = !this.showMe
			}
		}
	}
</script>

<style lang="scss">
	$puplic-style : 20px;
	$bg-color : #fff;
	.navbar{
		.head{
			background-color: $bg-color;
			padding: 17px 10px;
			text-align: left;
			.logo-img{
				width: 30%;
			}
			.icon{
				width: $puplic-style;
				height: $puplic-style;
				float: right;
				margin-top: $puplic-style/2;
			}
		}
		.dropdown{
			position: fixed;
			right: 0;
			background-color: $bg-color;
			color: #313131;
			z-index: 99;
			border: 1px solid #eee;
			line-height: $puplic-style*2;
			font-size: 14px;
			li{
				list-style: none;
				width: $puplic-style*5;
				border-bottom: 1px solid #eee;
			}
			.drop-icon{
				width: $puplic-style;
				height: $puplic-style;
				position: absolute;
				margin-top: $puplic-style/2;
				margin-left: 5px;
			}
			.drop{
				background-color: rgba(33,36,54,.05);
				line-height: 35px;
			}
		}
	}
</style>