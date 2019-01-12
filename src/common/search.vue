<template>
	<div class="search">
		<div class="search-bar">
			<input type="text" v-model="query" class="input-style" placeholder="请输入球队名称或球队代码"/>
			<div class="icon" @click="onSearch">
				<img src="static/icons/search.png" class="icon-style" />
			</div>
		</div>
		<div class="search-list" v-show="showList">
			<li v-for="(item, index) in result" :key="index" @click="onShowTeam(item)">{{item.info.name || item.uid}}</li>
		</div>
		<div v-for="(val, index) in team" :key="index" class="result">
			<div class="head" @click="toGroup(val._id)">
				<img :src="val.info.header_logo || 'static/imgs/ball-head.jpg'" class="head-img">
				<div class="title">{{val.info.name || val.uid}}</div>
			</div>
			<div class="title">球队基础信息</div>
			<div class="card" @click="toGroup(val._id)">
				教练:<span>{{val.info.coach_name||'未知'}}</span><br/>
				人数:<span>{{val.players.length}}人</span><br/>
				组别:<span>{{val.info.group||'未知'}}</span><br/>
				地址:<span>{{val.info.address||'未知'}}</span>
			</div>
			<div class="puplic-btn" @click="join(val)">申请加入球队</div>
			<!-- <div class="puplic-btn" @click="join(val)">申请成为助理教练</div> -->
		</div>
		<!-- <input type="text" class="input-style" placeholder="请输入球队代码" /> -->
		
		<v-popout class="pop-style" v-show="is_show" :click="close">
			<div class="text">申请成功，等待审核!</div>
			<div class="puplic-popbtn">确定</div>
		</v-popout>
	</div>
</template>

<script>
	import Vue                    from 'vue';
	import axios                  from 'axios';
	import {mapState, mapActions} from 'vuex';

	export default{
		name : 'search',
		data() {
			return {
				query    : '',
				showList : false,
				is_show  : false,
				result   : [],
				team     : []
			}
		},
		computed : mapState({
			user     : state => state.User.user,
			token    : state => state.User.token,
			is_login : state => state.User.isLogin,
			identity : state => state.User.identity
        }),
		methods: {
			...mapActions([
	            'onShowNav',
	        ]),
	        toGroup(_id) {
	        	this.$router.push({ path : '/group', query : {_id}})
	        },
			onSearch() {
				axios.get(Vue.setting.api + '/team/search', {
					params: {
						query : this.query
					}
				})
				.then(result => result.data)
				.then(result => {
					console.log('onSearch', result)
	                this.result = result;
	                this.showList = true;
	            })
	            .catch(err => {
	                console.log('error', err)
	            })
			},
			onShowTeam(item) {
				this.team = [item];
				this.showList = false;
			},
			focus() {
				this.showList = !this.showList
			},
			// 加入球队
			join(team) {
				axios.post(Vue.setting.api + '/team/player', {_id : team._id, player : this.identity._id})
	            .then(result => result.data)
	            .then(result => {
	            	if(result.status) {
						this.is_show = !this.is_show
	            	} else this.$Message.warning(result.msg);
	            })
	            .catch(err => {
	                console.log('error', err)
	            })
			},
			close() {
				this.is_show = false
			},
			getAllTeam() {
				axios.get(Vue.setting.api + '/team')
				.then(result => result.data)
				.then(result => {
	                console.log('搜索结果', result);
	                this.team = result;
	            })
	            .catch(err => {
	                console.log('error', err)
	            })
			}
		},
		mounted() {
			this.onShowNav(true);
			this.getAllTeam();
		}
	}
</script>

<style lang="scss">
	$puplic-space: 20px;
	.search{
		padding: 0 10px;
		font-size: 14px;
		padding-bottom : 10vh;
		.puplic-btn{
			margin-top: $puplic-space;
			text-align: center;
		}
	}
	.search-bar{
		position: relative;
		.icon-style{
			width: $puplic-space;
			height: $puplic-space;
			position: absolute;
			right: $puplic-space;
			top: $puplic-space/2;
		}
	}
	.input-style{
		width: 100%;
		line-height: $puplic-space*2;
		padding: 0 $puplic-space;
		border: 1px solid rgba(33,36,54,.1);
		border-radius: $puplic-space*2;
		outline: none;
		color: #313131;
	}
	.search-list{
		text-align: left;
		color: #aaa;
		li{
			list-style: none;
			border-bottom: 1px solid rgba(33,36,54,.1);
			line-height: 30px;
			margin-top: $puplic-space/2;
		}
	}
	.result{
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
		}
	}
	.pop-style{
		.text{
			margin-bottom: $puplic-space;
		}
	}
</style>