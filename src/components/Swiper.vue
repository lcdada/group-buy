<template>
    <div class="swiper">
        <van-swipe indicator-color="#000" class="swiper_content">
            <van-swipe-item>
                <img src="../assets/logo.png" alt="" class="swiperImg">
            </van-swipe-item>
            <van-swipe-item>
                <img src="../assets/logo.png" alt="" class="swiperImg">
            </van-swipe-item>
            <van-swipe-item>
                <img src="../assets/logo.png" alt="" class="swiperImg">
            </van-swipe-item>

        </van-swipe>
    </div>
</template>

<script>
    import { Swipe, SwipeItem } from 'vant';
    export default {
        data () {
            return {

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
</style>
