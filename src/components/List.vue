<template>
    <div class="list_content">
        <div class="title_text">
            <p class="title_1">2020送礼_推荐方案</p>
            <p class="title_2">一整年的送礼选择</p>
        </div>
        <div class="list">
            <ul class="list_ul">
                <li class="goods_item" v-for="item in homelist" :key="item.index">
                    <div class="box_1"></div>
                    <div class="box_2"></div>
                    <img :src="item.src" alt="" class="item_img">
                    <div class="goods_item_text">
                        <p class="item_text_1">{{item.title}}</p>
                        <p class="item_text_2">{{item.price}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Qs from 'qs'
    export default {
         props:{
            homelist:Array,
        },
        data () {
            return {
                homeList:[]
            }
        },
        components: {

        },
        created () {
            // this.getHomelist()  
        },
        methods: {
            // getHomelist(){
            //     let data = Qs.stringify({"cid":"54"});
            //     this.$http.post("/api/Api/GroupPurchase/getSingleGroupPurchase",
            //     data,
            //     {headers:{'Content-Type':'application/x-www-form-urlencoded'}})
            //     .then((res) => {
            //         console.log(res.data.data);
            //         if(res.data.data.status == 101){
            //             this.homeList = res.data.data.goods_list
            //         }
            //     }).catch((err) => {
            //         console.log(err);
            //     })
            // }
        }
    }
</script>

<style lang="stylus">
    .list_content
        width 100%
        padding 10px 15px
        box-sizing border-box
        margin-bottom 120px
    .title_1
        font-size 16px
        line-height 22px
        font-family PingFang-SC-Bold,PingFang-SC
        font-weight bold
        text-align left
    .title_2
        font-size 13px
        color #999
        font-weight 400
        line-height 18px
        text-align left 
        margin-top 8px
    .list
        margin-top 16px
    .list_ul
        display flex
        justify-content flex-start
        align-items center
        flex-direction: row;
        flex-wrap wrap
        .goods_item
            position relative
            width 100px
            height auto
            margin-right 20px
            .item_img
                width 100%
                height 100%
            .goods_item_text
                height 74px
                text-align left 
                .item_text_1
                    font-size 12px;
                    color #666
                    font-weight 600
                    line-height:17px;
                    font-family:PingFangSC-Medium,PingFang SC
                .item_text_2
                    font-size 10px
                    color #FFA001
            .box_1
                position absolute
                top 4px
                left 11px
                height 92px
                width 92px
                background:#eee;
                border-radius:2px;
                border:0.2px solid #979797 
                z-index -1
            .box_2
                position absolute
                top 8px
                left 22px
                width 84px
                height 84px
                background:#eee;
                border-radius:2px;
                border:0.2px solid #979797;
                z-index -2
    .list_ul
        li:nth-child(3n)
            margin-right 0




</style>