<template>
	<div class="manage">
		
		<div class="content">
			<div class="title">球员管理</div>
			<div class="card">
				<div class="row">
					<div class="columns" style="flex : 1">头像</div>
					<div class="columns" style="width: 150px;">名称</div>
					<div class="columns">操作</div>
				</div>
				<div v-for="(item, index) in team.players" :key="index" class="row">
					<div class="columns"  style="flex : 1">
						<Avatar :src="item.user.headimgurl" />
					</div>
					<div class="columns" style="width: 150px;">{{item.info.name}}</div>
					<div class="columns" @click="exit(item)">移除</div>
				</div>
			</div>
		</div>

		<div class="content">
			<div class="title">申请名单</div>
			<div class="card">
				<div class="row">
					<div class="columns" style="flex : 1">头像</div>
					<div class="columns" style="width: 150px;">名称</div>
					<div class="columns" style="width: 50px;"></div>
					<div class="columns">操作</div>
				</div>
				<div v-for="(item, index) in team.apply" :key="index" class="row">
					<div class="columns"  style="flex : 1">
						<Avatar :src="item.player.user.headimgurl" />
					</div>
					<div class="columns" style="width: 150px;">{{item.player.info.name}}</div>
					<div class="columns" style="width: 50px;color:#19be6b;" @click="agree(item)">同意</div>
					<div class="columns" style="color:#ff9900;" @click="noAgree(item)">拒绝</div>
				</div>
			</div>
		</div>
		
		<v-popout class="pop-style" v-show="showPop" :click="close">
			<div class="text">确认要删除球员 {{exitTeam.info.name}}？</div>
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
				showPop  : false,
				team     : {},
				exitTeam : {
					info : ''
				}
			}
		},
		computed : mapState({
			user     : state => state.User.user,
        }),
		methods: {
			...mapActions([
	            'onShowNav',
	        ]),
			getMyTeam() {
				const _id = this.$route.query._id;
				axios.get(Vue.setting.api + '/team/id', {
					params: {_id}
				})
				.then(result => result.data)
				.then(result => {
					this.team = result
				})
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
			agree(item) {
				this.request({_id : this.team._id, player : item.player._id, agree : true})
			},
			noAgree(item) {
				this.request({_id : this.team._id, player : item.player._id, agree : false})
			},
			request(data) {
				this.$Spin.show({
                    render: (h) => {
                        return h('div', [
                            h('Icon', {
                                'class': 'spin-icon-load',
                                props: {
                                    type: 'ios-loading',
                                    size: 24
                                }
                            }),
                            h('div', ' 处理中...')
                        ])
                    }
                });
				axios.put(Vue.setting.api + '/team/player', data)
				.then(result => result.data)
				.then(result => {
					setTimeout(() => {
						this.$Spin.hide();
						this.$Message.success({
							closable : true,
							duration: 2,
							content : '操作成功！',
							onClose : () => {
								this.getMyTeam()
							}
						});
					}, 1000);
				})
	            .catch(err => {
	                console.log('error', err)
	            })
			},
			onExit() {
				axios.delete(Vue.setting.api + '/team/player', {
					params: {
						_id    : this.team._id,
						player : this.exitTeam._id
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
			if(this.$route.query._id) {
				this.getMyTeam();
			} else this.$router.back(-1)
			
		}
	}
</script>

<style lang="scss">
	.row {
		display: flex;
		flex-direction: row;
		flex: 1;
		padding: 10px;
		border-bottom: solid 1px #eee;
		.columns {
			text-align : left;
		}
	}
	.manage{
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