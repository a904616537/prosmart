<!--  下拉选择框  -->
<template>
<div class="dropdown">
	<div class="view">
		<input class="input" :style="input_class" type="text" :placeholder="placeholder" v-bind:value="value" v-on:input="$emit('input', $event.target.value)" @click="onClick" @blur="onBlur"/>
		<Icon v-if="display" type="md-arrow-dropdown" size="20" class="icon" :class="[focus ? 'rotate-icon-load' : 'rotate-icon-load-end']"/>
	</div>
	<div v-if="display" class="list" :class="{active : focus}">
		<div class="item" v-for="(val, index) in listData" @click="() => onSelect(val)">{{val}}</div>
	</div>
</div>
</template>

<script>
	import {mapState, mapActions} from 'vuex';
	export default{
		name : 'dropdownInput',
		data() {
			return {
				focus : false
			}
		},
		props : {
			placeholder : '',
			value : '',
			input_class : '',
			change : {
				type    : Function,
				default : () => {}
			},
			listData : {
				type    : Array,
				default : () => [
				]
			}
		},
		computed : mapState({
			shownav : state => state.Setting.shownav,
			display() {
				return this.listData.length > 0
			}
        }),
		methods: {
			onClick() {
				this.focus = true;
			},
			onBlur() {
				this.focus = false;
			},
			onSelect(val) {
				this.focus = false;
				this.change(val);
			}
		}
	}
</script>

<style scoped>
.dropdown{
	position: relative;
}
.dropdown .view {
	height         : 25px;
	display        : flex;
	flex-direction : row;
	flex-wrap      : nowrap;
	border-bottom  : 1px solid #ccc;
}
.dropdown .view .input {
	height : 20px;
}
.dropdown .view .input:focus {
	border  : none;
	outline : none;
}

.dropdown .icon {
	height: 20px;
}
.dropdown .icon.active{
	transform:rotate(180deg);
}
.dropdown .list {
	position                   : absolute;
	background-color           : #fff;
	width                      : 100%;
	max-height                     : 0;
	border-top                 : none;
	border-bottom              : 1px solid #ccc;
	border-left                : 1px solid #ccc;
	border-right               : 1px solid #ccc;
	border-bottom-right-radius : 5px;
	border-bottom-left-radius  : 5px;
	z-index                    : 999;
	overflow                   : hidden;
	opacity                    : 0;
	transition                 : max-height 1s;
}
.dropdown .list.active{
	max-height: 500px;
	opacity : 1;
}
.dropdown .list .item {
	border-bottom : 1px solid #ccc;
	line-height   : 30px;
}
.dropdown .list .item:last-child{
	border-bottom : none;
}
.rotate-icon-load{
	animation : rotate-spin 0.5s;
	transform : rotate(-180deg);
	color     : #ccc;
}
.rotate-icon-load-end{
	animation : rotate-spin-end 0.5s;
	transform : rotate(0deg);
	color     : #333;
}
@keyframes rotate-spin {
    from {
		transform : rotate(0deg);
		color     : #333;
    }
    to   {
		transform : rotate(-180deg);
		color     : #ccc;
    }
}

@keyframes rotate-spin-end {
    from {
		transform : rotate(-180deg);
		color     : #ccc;
    }
    to   {
		transform : rotate(0deg);
		color     : #333;
    }
}

</style>