<!--  导航  -->
<template>
	<div class="searchindex">
		<Button type="default" size="large" class="button" @click="toSearch">寻找球队</Button>
		<router-link to="/home" class="link" href="">跳过，进入下一步骤<Icon type="md-arrow-dropright" size="15"/></router-link>
	</div>
</template>

<script>
	import Vue                    from 'vue';
	import axios                  from 'axios';
	import {mapState, mapActions} from 'vuex';
	export default{
		name : 'searchindex',
		data() {
			return {
			}
		},
		computed : mapState({
			user     : state => state.User.user,
			token    : state => state.User.token,
			is_login : state => state.User.isLogin,
        }),
		methods: {
			...mapActions([
	        ]),
	        toSearch() {
	        	this.$router.push({path : 'search'})
	        },
		},
		mounted() {
		}
	}
</script>

<style scoped>
.searchindex {
	display         : flex;
	align-items     : center;
	justify-content : flex-start;
	flex-direction  : column;
}
</style>