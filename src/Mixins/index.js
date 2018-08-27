/**
* FileType js
* @Author: Kain·Shi <a904616537@outlook.com>
* @DateTime:    2018-07-16 16:49:58
* @Description
* @Flow 
*/

import Vue                    from 'vue';
import {mapState, mapActions} from 'vuex';

const mixin = {
	created(){
		console.log('钩子函数被调用')
	},
	data() {
		return {
		}
	},
	computed : mapState({
    }),
    watch: {
    },
	methods: {
		...mapActions([
        ]),
	},
	destroyed() {
		console.log('销毁');
	}
}
export default mixin;