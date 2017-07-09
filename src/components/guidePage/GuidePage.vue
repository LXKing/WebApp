<template>
	<div class="guidePage">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item, index) in arrList" :key="index">
					<img v-bind:src="item.imgurl" />
				</div>
			</div>

			<!-- Add Pagination -->
			<div class="swiper-pagination"></div>
		</div>

		<mt-button plain class="startapp" v-show="showStartCloseType" @click.native="setFirstUseApp">启动APP</mt-button>
		<mt-button plain class="close" v-show="showStartCloseType" @click.native="setFirstUseApp">关闭</mt-button>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import { Indicator, Toast } from 'mint-ui';

	export default {
		name: 'guidePage',
		data() {
			return {
				slideCount: 0,
				arrList: []
			}
		},
		methods: {
			showStartClose() {
				this.$store.dispatch('showStartClose');
			},
			hideStartClose() {
				this.$store.dispatch('hideStartClose');
			},
			//设置首次使用标识，关闭引导页并跳转
			setFirstUseApp() {
				localStorage.setItem("isFirstUseApp", 1);
				this.$store.dispatch('hideGuidePage');
				this.$router.push({
					path: '/home'
				})
			},
			fetchData() {
				var _this = this;
				_this.$http.get('http://ostbiefv1.bkt.clouddn.com/guidePage.json').then(function(res) {
					_this.arrList = [];
					var count = res.data.guidePage.length;
					_this.slideCount = count - 1;
					for(var i = 0; i < count; i++) {
						//容错机制-防止api返回null值
						if(res.data.guidePage[i]) {
							_this.arrList.push(res.data.guidePage[i]);
						}
					}
				}).catch(function(err) {
					Indicator.close();
					Toast('获取失败！');
				})
			}
		},
		mounted: function() {
			//获取引导页数据	
			this.fetchData();
			this.$store.dispatch('showGuidePage');
			this.$store.dispatch('hideStartClose');
		},
		//beforeUpdate updated
		updated: function() {
			var _this = this;
			//判断是否首次使用
			//localStorage.setItem("isFirstUseApp", 1);
			var isFirstUseApp = localStorage.getItem("isFirstUseApp");
			if(!isFirstUseApp) {
				var myswiper = new Swiper('.swiper-container', {
					pagination: '.swiper-pagination',

					//paginationType : 'bullets',
					paginationType: 'fraction',
					//paginationType: 'progress',
					//paginationType : 'custom',
					paginationClickable: true,
					autoplay: false,
					loop: false,
					resistanceRatio: 0,
					onInit: function(swiper) {

					},
					onSlideChangeStart: function(swiper) {
						setTimeout(function() {
							if(swiper.activeIndex === _this.slideCount) {
								_this.$store.dispatch('showStartClose');

							} else {
								_this.$store.dispatch('hideStartClose');
							}
						}, 200)
					},
					onSlideChangeEnd: function(swiper) {
						setTimeout(function() {
							myswiper.slideTo(swiper.activeIndex, 100, false);
						}, 100);
					}
				});
			} else {
				_this.$store.dispatch('hideGuidePage');
				_this.$router.push({
					path: '/home'
				})
			}
		},
		computed: mapGetters([
			'showStartCloseType'
		]),
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.guidePage {
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: 900;
		background-color: aquamarine;
	}
	
	.swiper-container {
		width: 100%;
		height: 100%;
	}
	
	.swiper-slide {
		width: 100%;
		text-align: center;
		font-size: 18px;
		background: #fff;
		/*Center slide text vertically **/
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
	}
	
	.swiper-slide img {
		width: 100%;
		height: 100%;
	}
	
	.startapp {
		z-index: 999;
		display: inline-block;
		width: 40%;
		height: 40px;
		line-height: 40px;
		text-decoration: none;
		position: fixed;
		bottom: 80px;
		left: 30%;
		border: none;
		background-color: rgba(0, 0, 0, .2);
	}
	
	.close {
		z-index: 999;
		color: #fff;
		position: fixed;
		top: 24px;
		right: 15px;
		border: none;
		border-radius: 50px;
		background-color: rgba(0, 0, 0, .4);
		height: 25px;
		text-align: center;
	}
</style>