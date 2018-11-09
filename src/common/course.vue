<template>
	<div class="course">
		<div class="tab">
			<div class="active btn btn-l">已学习</div>
			<div class="btn btn-r">未学习</div>
		</div>
		<div class="content">
			<div class="lesson-item">
				<label>初级阶段</label>
				<div class="lesson-list">
					<p><span>冰球课程-课程一-冰球运动</span><span>2018-11-11</span></p>
					<p><span>技能视频-力量滑冰-平稳后退</span><span>2018-11-11</span></p>
					<p><span>冰球课程-课程一-冰球运动</span><span>2018-11-11</span></p>
					<p><span>技能视频-力量滑冰-平稳后退</span><span>2018-11-11</span></p>
					<p><span>冰球课程-课程一-冰球运动</span><span>2018-11-11</span></p>
					<p><span>技能视频-力量滑冰-平稳后退</span><span>2018-11-11</span></p>
				</div>
				<div class="more">查看更多<img class="icon-style" :src="more" /></div>
			</div>

			<div class="lesson-item">
				<label>中级阶段</label>
				<div class="lesson-list">
					<p><span>冰球课程-课程一-冰球运动</span><span>2018-11-11</span></p>
					<p><span>技能视频-力量滑冰-平稳后退</span><span>2018-11-11</span></p>
					<p><span>冰球课程-课程一-冰球运动</span><span>2018-11-11</span></p>
					<p><span>技能视频-力量滑冰-平稳后退</span><span>2018-11-11</span></p>
					<p><span>冰球课程-课程一-冰球运动</span><span>2018-11-11</span></p>
					<p><span>技能视频-力量滑冰-平稳后退</span><span>2018-11-11</span></p>
				</div>
				<div class="more">查看更多<img class="icon-style" :src="more" /></div>
			</div>
			
			<div class="lesson-item">
				<label>高级阶段</label>
				<div class="lesson-list">
					<p><span>冰球课程-课程一-冰球运动</span><span>2018-11-11</span></p>
					<p><span>技能视频-力量滑冰-平稳后退</span><span>2018-11-11</span></p>
					<p><span>冰球课程-课程一-冰球运动</span><span>2018-11-11</span></p>
					<p><span>技能视频-力量滑冰-平稳后退</span><span>2018-11-11</span></p>
					<p><span>冰球课程-课程一-冰球运动</span><span>2018-11-11</span></p>
					<p><span>技能视频-力量滑冰-平稳后退</span><span>2018-11-11</span></p>
				</div>
				<div class="more">查看更多<img class="icon-style" :src="more" /></div>
			</div>

		</div>	
	</div>
</template>

<script>
	export default{
		name : 'course',
		data() {
			return {
				more : 'static/icons/more.png'
			}
		}
	}
</script>

<style lang="scss">
	$title: 15px;
	$puplic-space: 20px;
	$btn-color: #212436;
	.course{
		.tab{
			display: flex;
			justify-content: center;
			.active.btn{
				background-color: #fff;
				color: $btn-color;
			}
			.btn{
				width: $puplic-space*5;
				font-size: $title;
				font-weight: bold;
				font-family: fontM;
				text-align: center;
				line-height: $puplic-space*2;
				box-shadow: 0 2px 4px rgba(0, 0, 0, 0.35);
				background-color: $btn-color;
				color: #fff;
			}
			.btn-l{
				border-top-left-radius: $puplic-space/4;
				border-bottom-left-radius: $puplic-space/4;
			}
			.btn-r{
				border-top-right-radius: $puplic-space/4;
				border-bottom-right-radius: $puplic-space/4;
			}
		}
		.content{
			text-align: left;
			font-size: 14px;
			.lesson-item{
				margin-top: $puplic-space/2;
				border-bottom: 1px solid #eee;
				padding: 0 $puplic-space/2 $puplic-space;
				label{
					font-size: 15px;
					font-weight: 500;
					line-height: 30px;
					color: $btn-color;
				}
				.lesson-list{
					p{
						display: flex;
						justify-content: space-between;
						:first-child{
							text-decoration: underline;
						}
					}
				}
			}
			.more{
				text-align: center;
				margin-top: $puplic-space/2;
				font-size: 12px;
				.icon-style{
					width: 12px;
					margin-left: $puplic-space/3;
					vertical-align: middle;
				}
			}
			
		}
	}

</style>