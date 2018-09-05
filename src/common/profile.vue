<template>
	<div class="profile">
		<img src="static/imgs/user-3.jpeg" class="img-style" />
		<div class="user-name">晴天</div>
		<div class="item">
			<img src="static/icons/user/email.png" class="icon" />
			<span>123456789@www.com</span>
		</div>
		<div class="item">
			<img src="static/icons/user/phone.png" class="icon" />
			<span>187 0027 2737</span>
		</div>
		<div class="item">
			<img src="static/icons/user/user-sex.png" class="icon" />
			<span>女</span>
		</div>
		<div class="item">
			<img src="static/icons/user/user-calendar.png" class="icon" />
			<span>1995-10-27</span>
		</div>
		<div class="item">
			<img src="static/icons/user/user-icon.png" class="icon" />
			<span>账号管理者: 父母</span>
		</div>
		<div class="profile-btn" @click="editor">编辑</div>
	</div>
</template>

<script>
	export default{
		name : 'profile',
		data() {
			return {

			}
		},
		methods: {
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
			padding: 0 25px;
			font-weight: 500;
			float: right;
			margin-top: 100px;
		}
	}
</style>