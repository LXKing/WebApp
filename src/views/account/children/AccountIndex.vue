<template>
	<div class="account-wrap">
		<x-header :left-options="{showBack: false}">记账</x-header>
		<div class="go-btn-box">
			<a href="/account/consumption" class="go-account go-consumption">消费</a>
			<a href="/account/earn" class="go-account go-earn">入账</a>
		</div>
	</div>
</template>
<script>
	import types from '../../../store/mutation-types'
	import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem } from 'vux'
	export default {
		name: 'account_index',
		created() {
			this.setNavIndex();
		},
		directives: {
			TransferDom
		},
		components: {
			XHeader,
			Actionsheet,
			ButtonTab,
			ButtonTabItem
		},
		methods: {
			setNavIndex() {
				this.$store.commit(types.SET_NAV_INDEX, '2')
			}
		}
	}
</script>
<style lang="scss">
	@import "../../../assets/scss/define";
	.go-btn-box {
		@extend %pa;
		@extend %tac;
		@extend %f14;
		@extend %cfff;
		@extend %l0;
		@extend %r0;
		@extend %t50;
		transform: translate3d(0, -50%, 0);
	}
	
	.go-account {
		@extend %db;
		@extend %cp;
		@extend %cfff;
		margin: 0 auto 20px;
		width: 150px;
		height: 35px;
		line-height: 35px;
		border-radius: 5px;
		&.go-consumption {
			background-color: #FF4949;
			box-shadow: 0 3px 0 0 red;
		}
		&.go-earn {
			background-color: #69ce72;
			box-shadow: 0 3px 0 0 #13CE66;
		}
	}
</style>