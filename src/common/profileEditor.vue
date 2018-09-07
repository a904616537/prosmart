<template>
	<div class="profileEditor">
		<img src="static/imgs/user-3.jpeg" class="img-style" />
		<div class="item">
			<label>用户名: </label>
			<input type="text" placeholder="晴天" class="profile-input" />
		</div>
		<div class="item">
			<label>邮箱: </label>
			<input type="text" placeholder="123456789@www.com" class="profile-input" />
		</div>
		<div class="item">
			<label>手机号: </label>
			<input type="text" placeholder="187 0027 2737" class="profile-input" />
		</div>
		<div class="item">
			<label>性别: </label>
			<input type="text" placeholder="女" class="profile-input" />
		</div>
		<div class="item">
			<label>生日: </label>
			<input type="text" placeholder="1995-10-27" class="profile-input" />
		</div>
		<div class="item">
			<label>管理: </label>
			<input type="text" placeholder="父母" class="profile-input" />
		</div>
		<div class="profile-btn" @click="save">保存</div>
	</div>
</template>

<script>
	export default{
		name : 'profileEditor',
		data() {
			return {

			}
		},
		methods: {
			save() {
				console.log('保存修改!')
			}
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