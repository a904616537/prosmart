<template>
	<div class="popout" @click="click">
		<div class="inner">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default{
		name : 'popout',
		data() {
			return {

			}
		},
		props: {
			click: {
				type : Function,
				default : () => console.log('clost')
			}
		}
	}
</script>

<style lang="scss">
	.popout{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background-color: rgba(0,0,0,.6);
		height: 100%;
		overflow: hidden;
		.inner{
			background-color: #fff;
			padding: 20px;
			border-radius: 8px;
			margin: 50vw 10vw;
			font-size: 14px;
			text-align: center;
		}
	}
</style>