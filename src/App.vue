<template>
  <div id="app">
    <div id="nav"></div>
    <router-view />
	<!-- 底部tabbar -->
	<div>
		<van-tabbar v-model="active">
			<van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
			<van-tabbar-item icon="question-o" to="/guide">兑换指南</van-tabbar-item>
			<van-tabbar-item icon="chat-o" to="/contact">联系我们</van-tabbar-item>
		</van-tabbar>
	</div>
  </div>
</template>

<script>
	import { Tabbar, TabbarItem } from 'vant';
	export default {
		name: "home",
		 data() {
			return {
				active: 0
			}
		},
		components: {
			[Tabbar.name]:Tabbar,
			[TabbarItem.name]:TabbarItem
		}
	};
</script>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
