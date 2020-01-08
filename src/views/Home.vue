<template>
	<div class="home">
		<div class="screen_block">
			<screen @func="getMsgFormSon"></screen>
		</div>
		<div class="swiper_content">
			<swiper></swiper>
			<list></list>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import { Button,NavBar,Toast } from "vant";
import Screen from "../components/Screen"
import Swiper from "../components/Swiper"
import List from "../components/List"


export default {
	name: "home",
	data () {
		return {
			msgFormSon:""
		}
	},
	components: {
		Screen,
		Swiper,
		List,
		[Button.name]:Button,
		[NavBar.name]:NavBar,
		[Toast.name]:Toast 
		

	},
	methods: {
		getMsgFormSon(data){
			this.msgFormSon = data
			console.log(this.msgFormSon )
			Toast( this.msgFormSon)
			// Toast("54545")

		}
	}

};
</script>
<style lang="stylus" scoped>
	.screen_block
		width 100%
		height 58px
		position fixed
		top 0
		left 0
		z-index 1
	.swiper_content
		margin-top 58px
</style>
