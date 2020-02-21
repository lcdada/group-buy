<template>
	<div class="home">
		<div class="screen_block">
			<screen @funcScene="getScene" @funcPrice="getPrice" @funObject="getObject"></screen>
		</div>
		<div class="swiper_content">
			<swiper :video = Video :swiper = Swiper></swiper>
			<list :homelist= homeList></list>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import { Button,NavBar,Toast } from "vant";
import Screen from "../components/Screen"
import Swiper from "../components/Swiper"
import List from "../components/List"

import Qs from 'qs'
export default {
	name: "home",
	data () {
		return {
			msgFormSon:'',
			homeList:[],
			Swiper:'',
			Video:'',
			price:'',
			target:''			

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
	watch: {
		msgFormSon:function(data){
			this.msgFormSon = data
			let sceneData = Qs.stringify({"cid":"54","scene_id":this.msgFormSon});
			this.$http.post("/api/Api/GroupPurchase/getSingleGroupPurchase",
			sceneData,
			{headers:{'Content-Type':'application/x-www-form-urlencoded'}})
			.then((res) => {
				if(res.data.data.status == 101){
					this.homeList = res.data.data.goods_list
				}
			}).catch((err) => {
				console.log(err);
			})
		},
		price:function(data){
			this.price = data
			let priceData = Qs.stringify({"cid":"54","price_id":this.price});
			this.$http.post("/api/Api/GroupPurchase/getSingleGroupPurchase",
			priceData,
			{headers:{'Content-Type':'application/x-www-form-urlencoded'}})
			.then((res) => {
				if(res.data.data.status == 101){
					this.homeList = res.data.data.goods_list
				}
			}).catch((err) => {
				console.log(err);
			})
		},
		target:function(data){
			this.target = data
			let targetData = Qs.stringify({"cid":"54","festival_id":this.target});
			this.$http.post("/api/Api/GroupPurchase/getSingleGroupPurchase",
			targetData,
			{headers:{'Content-Type':'application/x-www-form-urlencoded'}})
			.then((res) => {
				if(res.data.data.status == 101){
					this.homeList = res.data.data.goods_list
				}
			}).catch((err) => {
				console.log(err);
			})
		},
	},
	created () {
		this.getHomelist()	
	},
	methods: {
		getHomelist(){
			let data = Qs.stringify({"cid":"54"});
			this.$http.post("/api/Api/GroupPurchase/getSingleGroupPurchase",
			data,
			{headers:{'Content-Type':'application/x-www-form-urlencoded'}})
			.then((res) => {
				console.log(res.data.data);
				if(res.data.data.status == 101){
					this.homeList = res.data.data.goods_list
					this.Video = res.data.data.data.video
					this.Swiper = res.data.data.data.share_img
				}
			}).catch((err) => {
				console.log(err);
			})
		},
		// 场景
		getScene(data){
			this.msgFormSon = data
			
		},
		// 价格
		getPrice(data){
			this.price = data
		},
		//  对象
		getObject(data){
			this.target = data
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
