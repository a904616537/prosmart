<template>
	<div class="from">
			<ul>
				<li><label>1.</label><input class="input" v-model="data.name" placeholder="请填写你的名字" /></li>
				<li>
					<label>2.</label>
					<span>请选择你的性别</span>
					<Select v-model="data.sex" class="right" size="small">
						<Option value="男">男</Option>
						<Option value="女">女</Option>
					</Select>
				</li>
				<li><label>3.</label><span>请填写你的身高</span><input class="right" v-model="data.height"/></li>
				<li><label>4.</label><span>请填写你的体重</span><input class="right" v-model="data.weight"/></li>
				<li><label>5.</label><span>请填写你的年龄</span><input class="right" v-model="data.age"/></li>
				<li>
					<label>6.</label>
					<span>请填写你的出生日期</span>
					<input v-model="data.born.year" class="time"/>
					<input v-model="data.born.month" class="time"/>
					<input v-model="data.born.day" class="time"/>
				</li>
				<li><label>7.</label><span>你所在的城市</span><input class="right" v-model="data.city"/></li>
				<li><label>8.</label><span>那只手持杆</span><input class="right" v-model="data.hand"/></li>
				<li><label>9.</label><span>赛场位置</span><input class="right" v-model="data.location"/></li>
				<li><label>19.</label><span>你的冰龄约是</span><input class="right" v-model="data.gameage"/></li>
				<li><label>11.</label><span>你的冰球比赛经历</span><input class="right" v-model="data.experience"/></li>
				<li>
					<span><label>12.</label>为自己喜爱的球队而战！请点选一个你喜欢的球队！</span>
					<div class="rounds">
						<div v-for="(item, index) in teams" :key="index" class="round" :class="{active : item == data.like}" @click="onLike(item)">
							{{item}}
						</div>
					</div>
				</li>
				<li>
					<span><label>13.</label>有竞争就有对手，选出你不喜欢的球队吧！</span>
					<div class="rounds">
						<div v-for="(item, index) in teams" :key="index" class="round" :class="{active : item == data.hate}" @click="onHate(item)">
							{{item}}
						</div>
					</div>
					
				</li>
			</ul>
			<div class="footer">
				<Button class="btn" size="large" v-text="'立即进入'" :disabled="loading" @click="onSubmit"></Button>
			</div>
			
	</div>
</template>

<script>
	import Vue    from 'vue';
	import axios  from 'axios';
	import moment from 'moment';
	import {mapState, mapActions} from 'vuex';
	export default{
		name : 'from',
		data() {
			return {
				type    : this.$route.query.type,
				loading : false,
				teams   : [
					'team 1',
					'team 2',
					'team 3',
					'team 4',
					'team 5',
					'team 6',
					'team 7',
					'team 8',
					'team 9',
					'team 10',
				],
				data : {
					name       : '',	// 名字
					sex        : '男',	// 性别
					height     : '',	// 身高
					weight     : '',	// 体重
					age        : 0,		// 年龄
					born       : {
						year  : 1995,
						month : 10,
						day   : 27
					},	// 出生
					city       : '',	// 城市
					hand       : '',	// 手
					location   : '', 	// 冰球位置
					gameage    : '',	// 冰球年龄
					experience :'',		// 经历
					like       : '',	// 喜欢球队
					hate       : ''		// 不喜欢的球队
				}
			}
		},
		components: {
		},
		computed : mapState({
			user     : state => state.User.user,
			token    : state => state.User.token,
			is_login : state => state.User.isLogin,
			identity : state => state.User.identity
        }),
		methods: {
			...mapActions([
	            'onSetIdentity'
	        ]),
			onLike(text) {
				this.data.like = text;
			},
			onHate(text) {
				this.data.hate = text;
			},
			onPut() {
				console.log(Vue.setting.api + '/identity')
				axios.post(Vue.setting.api + '/identity',{
					user : this.user._id,
					type : this.type,
					info : this.data
				})
				.then(result => result.data)
				.then(result => {
					this.onSetIdentity(result);
					setTimeout(() => {
						this.onClose();
						this.$Message.success({
							duration : 1,
							content : '提交成功',
							onClose : () => {
								console.log('store', this.identity)
								
							}
						});
					}, 1000);

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
				this.loading = true;
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
		}
	}
</script>

<style scoped>
.from {
	width      : 90vw;
	text-align : left;
}
.from ul li{
	display         : flex;
	justify-content : flex-start;
	align-items     : center;
	flex-direction  : row;
	flex-wrap       : wrap;
	margin          : 10px 0;
}
.from ul li input {
	border-bottom : 1px solid #ccc;
	border-top    : none;
	border-left   : none;
	border-right  : none;
	border-radius : 0;
}
.from ul li label {
	width       : 5vw;
	color       : #313131;
	font-size   : 10pt;
	font-weight : 500;
}
.from ul li span {
	color        : #ccc;
	font-size    : 10pt;
	margin-right : 2em;
}

.from ul li .right {
	width : 20vw;
}
.from ul li .time {
	width: 10vw;
	margin-right: 1vw;
	height: 12pt;
	border-bottom : 1px solid #ccc;
}
.from ul li .rounds {
	margin          : 1em 0;
	display         : flex;
	flex-wrap       : wrap;
	align-items     : center;
	justify-content : center;
	flex-direction  : row;
}
.from ul li .round {
	display          : flex;
	width            : 15vw;
	height           : 15vw;
	margin           : 1vw;
	border           : #ccc solid 1px;
	border-radius    : 50%;
	background-color : #eee;
	justify-content  : center;
	align-items      : center;
}
.from ul li .round.active {
	border-color: #313131;
}
.footer{
	padding    : 2em 0;
	text-align : center;
}
.footer .btn {
	color  : #fff;
	width  : 30vw;
	height : 5vh;
	background-color : #313131;
}



</style>