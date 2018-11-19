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

			<div v-for="(item, index) in levelList" :key="index" class="item" @click="toItem(item)">
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
	import Vue                    from 'vue';
	import axios                  from 'axios';
	import {mapState, mapActions} from 'vuex';
	export default{
		name : 'lesson',
		data() {
			return {
				level_key : 0
			}
		},
		computed : mapState({
			user     : state => state.User.user,
			token    : state => state.User.token,
			is_login : state => state.User.isLogin,
			level    : state => state.Setting.level,
			lesson   : state => state.Lesson.lesson,
			levelArray() {
				let arr =[];
				for (let [key, value] of this.level) {
					arr.push(value);
				}
				return arr;
			},
			levelList() {
				return this.lesson.filter(val => val.level == this.level_key)
			}
        }),
		methods: {
			...mapActions([
				'setLesson',
			]),
			onSwitch(index) {
				this.level_key = index;
			},
			onBack() {
				this.$router.back();
			},
			getData() {
				axios.get(Vue.setting.api + '/course/all', {
					params: {}
				})
				.then(result => result.data)
				.then(result => {
	                console.log('搜索结果', result);
	                this.setLesson(result.data)
	            })
	            .catch(err => {
	                console.log('error', err)
	            })
			},
			toItem(val) {
				console.log('toitem', val)
				Object.assign(val, {level : this.level_key});
				this.$router.push({path : 'lessonItem', query : {_id : val._id}});
			}
		},
		mounted() {
			this.getData();
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