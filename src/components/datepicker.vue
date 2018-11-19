<template>
	<div class="picker">
		<datepicker :inline="true" :language="zh"></datepicker>
	</div>
</template>
<script>
	import Datepicker from 'vuejs-datepicker';
	import {en, zh}   from 'vuejs-datepicker/dist/locale';

	export default{
		name : 'picker',
		data() {
			return {
				en: en,
				zh: zh
			}
		},
		components: {
		    Datepicker
		}
	}
</script>
<style>
	.picker .vdp-datepicker__calendar{
		width: 100%;
	}
	.picker span.prev,.picker span.day__month_btn,.picker span.next,.vdp-datepicker__calendar .cell.day-header{
		background-color: #212436;
		color: #fff;
		border: 1px solid #212436;
	}
	.picker .vdp-datepicker__calendar header .prev:after{
		border-right: 10px solid #fff;		
	}
	.picker .vdp-datepicker__calendar header .next:after{
		border-left: 10px solid #fff;
	}
	.picker .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day, .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month, .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year{
		height: 50px;
		text-align: left;
		line-height: 24px;
	}
</style>