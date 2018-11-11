<!--  首页  -->
<template>
	<div class="homepage">
		<div class="headline">
			<span>欢迎你 {{user.nickname}}</span>
			<span>回顾</span>
		</div>
		<div class="card">
			<div class="title">欢迎来到Sportgo!</div>
			<div class="text">
				像任何俱乐部或团队一样，Sportgo在被整个团队使用时效果最好。<br/>
				把你的冰球队的技能提高到一个新的水平，把我们的运动训练内容，包括进步的实践计划，技能录像和动画训练，附在你计划的事件上。
			</div>		
		</div>
		<div class="img-box">
			<nav>
				<div class="item" style="background-image: url('static/imgs/pic-1.jpg')"></div>
				<div class="item" style="background-image: url('static/imgs/pic-4.jpg')"></div>
				<div class="item" style="background-image: url('static/imgs/pic-5.jpg')"></div>
				<div class="item" style="background-image: url('static/imgs/pic-6.jpg')"></div>
				<div class="item" style="background-image: url('static/imgs/pic-8.jpg')"></div>
			</nav>
		</div>
		<div class="lesson" @click="toLesson">
			<div class="title">冰球训练课程</div>
			<div class="title-img">
				<div class="img-style" style="background-image: url('static/imgs/pic-3.jpg')"></div>
			</div>
		</div>
		<div class="activity">
			<div class="box-title">
				<div class="title">下个活动</div>
				<div class="histroy" @click="allActivity">回顾</div>
			</div>
			<!-- 没有活动显示 -->
			<div class="title-img">
				<div class="img-style">
					<img class="icon-style" src="static/icons/add.png" />
					<p>你还没有球队哦，请先添加一个球队</p>
				</div>
			</div>

			<!-- 有活动显示 -->
			<!-- <div class="card">
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
			</div> -->
		</div>
		<div class="team">
			<div class="title">球队</div>
			<div class="title-img">
				<div class="img-style" style="background-image: url('static/imgs/pic-8.jpg')" @click="toTeam"></div>
				<div class="bottom">
					<router-link to="/search"><span>发现球队</span></router-link>
					<span @click="popOut">创建球队</span>
				</div>
			</div>
		</div>
		<div class="shop">
			<div class="title">冰球商店</div>
			<div class="title-img">
				<div class="img-style" style="background-image: url('static/imgs/pic-4.jpg')"></div>
			</div>
		</div>
		<v-popout class="pop-style" v-show="showPop" :click="close">
			<div class="text">创建球队将进入教练登录页面</div>
			<div class="puplic-popbtn">教练登录</div>
		</v-popout>


		<Modal v-model="modal" width="360" @on-visible-change="onChange" :closable="false" class-name="vertical-center-modal">
			<div style="margin:-16px; border-radius:5px; overflow:hidden;">
		        <div style="text-align:center">
		            <v-video ref="homevideo" :width="350"/>
		        </div>
	    	</div>
	        <div slot="footer" style="text-align: center">
	        	<p>先从一段基础视频开始吧</p>
	        </div>
	    </Modal>

	</div>
</template>

<script>
	import Video      from '@/components/video';
	import {mapState, mapActions} from 'vuex';

	export default{
		name : 'homepage',
		data() {
			return {
				modal   : false,
				showPop : false
			}
		},
		components : {
			'v-video'  : Video
		},
		computed : mapState({
			user     : state => state.User.user,
			token    : state => state.User.token,
			is_login : state => state.User.isLogin,
        }),
		methods: {
			...mapActions([
	            'onShowNav',
	        ]),
			toLesson() {
				this.$router.push({path : 'lesson'});
			},
			toTeam() {
				this.$router.push({path : 'team'});
			},
			popOut() {
				this.showPop = !this.showPop
			},
			close() {
				this.showPop = false
			},
			onChange(e) {
				console.log('this.$refs.homevideo.player.pause()', this.$refs.homevideo.player)
				if(!e) {
					this.$refs.homevideo.player.pause()
				}
			},
			allActivity() {
				this.$router.push({path : 'activity'});
			}
		},
		mounted() {
			this.onShowNav(true);
			setTimeout(() => {
				this.modal = true;
			}, 1000);
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
		margin-bottom: $puplic-space;
		.headline{
			display: flex;
			justify-content: space-between;
		}
		.card{
			padding: $puplic-space/2;
			box-shadow: 0 2px 4px rgba(0,0,0,.35);
			border-radius: 8px;
			font-size: 14px;
			margin-top: $puplic-space/2;
			margin-bottom: $puplic-space/2;
		}
		.team{
			padding: 0;
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
	.activity{
		font-size: 14px;
		label{
			font-weight: 500;
			font-size: $title;
		}
		.box-title{
			display: flex;
			justify-content: space-between;
			font-family: fontM;
		    line-height: 40px;
		    font-size: 15px;
		}
		.card{
			margin: 0px 0px $puplic-space/2;;
			p{
				margin-bottom: 10px;
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
		.icon{
			width: 20px;
			vertical-align: middle;
		}
		.img-style{
			text-align: center;
			font-size: 14px;
		}
		.icon-style{
			width: 50px;
			margin: 50px auto 0;
		}
	}
	.img-box{
		width: 100%;
		margin: 20px 0 0;
		overflow: hidden;
		nav{
		    display: flex;
		    height: 124px;
		    align-items: middle;
		    overflow: auto;
		    .item{
		    	width: 150px;
		    	height: 120px;
		    	background-position: center;
		    	background-size: cover;
		    	flex-shrink: 0;
			    margin-right: 10px;
			    border-radius: 10px;
			    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.35);
		    }
		}
	}
</style>