<template>
    <div class="swiper">
        <van-swipe indicator-color="#000" class="swiper_content" v-if="showSwiper">
            <van-swipe-item>
                <img :src="swiper" alt="" class="swiperImg">
            </van-swipe-item>
            <!-- <van-swipe-item>
                <img src="../assets/logo.png" alt="" class="swiperImg">
            </van-swipe-item>
            <van-swipe-item>
                <img src="../assets/logo.png" alt="" class="swiperImg">
            </van-swipe-item> -->
        </van-swipe>
        <div v-if="showVideo" class="video_block">
            <video
            :src="video"
            webkit-playsinline="true"
            x-webkit-airplay="true"
            playsinline="true"
            x5-video-player-type="h5"
            x5-video-player-fullscreen="true"
            width="100%"
            height="100%"
            preload="auto"
            poster="">
            </video>
        </div>
    </div>
</template>

<script>
    import { Swipe, SwipeItem } from 'vant';
    export default {
        props:{
            video:String,
            swiper:String
        },
        data () {
            return {
                showSwiper:true,
                showVideo:false
            }
        },
        components: {
            [Swipe.name]:Swipe,
            [SwipeItem.name]:SwipeItem
        }
    }
</script>
<style lang="stylus" scoped>
    .swiper
        width 100%
        height 205px
        padding 15px
        box-sizing border-box
        background linear-gradient(180deg,rgba(238,238,238,1) 0%,rgba(255,255,255,1) 100%);
    .swiper_content
        width 345px
        height 176px
        border 1px solid #ccc
        .swiperImg
            width 100%
            height 100%
    .video_block
        width 100%
        height 100%
</style>
