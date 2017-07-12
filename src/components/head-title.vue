<template>
	<!--<x-header :left-options="{backText: ''}">{{title}}</x-header>
	<x-header :left-options="{showBack: false}">{{title}}</x-header>-->
	<mt-header fixed title="固定在顶部"></mt-header>

	<!--<mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>-->

</template>
<script>
	//import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem } from 'vux'
	export default {
		name: 'header-title',
		props: ['title', 'bcolor'],
		components: {
//			XHeader,
//			Actionsheet,
//			ButtonTab,
//			ButtonTabItem
		}
	}
</script>
<style>

</style>