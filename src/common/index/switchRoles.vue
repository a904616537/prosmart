<!--  导航  -->
<template>
	<div class="switchrole">
		<p class="title">请选择你的角色！</p>
		<div v-for="(item, index) in roles" :key="index" class="item">
			<div class="btn" v-text="item.title" @click="showModal(item)"></div>
		</div>
		<Modal
			width="80"
	        v-model="modal"
	        :closable="false">
	        <p v-text="selectRole.text"></p>
	        <div slot="footer" class="roles_footer">
	            <Button type="default" size="large" class="button" @click="onCanel">取消</Button>
	            <Button type="default" size="large" class="button" :loading="loading" @click="onSwitch">确定</Button>
	        </div>
	    </Modal>
	</div>
</template>

<script>
	import Vue                    from 'vue';
	import axios                  from 'axios';
	import {mapState, mapActions} from 'vuex';
	export default{
		name : 'switchroles',
		data() {
			return {
				modal      : false,
				show       : false,
				loading : false,
				selectRole : {},
				roles      : [
					{
						type : 0,
						title : '新手',
						text : '新手课程将帮助冰球领域的新人对冰球有一个初步的理解和基础技能的使用，冰球是一项有趣的运动，是否进入新手，学习基础技能？'
					},{
						type : 1,
						title : '球员',
						text : '球员相对于新手处于冰球技能水平更高的阶段，在球员中，你将可以参加专业冰球队，观看更多冰球训练视频，得到教练的正确指导，是否确认进入球员？'
					},{
						type : 2,
						title : '教练',
						text : '教练分为主教练和助教练。主教练将可以创建自己的球队，创建球队活动，选定地点组织球员进行冰球游戏或者训练。助教练将在进行球队活动时辅助主教练。是否进入教练？'
					}
				]
			}
		},
		computed : mapState({
			user     : state => state.User.user,
			token    : state => state.User.token,
			is_login : state => state.User.isLogin,
        }),
		methods: {
			...mapActions([
	            'onShowNav',
	            'onSetIdentity'
	        ]),
			toPage(path) {
				this.$router.push({path});
			},
			showModal(item) {
				this.selectRole = item;
				this.modal      = true;
			},
			onSwitch() {
				this.loading = true;
				this.getIdentity();

			},
			onCanel() {
				this.modal   = false;
				this.loading = false;
			},
			getIdentity() {
				console.log(Vue.setting.api + '/user')
				axios.put(Vue.setting.api + '/user',{
					user : this.user._id,
					type : this.selectRole.type
				})
				.then(result => result.data)
				.then(result => {
					console.log('切换用户身份', result)
					this.onCanel();
					this.onSetIdentity(result.identity);
					this.$Message.success({
						duration : 1,
						content : `身份切换成功：${this.selectRole.title}`,
						onClose : () => {
							if(result.identity) {
								this.$router.push({path : 'home'});
							} else this.$router.push({path : '/from', query : {type : this.selectRole.type}});
							
						}
					});

				})
				.catch(err => {
					this.onCanel();
					this.$Message.warning('出错了，请退出重试');
				})
			}
		},
		mounted() {
		}
	}
</script>

<style scoped>
.switchrole {
	width      : 50vw;
}
.switchrole .title {
	font-size   : 10pt;
	font-weight : 900;
	color       : #313131;
}
.switchrole .item {
	margin : 1em 0;
}
.switchrole .item .btn {
	margin           : 0 auto;
	width            : 40vw;
	padding          : 1vh 0;
	font-size        : 10pt;
	color            : #fff;
	background-color : #313131;
	border-radius    : 5px;
}
.roles_footer {
	display         : flex;
	justify-content : center;
	align-items     : center;
	flex-direction  : row;
}
</style>