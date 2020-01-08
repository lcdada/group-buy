<template>
    <div>
        <div class="top_img" :style="bgImg">
            <div class="top_text">
                <p class="top_text_1">联系我们</p>
                <p class="top_text_2">欢迎垂询，期待与您合作</p>
                <p class="top_text_3"></p>
            </div>
            <div class="Contacts">
                <P class="company_name">北京礼品实业贸易有限公司</P>
                <P class="user_name">联系人：<span> 张经理</span></P>
                <P class="tel_number">联系方式：<span class="telephone">17611134126</span></P>
            </div>
        </div>
        <div class="call_block">
            <img src="../assets/img/phone.png" alt="">
            <p class="phone_text">拨打电话</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Contact",
        data () {
            return {
                 bgImg: {
                    backgroundImage: "url(" + require("../assets/img/contact.png") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100%"
                },
            }
        },
        components: {

        }
    }
</script>

<style lang="stylus" scoped>
    .top_img
        width 100%
        height 306px
        position relative
        .top_text
            width 100%
            height 100%
            position absolute
            top 0 
            left 0
            padding-top 58px
            padding-left 22px
            text-align left 
            color #fff
            box-sizing border-box
            .top_text_1
                font-size 20px
                font-weight bold
                line-height 28px
                letter-spacing 1px
            .top_text_2
                font-size 14px
                font-weight bold
                line-height 20px
                letter-spacing 1px
            .top_text_3
                width 26px
                height 3px
                display block
                background #fff
                margin-top 20px

    .Contacts
        position absolute
        top 180px
        left 20px
        width 335px
        height 138px
        box-shadow 0px 2px 4px 0px rgba(171,171,171,0.5)
        border-radius 8px
        background #fff
        z-index 1
        padding-left 14px
        padding-top 20px
        box-sizing border-box
        text-align left 
        .company_name
            font-size 17px
            font-family PingFang-SC-Bold,PingFang-SC
            font-weight bold
            color:#000
            line-height 24px
        .user_name
            font-size 13px
            font-weight 400
            line-height 18px
            margin-top 34px
        .tel_number
            font-size 13px
            font-weight 400
            line-height 18px
            margin-top 10px  
        .telephone
            font-size 18px
            font-weight 400
            line-height 25px
    .call_block
        width 78px
        margin 0 auto
        margin-top 85px
        img
            width 100%
            height 100%
        .phone_text
            font-size 14px
            color #EEBC99
            line-height 20px
</style>    