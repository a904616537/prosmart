<template>
	<div class="from">
			<ul>
				<li><label>1.</label><input class="input" v-model="data.name" placeholder="请填写你的名字" /></li>
				<li>
					<label>2.</label>
					<span>请选择你的性别</span>
					<v-dropdown-input v-model="data.sex" :list-data="sex" :change="(val) => data.sex = val"/>
				</li>
				<li><label>3.</label><span>请填写你的身高</span><v-dropdown-input v-model="data.height" :list-data="height" :change="(val) => data.height = val"/></li>
				<li><label>4.</label><span>请填写你的体重</span><v-dropdown-input v-model="data.weight" :list-data="weight" :change="(val) => data.weight = val"/></li>
				<li><label>5.</label><span>请填写你的年龄</span><v-dropdown-input v-model="data.age" :change="(val) => data.age = val"/></li>
				<li>
					<label>6.</label>
					<span>请填写你的出生日期</span>
					<v-dropdown-input v-model="data.born.year" class="time" :change="(val) => data.born.year = val"/>
					<v-dropdown-input v-model="data.born.month" class="time" :change="(val) => data.born.month = val"/>
					<v-dropdown-input v-model="data.born.day" class="time" :change="(val) => data.born.day = val"/>
				</li>
				<li><label>7.</label><span>你所在的城市</span><v-dropdown-input v-model="data.city" :change="(val) => data.city = val"/></li>
				<li><label>8.</label><span>那只手持杆</span><v-dropdown-input v-model="data.hand" :list-data="hand" :change="(val) => data.hand = val"/></li>
				<li><label>9.</label><span>赛场位置</span><v-dropdown-input v-model="data.location" :list-data="location" :change="(val) => data.location = val"/></li>
				<li><label>19.</label><span>你的冰龄约是</span><v-dropdown-input v-model="data.gameage" :list-data="gameage" :change="(val) => data.gameage = val"/></li>
				<li><label>11.</label><span>你的冰球比赛经历</span><v-dropdown-input v-model="data.experience" :list-data="experience" :change="(val) => data.experience = val"/></li>
				<li>
					<span><label>12.</label>为自己喜爱的球队而战！请点选一个你喜欢的球队！</span>
					<div class="rounds">
						<div v-for="(item, index) in teams" :key="index" class="round" :class="{active : item == data.like}" @click="onLike(item)">
							<img class="round" v-bind:src="'static/imgs/' + item">
						</div>
					</div>
				</li>
				<li>
					<span><label>13.</label>有竞争就有对手，选出你不喜欢的球队吧！</span>
					<div class="rounds">
						<div v-for="(item, index) in teams" :key="index" class="round" :class="{active : item == data.hate}" @click="onHate(item)">
							<img class="round" v-bind:src="'static/imgs/' + item">
						</div>
					</div>
				</li>
			</ul>
			<div class="footer">
				<!-- <Button class="btn" size="large" v-text="'立即进入'" :disabled="loading" @click="onSubmit"></Button> -->
				<div class="btn" >
					<img :src="disabled?'static/icons/enter.png':'static/icons/no-enter.png'" @click="onSubmit">
				</div>

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
		name : 'from',
		data() {
			return {
				type    : this.$route.query.type,
				loading : false,
				teams   : [
					'NHL_Canucks_Primary.jpg',
					'NHL_Canadiens_Primary.jpg',
					'NHL_MapleLeafs_Primary.jpg',
					'NHL_Flames_Primary.jpg',
					'NHL_Capitals_Primary.jpg',
					'NHL_Penguins_Primary.jpg',
					'NHL_Rangers_Primary.jpg',
					'NHL_Jets_Primary.jpg',
					'NHL_Kings_Primary.jpg',
					'NHL_Oilers_Primary.jpg',
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
				},
				sex : ['男','女'],
				height : ['100-120cm','120-140cm','140-160cm','160-180cm','180-200cm'],
				weight : ['20-30kg','30-40kg','50-60kg','70-80kg','90-100kg'],
				hand : ['左手', '右手'],
				location : ['左锋','中锋','右锋','左后卫','右后卫','守门员'],
				location : ['左锋','中锋','右锋','左后卫','右后卫','守门员'],
				gameage : ['0-2年','2-4年', '4-6年','6-8年','8-10年'],
				experience : ['BHL | 北京青少年联赛',
				'CCHL | 中国城市冰球联赛',
				'AYHL | 亚洲青少年冰球联赛',
				'CCM | CCM杯国际邀请赛',
				'全国冰球锦标赛'
				]

			}
		},
		components: {
			'v-dropdown-input' : VInput
		},
		computed : mapState({
			user     : state => state.User.user,
			token    : state => state.User.token,
			is_login : state => state.User.isLogin,
			identity : state => state.User.identity,
			disabled() {
				return this.data.name != '' && this.data.sex != '' && this.data.height != '' && this.data.weight != '' && this.data.age != '' && this.data.city != '' && this.data.hand != '' && this.data.location != '' && this.data.gameage != '' && this.data.experience != '' && this.data.like != '' && this.data.hate != '';
			}
        }),
		methods: {
			...mapActions([
	            'onSetIdentity'
	        ]),
	        onSet(val, data) {
	        	console.log(val)
	        	data = val;
	        },
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
								this.$router.push({path : 'searchindex'});
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
