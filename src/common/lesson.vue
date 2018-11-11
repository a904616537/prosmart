<template>
	<div class="lesson">
		<div class="head">
			<div>
				<img src="static/icons/video-back.png" class="back-icon" @click="onBack"/>
				{{level.get(level_key)}}
			</div>
			<div>
				<img src="static/icons/level.png" class="level-icon" />
			</div>
		</div>
		<div class="head-nav">
			<li v-for="(item, index) in levelArray" :key="index" @click="onSwitch(index)" :class="{checked : level_key == index}" >{{item}}</li>
		</div>
		<div class="content">

			<div v-for="(item, index) in items" :key="index" class="item" @click="toItem(item)">
				<img :src="item.img" alt="" class="img-styles" />
				<div class="inner">
					<div class="title">{{item.title}}({{level.get(level_key)}})</div>
					<div class="text">{{item.desc}}</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	import {mapState, mapActions} from 'vuex';
	export default{
		name : 'lesson',
		data() {
			return {
				level_key : 0,
				items : [
					{
						title : '冰球课程',
						desc : '初级阶段的冰球训练课程，将一些冰球规则和基础性的冰球技巧教授给学员，让学员更加熟悉冰球这一项活动',
						img : 'static/imgs/pic-1.jpg',
						level : 0
					},{
						title : '技能',
						desc : '在这个技能视频教程中Evan Marble示范如何返回到站在最安全，最快，最可控的方式。跌倒是不可避免的，但爬起来是一种学习的技能。',
						img : 'static/imgs/pic-2.jpg',
						level : 1
					},{
						title : '演习',
						desc : '初级阶段的演习是新手刚开始接触冰球时必不可少的一个阶段！',
						img : 'static/imgs/pic-3.jpg',
						level : 2
					},{
						title : '生活健康',
						desc : '初级阶段的演习是新手刚开始接触冰球时必不可少的一个阶段！',
						img : 'static/imgs/pic-4.jpg',
						level : 1
					},
				]
			}
		},
		computed : mapState({
			user     : state => state.User.user,
			token    : state => state.User.token,
			is_login : state => state.User.isLogin,
			level    : state => state.Setting.level,
			levelArray() {
				let arr =[];
				for (let [key, value] of this.level) {
					arr.push(value);
				}
				return arr;
			}
        }),
		methods: {
			onSwitch(index) {
				this.level_key = index;
			},
			onBack() {
				this.$router.back();
			},
			toItem(val) {
				Object.assign(val, {level : this.level_key});
				this.$router.push({path : 'lessonItem', query : {...val}});
			}
		}
		
	}
</script>

<style scoped>
.lesson {
	font-size: 14px;
}
.lesson .head{
	background-color: rgba(33,36,54,.6);
	color: #fff;
	display: flex;
	flex: 1;
	justify-content: space-between;
	line-height: 40px;
	padding: 0 10px;
}
.lesson .head .back-icon{
	width: 17px;
	height: 17px;
	margin-right: 10px;
	vertical-align: middle;
}
.lesson .head .level-icon{
	width: 28px;
	height: 28px;
	vertical-align: middle;
}
.lesson .head-nav{
	line-height: 40px;
	padding: 0 10px;
	box-shadow: 0 2px 4px rgba(0,0,0,.35);
	display: flex;
	flex: 1;
	justify-content: space-around;
	
}
.lesson .head-nav li{
	display: inline-block;
}
.lesson .head-nav .checked{
	color: #AAAAAA;
}
.lesson .content{
}

.lesson .content .item{
	padding         : 10px 10px;
	display         : flex;
	border-bottom   : 1px solid rgba(33, 36, 54, 0.1);
	flex-direction  : row;
	align-items     : flex-start;
	justify-content : flex-start;
	text-align      : left;
}
.lesson .content .item .inner {
	width: 65vw;
}
.lesson .content .item .img-styles{
	width         : 110px;
	height        : 110px;
	border-radius : 8px;
	margin-right  : 10px;
	vertical-align: middle;
}
.lesson .content .item .title{
	font-family   : fontM;
	font-weight   : 500;
	font-size     : 15px;
}
</style>