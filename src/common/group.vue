<template>
	<div class="group">
		<div class="head">
			<img :src="data.info.header_logo || 'static/imgs/ball-head.jpg'" class="head-img">
			<div class="title">{{data.info.name || data.uid}}</div>
		</div>
		<div class="title">球队具体信息</div>
		<div class="card">
			教练:<span>{{data.info.coach_name||'未知'}}</span><br/>
			人数:<span>{{data.players.length}}人</span><br/>
			分布:<span><img src="static/icons/boy.png" class="boy-icon" /> {{boy}}人, <img src="static/icons/girl.png" class="girl-icon" /> {{girl}}人</span><br/>
			组别:<span>{{data.info.group||'未知'}}</span><br/>
			地址:<span>{{data.info.address||'未知'}}</span><br/>
			时间:<span>{{time}}</span>
		</div>
		<div class="title">球员列表</div>
		<div class="card card-box">
			<div class="item-list">
				<div  v-for="(item, index) in data.players" :key="index" class="item">
					<img :src="item.user.headimgurl || 'static/imgs/user-1.jpeg'" class="user-img" />
					{{item.info.name}}
				</div>
			</div>
			<p v-if="!showMore && data.players.length > 5" class="more" @click="showMore = true">查看更多<img src="static/icons/more.png" class="more-icon"/></p>
		</div>
	</div>
</template>

<script>
	import Vue                    from 'vue';
	import moment                 from 'moment';
	import axios                  from 'axios';
	import {mapState, mapActions} from 'vuex';
	export default{
		name : 'group',
		data() {
			return {
				data : {
					info    : {},
					players : []
				},
				showMore : false
			}
		},
		computed : mapState({
			user     : state => state.User.user,
			time() {
				return moment(this.data.CreateTime).format('成立于YYYY年M月D日');
			},
			boy() {
				return this.data.players.filter(val => val.type == 1).length;
			},
			girl() {
				return this.data.players.filter(val => val.type == 2).length;
			},
			showPlayes() {
				if(this.showMore) return this.data.players;
				else this.data.players.slice(0, 5);
			}
        }),
		methods: {
			...mapActions([
	            'onShowNav',
	        ]),
	        getData(_id) {
	        	axios.get(Vue.setting.api + '/team/id', {
					params: {_id}
				})
				.then(result => result.data)
				.then(result => {
					console.log('球队信息', result)
	                this.data = result;
	            })
	            .catch(err => {
	                console.log('error', err)
	            })
	        }
		},
		mounted() {
			this.onShowNav(true);

			if(this.$route.query && this.$route.query._id) {
				this.getData(this.$route.query._id)
			} else this.$router.back(-1)
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