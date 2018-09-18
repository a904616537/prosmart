<template>
	<div class="profileEditor">
		<img :src="user.headimgurl" class="img-style" />
		<div class="item">
			<label>用户名: </label>
			<input type="text" v-model="data.nickname" placeholder="请输入你的名字" class="profile-input" />
		</div>
		<div class="item">
			<label>邮 箱: </label>
			<input type="text" v-model="data.email" placeholder="请输入你的邮箱" class="profile-input" />
		</div>
		<div class="item">
			<label>手机号: </label>
			<input type="text" v-model="data.phone" placeholder="请输入你的手机号码" class="profile-input" />
		</div>
		<div class="item">
			<label>性 别: </label>
			<RadioGroup v-model="data.sex" type="button" class="profile-input" size="small" @on-change="onSex">
				<Radio label="男"></Radio>
				<Radio label="女"></Radio>
			</RadioGroup>
		</div>
		<div class="item">
			<label>生 日: </label>
			<input type="text" v-model="data.born" placeholder="1995-10-27" class="profile-input" />
		</div>
		<div class="item">
			<label>管 理: </label>
			<input type="text" v-model="data.manage" placeholder="父母" class="profile-input" />
		</div>
		<div class="profile-btn" @click="save">保存</div>
	</div>
</template>

<script>
	import Vue                    from 'vue';
	import axios                  from 'axios';
	import {mapState, mapActions} from 'vuex';

	export default{
		name : 'profileEditor',
		data() {
			return {
				data : {},
			}
		},
		computed : mapState({
			user     : state => state.User.user,
			token    : state => state.User.token,
			is_login : state => state.User.isLogin,
			identity : state => state.User.identity,
        }),
		methods: {
			...mapActions([
	            'onShowNav',
	            'onLogin'
	        ]),
			save() {
				
				axios.put(Vue.setting.api + '/user/info', this.data)
				.then(result => result.data)
				.then(result => {
	                console.log('保存修改!', result);
	                this.onLogin({user : result});
	            })
	            .catch(err => {
	                console.log('error', err)
	            })
			},
			onSex(sex) {
				if(sex == "男") this.data.sex = 1;
				else this.data.sex = 2;
			}
		},
		mounted() {
			this.data = {...this.user}
		}
	}
</script>

<style lang="scss">
	$puplic-space: 20px;
	.profileEditor{
		text-align: left;
		padding: 0 10px;
		font-size: 14px;
		.item{
			border-bottom: 1px solid rgba(33,36,54,.1);
			margin-bottom: $puplic-space/2;
			color: #AFAFAF;
		}
		.img-style{
			width: 150px;
			height: 150px;
			margin-bottom: $puplic-space/2;
		}
		.profile-input{
			font-family: fontM;
			font-weight: 500;
			line-height: 32px;
			color: #313131;
			outline: none;
			border: none;
			padding: 0 $puplic-space;
		}
		.profile-btn{
			color: #fff;
			background-color: #212436;
			display: inline-block;
			font-size: 15px;
			line-height: 36px;
			font-family: fontM;
			font-weight: 500;
			padding: 0 25px;
			float: right;
			margin-top: $puplic-space;
		}
	}
</style>
