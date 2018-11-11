<template>
	<div class="swiper">
		<swiper :options="swiperOption">
	        <swiper-slide>Slide 1</swiper-slide>
	        <swiper-slide>Slide 2</swiper-slide>
	        <swiper-slide>Slide 3</swiper-slide>
	        <swiper-slide>Slide 4</swiper-slide>
	        <swiper-slide>Slide 5</swiper-slide>
	        <div class="swiper-pagination" slot="pagination"></div>
	    </swiper>
	</div>
</template>

<script>
	import Vue from 'vue'
	import VueAwesomeSwiper from 'vue-awesome-swiper'
	Vue.use(VueAwesomeSwiper)

	export default{
		name : 'swiper',
		data() {
			return {
				swiperOption: {
					slidesPerView: 'auto',
		          	spaceBetween: 20,
		          	pagination: {
		            	el: '.swiper-pagination',
		            	clickable: true
		          	}
				}
			}
		}
	}
</script>

<style>
	.swiper-slide {
	    width: 40%;
    }
	.swiper-slide:nth-child(2n) {
	    width: 40%;
    }
	.swiper-slide:nth-child(3n) {
	    width: 40%;
  	}
</style>