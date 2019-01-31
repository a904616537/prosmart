<template>
	<div class="team">
		<div class="title">我的球队</div>
		<div class="content">

			<div v-for="(item, index) in team" :key="index" class="card">
				<div class="team-name">{{item.info.name||item.uid}}</div>
				<Dropdown v-if="identity._id != item.identity" trigger="click">
			        <a href="javascript:void(0)">
			            <div class="operate"><img src="static/icons/point.png" class="card-icon"/></div>
			        </a>
			        <DropdownMenu slot="list">
			            <DropdownItem><span class="card-btn" @click="exit(item)">退出球队</span></DropdownItem>
			        </DropdownMenu>
			    </Dropdown>
			    <div v-else @click="toManage(item._id)">
			    	<p>球员管理</p>
			    </div>
			</div>

		</div>
		<div v-if="coach" class="footer" @click="toCreate">
			<div class="puplic-btn footer_btn"><Icon :size="18" type="ios-add-circle-outline" />创建球队</div>
		</div>
		
		<v-popout class="pop-style" v-show="showPop" :click="close">
			<div class="text">确认退出球队？</div>
			<div class="btn">
				<div class="puplic-popbtn" @click="close">取消</div>
				<div class="puplic-popbtn" @click="onExit">确认</div>
			</div>
		</v-popout>
	</div>
</template>

<script>
	import Vue                    from 'vue';
	import axios                  from 'axios';
	import {mapState, mapActions} from 'vuex';
	export default{
		name : 'team',
		data() {
			return {
				showPop : false,
				team    : [],
				exitTeam : null
			}
		},
		computed : mapState({
			user     : state => state.User.user,
			token    : state => state.User.token,
			is_login : state => state.User.isLogin,
			identity : state => state.User.identity,
			coach      : state => state.User.coach,
        }),
		methods: {
			...mapActions([
	            'onShowNav',
	        ]),
			getMyTeam() {
				axios.get(Vue.setting.api + '/team/player', {
					params: {identity_id : this.identity._id}
				})
				.then(result => result.data)
				.then(result => this.team = result)
	            .catch(err => {
	                console.log('error', err)
	            })
			},
			exit(item) {
				this.showPop = !this.showPop
				this.exitTeam = item;
			},
			close() {
				this.showPop = false
			},
			toCreate() {
				this.$router.push({path : 'create'});
			},
			toManage(_id) {
				this.$router.push({path : 'manage', query : {_id}});
			},
			onExit() {
				axios.delete(Vue.setting.api + '/team/player', {
					params: {
						_id    : this.exitTeam._id,
						player : this.identity._id
					}
				})
				.then(result => result.data)
				.then(result => this.getMyTeam())
	            .catch(err => {
	                console.log('error', err)
	            })
			}
		},
		mounted() {
			this.onShowNav(true);
			this.getMyTeam();
		}
	}
</script>

<style lang="scss">
	.team{
		text-align: left;
		padding: 0 10px;
		font-family: fontM;
		.title{
			font-size: 15px;
			line-height: 35px;
		}
		.content{
			.card{
				line-height: 40px;
				font-size: 14px;
				box-shadow: 0 2px 4px rgba(0,0,0,.35);
				border-radius: 8px;
				display: flex;
				flex: 1;
				justify-content: space-between;
				padding: 0 10px;
				margin-bottom: 20px;
				.card-icon{
					width: 4px;
					height: 18px;
					vertical-align: middle;
				}
				.card-btn{
					height           : 28px;
					line-height      : 28px;
					color            : #fff;
					background-color : #AAAAAA;
					margin-top       : 7px;
					padding          : 0 14px;
				}
			}
		}
		.pop-style{
			.text{
				margin-bottom: 40px;
			}
			.btn{
				display: flex;
				justify-content: space-around;
			}
		}
		.footer {
			position: fixed;
			bottom: 20px;
			text-align: center;
			width: 100%;
		}
		.footer_btn{
			width: 200px;
			text-align:center;
			margin: 0 auto;
		}
	}
</style>