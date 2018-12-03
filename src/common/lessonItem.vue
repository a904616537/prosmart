<template>
	<div class="lessonItem">
		<div class="head">
			<div>
				<img src="static/icons/video-back.png" class="back-icon" @click="onBack"/>
				{{data.title}}
			</div>
			<div>
				<img src="static/icons/level.png" class="level-icon" />
			</div>
		</div>
		<div class="switch">
			<div v-for="(item, index) in [1,2,3,4,5,6,7,8,9,10,11, 12, 13,14,15]" :key="index" class="item" :class="{active : select == item}" @click="select = item">{{item}}</div>
		</div>
		<div class="content">
			<div class="title">
				<div>
					{{level.get(data.level)}}<span>|</span>{{data.title}}
				</div>
				<div>
					<img src="static/icons/share.png" class="share-img" />
					分享
				</div>
			</div>
			<div class="img-style" :style="'background-image: url('+data.img+')'"></div>
			<div class="item item-intro">
				<div class="label">
					<div class="intro">简介: </div>
					{{data.title}}
				</div>
				<div v-html="data.desc"></div>
			</div>
			<div v-for="(item, index) in items" :key="index" v-if="item" class="item">
				<div class="headline">{{item.label}}: </div>
				<div v-for="(val, key) in item.list" :key="index+'-'+key" class="box" @click="toVideo(val)">
					<img :src="val.img" alt="" class="box-imgs" />
					<div class="inner">
						<div class="label">{{val.title}}</div>
						<div class="text" v-html="val.desc"></div>
					</div>
				</div>
			</div>

			
			<!-- <div class="lesson-bottom">
				查看更多
				<img src="static/icons/more.png" alt="" class="more-img" />
			</div> -->
		</div>
	</div>
</template>		

<script>
	import {mapState, mapActions} from 'vuex';
	export default{
		name : 'lessonItem',
		data() {
			return {
				data   : {item : []},
				select : 1,
			}
		},
		computed : mapState({
			user     : state => state.User.user,
			token    : state => state.User.token,
			is_login : state => state.User.isLogin,
			level    : state => state.Setting.level,
			lesson   : state => state.Lesson.lesson,
			items() {
				return [
				{label : '预视频', list : typeof this.data.item == 'object'?this.data.item.filter(val => val && val.type == 0):[]},
				{label : '练习视频', list : typeof this.data.item == 'object'?this.data.item.filter(val => val && val.type == 1):[]}];
			}
        }),
		methods: {
			onBack() {
				this.$router.back();
			},
			toVideo(data) {
				this.$router.push({path : 'video', query : {...data}});
			}
		},
		mounted() {
			if(this.lesson && this.lesson.length > 0) {
				this.data = this.lesson.find(val => val._id == this.$route.query._id)
			} else this.$router.back(-1)
		}
	}
</script>

<style scoped>
.lessonItem{
	font-size  : 14px;
	text-align : left;
}
.lessonItem .head{
	background-color : rgba(33,36,54,.6);
	color            : #fff;
	display          : flex;
	justify-content  : space-between;
	line-height      : 40px;
	padding          : 0 10px;
	font-size        : 15px;
	font-family      : fontM;
	font-weight      : 500;
}
.lessonItem .head .back-icon{
	width          : 17px;
	height         : 17px;
	margin-right   : 10px;
	vertical-align : middle;
}
.lessonItem .head .level-icon{
	width: 28px;
	height: 28px;
	vertical-align: middle;
}
.lessonItem .switch {
	height                     : 50px;
	display                    : -webkit-box;
	overflow-x                 : scroll;
	-webkit-overflow-scrolling :touch;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.35);
}
.lessonItem .switch .item{
	width           : 10vw;
	line-height     : 50px;
	font-size       : 10pt;
	color           : #313131;
	display         : flex;
	align-items     : center;
	justify-content : center;
}
.lessonItem .switch .item.active {
	color: #ccc;
}
.lessonItem .content{
}
.lessonItem .content .title{
	display         : flex;
	padding         : 0 10px;
	font-size       : 15px;
	line-height     : 40px;
	justify-content : space-between;
}
.lessonItem .content .title .share-img{
	width          : 20px;
	height         : 20px;
	vertical-align : middle;
}
.lessonItem .content .title span{
	width   : 11px;
	display : inline-block;
}
.lessonItem .content .img-style{
	width             : 100%;
	height            : 200px;
	background-size   : cover;
	background-repeat : no-repeat;
}
.lessonItem .content .item{
	padding       : 20px 10px;
	font-size     : 14px;
	border-bottom : 1px solid rgba(33,36,54,.1);
}
.lessonItem .content .item .label{
	font-family: fontM;
	font-weight: 500;
	margin-bottom: 5px;
}
.lessonItem .content .item .label .intro{
	font-size: 15px;
	margin-bottom: 10px;
}
.lessonItem .content .item .headline{
	display       : block;
	margin-bottom : -10px;
	font-size     : 15px;
	font-family   : fontM;
	font-weight   : 500;
}
.lessonItem .content .item .box{
	display         : flex;
	flex-direction  : row;
	align-items     : flex-start;
	justify-content : flex-start;
	padding         : 20px 0;
	border-bottom   : 1px solid rgba(33,36,54,.1);
}
.lessonItem .content .item .box .inner {
	width: 65vw;
}
.lessonItem .content .item .box .box-imgs{
	width         : 110px;
	height        : 110px;
	border-radius : 8px;
	margin-right  : 10px;
}
.lessonItem .content .item .box:last-child{
	border         : none;
	padding-bottom : 10px;
}
.lessonItem .content .lesson-bottom{
	text-align  : center;
	line-height : 60px;
	font-size   : 12px;
}
.lessonItem .content .lesson-bottom .more-img{
	width  : 11px;
	height : 11px;
}
</style>