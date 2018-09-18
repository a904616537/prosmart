<template>
	<div class="profile">
		<img :src="user.headimgurl" class="img-style" />
		<div class="user-name">{{user.nickname}}</div>
		<div class="item">
			<img src="static/icons/user/email.png" class="icon" />
			<span>{{user.email}}</span>
		</div>
		<div class="item">
			<img src="static/icons/user/phone.png" class="icon" />
			<span>{{user.phone}}</span>
		</div>
		<div class="item">
			<img src="static/icons/user/user-sex.png" class="icon" />
			<span>{{sex}}</span>
		</div>
		<div class="item">
			<img src="static/icons/user/user-calendar.png" class="icon" />
			<span>{{user.born}}</span>
		</div>
		<div class="item">
			<img src="static/icons/user/user-icon.png" class="icon" />
			<span>账号管理者: {{user.manage}}</span>
		</div>
		<div class="profile-btn" @click="editor">编辑</div>
	</div>
</template>

<script>
	import Vue                    from 'vue';
	import axios                  from 'axios';
	import {mapState, mapActions} from 'vuex';
	export default{
		name : 'profile',
		data() {
			return {

			}
		},
		computed : mapState({
			user     : state => state.User.user,
			token    : state => state.User.token,
			is_login : state => state.User.isLogin,
			identity : state => state.User.identity,
			sex() {
				return this.user.sex == 1?"男" : "女";
			}
        }),
		methods: {
			...mapActions([
	            'onShowNav',
	        ]),
			editor() {
				this.$router.push({ path : '/editor' })
			}
		}
	}
</script>

<style lang="scss">
	.profile{
		text-align: left;
		padding: 0 10px;
		font-size: 14px;
		.img-style{
			width: 150px;
			height: 150px;
		}
		.user-name{
			font-family: fontM;
			font-weight: 500;
			font-size: 15px;
			line-height: 50px;
		}
		.icon{
			width: 17px;
			height: 17px;
		}
		.item{
			display: flex;
			flex: 1;
			flex: auto;
			margin-bottom: 10px;
			span{
				margin-left: 15px;
			}
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
			margin-top: 100px;
		}
	}
</style>