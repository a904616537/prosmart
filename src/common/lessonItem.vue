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
			<div v-for="(item, index) in items" :key="index" class="item">
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
				data   : this.$route.query || {},
				select : 1,
				items  : [
					{
						label : '预视频',
						list : [
							{
								title : '冰球一对一',
								desc  : '初级阶段的演习是新手刚开始接触冰球时必不可少的一个阶段！',
								img   : 'static/imgs/pic-6.jpg'
							},
							{
								title : '什么是长期运动发展',
								desc : '初级阶段的演习是新手刚开始接触冰球时必不可少的一个阶段！',
								img   : 'static/imgs/pic-7.jpg'
							},{
								title : '冰球运动',
								desc : '初级阶段的演习是新手刚开始接触冰球时必不可少的一个阶段！',
								img   : 'static/imgs/pic-8.jpg'
							},
						]
					},{
						label : '练习视频',
						list : [
							{
								title : '滑冰',
								desc  : '初级阶段的演习是新手刚开始接触冰球时必不可少的一个阶段！',
								img   : 'static/imgs/pic-1.jpg'
							},
							{
								title : '冰球控制',
								desc : '初级阶段的演习是新手刚开始接触冰球时必不可少的一个阶段！',
								img   : 'static/imgs/pic-2.jpg'
							},{
								title : '传球',
								desc : '初级阶段的演习是新手刚开始接触冰球时必不可少的一个阶段！',
								img   : 'static/imgs/pic-3.jpg'
							},
						]
					}
				]
			}
		},
		computed : mapState({
			user     : state => state.User.user,
			token    : state => state.User.token,
			is_login : state => state.User.isLogin,
			level    : state => state.Setting.level,
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