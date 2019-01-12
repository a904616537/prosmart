<template>
	<div class="from">
		<div class="header">
			<Upload :action="uploadUrl" :on-success="onSuccess" :show-upload-list="false">
				<img :src="data.header_logo||'static/imgs/ball-head.jpg'" class="header_logo" />
			</Upload>
		</div>
		<div>
			<h2>球队信息</h2>
		</div>
		<ul class="form">
			<li><v-dropdown-input v-model="data.name" :change="(val) => data.name = val" placeholder="球队名称" /></li>
			<li><v-dropdown-input placeholder="教练姓名" v-model="data.coach_name" :change="(val) => data.coach_name = val"/></li>
			<li><v-dropdown-input placeholder="选择组别" v-model="data.group" :list-data="group" :change="(val) => data.group = val"/></li>
			<li><v-dropdown-input placeholder="选择城市" v-model="data.city" :list-data="city" :change="(val) => data.city = val"/></li>
			<li><v-dropdown-input :input_class="'width: 300px;'" placeholder="填写一个球队活动地址" v-model="data.address" :change="(val) => data.address = val"/></li>
		</ul>
		<div class="footer">
			<Button type="default" size="large" class="button" @click="onSubmit">创建球队</Button>
		</div>
			
	</div>
</template>

<script>
	import Vue    from 'vue';
	import axios  from 'axios';
	import moment from 'moment';
	import {mapState, mapActions} from 'vuex';
	import VInput      from '@/components/dropdownInput';
	export default{
		name : 'create_team',
		data() {
			return {
				uploadUrl : Vue.setting.uploadUrl,
				data : {
					header_logo : null,
					name        : '',	// 名字
					coach_name  : '',	// 教练名称
					group       : '',	// 组
					city        : '',	// 所在市
					address     : '',	// 活动地址
				},
				group : ['青年组', '少年组'],
				city  : ['上海市','北京市','深圳市'],
			}
		},
		components: {
			'v-dropdown-input' : VInput
		},
		computed : mapState({
			user     : state => state.User.user,
			token    : state => state.User.token,
			identity : state => state.User.identity,
			disabled() {
				return this.data.name != '' && this.data.coach_name != '' && this.data.city != '' && this.data.address != '';
			}
        }),
		methods: {
			...mapActions([
	        ]),
	        onSuccess(response, file, fileList) {
	        	this.data.header_logo = response.msg
	        },
			onPut() {
				axios.post(Vue.setting.api + '/team',{
					identity    : this.identity._id,
					info : this.data
				})
				.then(result => result.data)
				.then(result => {
					if(result.status) {
						setTimeout(() => {
							this.onClose();
							this.$Message.success({
								closable : true,
								duration: 30,
								content : `球队创建成功，你的球队代码为${result.data.uid},邀请好友加入你的球队吧！`,
								onClose : () => {
									this.$router.go(-1);
								}
							});
						}, 1000);
					} else {
						setTimeout(() => {
							this.onClose();
							this.$Message.success({
								duration : 2,
								content : result.msg,
								onClose : () => {
									this.$router.go(-1);
								}
							});
						}, 1000);
					}
					

				})
				.catch(err => {
					setTimeout(() => {
						this.onClose();
						this.$Message.warning({
							duration : 1,
							content  : '出错了，请退出重试'
						});
					}, 1000);
				})
			},
			onClose() {
				this.$Spin.hide();
				this.loading = false;
			},
			onSubmit() {
				if(!this.data.header_logo) {
					this.$Message.warning({
						duration : 2,
						content  : '点击图片更换球队头像！'
					});
					return;
				}
				if(!this.disabled) {
					this.$Message.warning({
						duration : 1,
						content  : '请将资料填写完整'
					});
					return;
				}
				
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
                            h('div', '提交中...')
                        ])
                    }
                });
                this.onPut();   
			}
		},
		created() {
			console.log('identity', this.identity)
			this.data.coach_name = this.identity && this.identity.info?this.identity.info.name : '';
		}
	}
</script>

<style scoped>
.header {
	text-align: center;
}
.header_logo {
	margin: 0 auto;
	width: 30vw;
	height:30vw;
	border-radius: 50%;
}
.from {
	width      : 90vw;
	text-align : left;
	margin: 0 auto;
}
.form {

}
.from ul li{
	display         : flex;
	justify-content : flex-start;
	align-items     : center;
	flex-direction  : row;
	flex-wrap       : wrap;
	margin          : 20px 0;
}
.footer{
	padding    : 2em 0;
	text-align : center;
	display: flex;
	justify-content: center;
	align-items: center;
}
.footer .btn {
	width           : 50px;
	height          : 50px;
	border-radius   : 50%;
	box-shadow      : 1px 1px 10px #888888;
	display         : flex;
	align-items     : center;
	justify-content : center;
}
.footer .btn img {
	width: 70%;
}



</style>