<template>
	<div class="calendar">
		<div class="title">
			<img src="static/icons/calendar.png" class="icon-style" />活动日历
		</div>
		<div class="card" @click="activity">查看所有活动</div>
		<v-dropdown-input v-model="data.sort" :list-data="sort" :change="(val) => data.sort = val" class="select"/>
		<v-datepicker></v-datepicker>
	</div>
</template>

<script>
	import {mapState, mapActions} from 'vuex';
	import VInput     from '@/components/dropdownInput';
	import Datepicker from '@/components/datepicker';

	export default{
		name : 'calendar',
		data() {
			return {
				data: {
					sort : '' //类别
				},
				sort : ['按球队分类查看活动']
			}
		},
		components: {
			'v-dropdown-input' : VInput,
			'v-datepicker'     : Datepicker 
		},
		methods: {
			activity() {
				this.$router.push({path : 'activity'});
			},
		}
	}
</script>

<style lang="scss">
	$title: 15px;
	$puplic-space: 20px;
	.calendar{
		padding: 0 10px;
		text-align: left;
		.title{
			font-weight: 500;
			font-size: $title;
			.icon-style{
				width: 18px;
				vertical-align: middle;
				margin-right: 5px;
				margin-top: -4px;
			}
		}
		.card{
			padding: $puplic-space/2;
			box-shadow: 0 2px 4px rgba(0,0,0,.35);
			border-radius: 8px;
			font-size: 14px;
			margin-top: $puplic-space/2;
			margin-bottom: $puplic-space/2;
		}
		.select{
			margin: 20px 100px;
			font-size: $title;
		}
	}
</style>