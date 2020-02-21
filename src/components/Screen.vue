<template>
  <div>
    <div class="screen_content">
      <span class="screen_text">筛选</span>
      <ul class="screen_list">
        <li
          v-for="(item,index) in barMenus"
          :key="index"
          :class="{'screen_item':true, 'current': item.isShow}"
        >
          <span @click="handerClickMenu(item)" class="item_name">
            {{item.name}}
            <van-icon :name="item.isShow ? 'arrow-up' :'arrow-down'" />
          </span>
        </li>
      </ul>
      <!-- 场景 -->
      <van-popup v-model="show1" position="top">
        <div class="empty_block"></div>
        <div class="scene_block">
          <ul>
            <li v-for="(item1,index) in list1" :key="index">
              <p class="title_name">{{item1.name}}</p>
              <ul class="allOption">
                <li
                  v-for="item in item1.list"
                  :key="item.value"
                  :class="{'current': item.selected}"
                  @click="handerClickContent(item,item1)"
                >{{item.name}}</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="footer_button">
          <van-button @click="handerClear(list1)" class="empty">清空</van-button>
          <van-button @click="searcScene(list1)" class="search">确定</van-button>
        </div>
      </van-popup>
      <!-- 价位 -->
      <van-popup v-model="show2" position="top">
        <div class="empty_block"></div>
        <div class="scene_block">
          <ul>
            <li v-for="(item2,index) in list3" :key="index">
              <ul class="allPic">
                <li
                  v-for="item in item2.list"
                  :key="item.value"
                  :class="{'current_pic': item.selected}"
                  @click="handerClickContentPrice(item,item2)"
                >{{item.name}}</li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- <div class="footer_button">
          <van-button @click="handerClear(list3)" class="empty">清空</van-button>
          <van-button @click="searchPrice(list3)" class="search">确定</van-button>
        </div>-->
      </van-popup>
      <!-- 对象 -->
      <van-popup v-model="show3" position="top">
        <div class="empty_block"></div>
        <div class="scene_block">
          <ul>
            <li v-for="(item3,index) in list2" :key="index">
              <p class="title_name">{{item3.name}}</p>
              <ul class="allOption">
                <li
                  v-for="item in item3.list"
                  :key="item.value"
                  :class="{'current': item.selected}"
                  @click="handerClickContent(item,item3)"
                >{{item.name}}</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="footer_button">
          <van-button @click="handerClear(list2)" class="empty">清空</van-button>
          <van-button @click="searcObject(list2)" class="search">确定</van-button>
        </div>
      </van-popup>
    </div>
  </div>
</template>

<script>
import Qs from "qs";
import { Icon, Popup, Tabbar, Button } from "vant";
export default {
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      barMenus: [],
      list1: [],
      list2: [],
      list3: [],
      selectArr: [],
      isShow: false
    };
  },
  components: {
    [Icon.name]: Icon,
    [Popup.name]: Popup,
    [Tabbar.name]: Tabbar,
    [Button.name]: Button
  },
  created() {
    this.getScreenList();
  },
  methods: {
    handerClickMenu(item) {
      if (!item) {
        return;
      }
      if (item.name == "场景") {
        this.show1 = !this.show1;
        this.show2 = false;
        this.show3 = false;
      }
      if (item.name == "价位") {
        this.show2 = !this.show2;
        this.show1 = false;
        this.show3 = false;
      }
      if (item.name == "对象") {
        this.show3 = !this.show3;
        this.show1 = false;
        this.show2 = false;
      }
    },

    // 价格单选
    handerClickContentPrice(item, child) {
      if (!child.medium) {
        item.selected = !item.selected;
        if (this.selectArr.indexOf(item.name) === -1) {
          this.selectArr.push(item.value);
        } else {
          this.selectArr.splice(this.selectArr.indexOf(item.value), 1);
        }
        this.$emit("funcPrice", this.selectArr.toString());
        this.selectArr = [];
        this.show2 = false;
      }
    },
    
    handerClickContent(item, child) {
    //   console.log(item);
      item.selected = !item.selected;
      if (this.selectArr.indexOf(item.name) === -1) {
        this.selectArr.push(item.value);
      } else {
        this.selectArr.splice(this.selectArr.indexOf(item.value), 1);
      }
    },
    getScreenList() {
      let data = Qs.stringify({ cid: "54" });
      this.$http
        .post("/api/Api/GroupPurchase/getGroupPurchaseScreen", data, {
          headers: { "Content-Type": "application/x-www-form-urlencoded" }
        })
        .then(res => {
        //   console.log(res.data);
        //   console.log(res.data.data[2].child);
          if (res.data.status == 101) {
            this.homeList = res.data.data.goods_list;
            this.barMenus = res.data.data;
            this.list1 = res.data.data[0].child;
            this.list2 = res.data.data[1].child;
            this.list3 = res.data.data[2].child;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    handerClear(data) {
      this.selectArr = [];
      data.forEach(function(currentValue, index, arr) {
        currentValue.list.forEach(function(item, index, arr) {
          item.selected = false;
        });
      });
    },
    // 场景确认
    searcScene(data) {
      this.show1 = false;
    //   this.show2 = false;
    //   this.show3 = false;
      this.$emit("funcScene", this.selectArr.toString());
      this.selectArr = [];
      data.forEach(function(currentValue, index, arr) {
        currentValue.list.forEach(function(item, index, arr) {
          if (item.selected == true) {
            // console.log(item);
          }
          item.selected = false;
        });
      });
    },
    // 对象确认
    searcObject(data) {
    //   this.show1 = false;
    //   this.show2 = false;
      this.show3 = false;
      this.$emit("funObject", this.selectArr.toString());
      this.selectArr = [];
      data.forEach(function(currentValue, index, arr) {
        currentValue.list.forEach(function(item, index, arr) {
          if (item.selected == true) {
            // console.log(item);
          }
          item.selected = false;
        });
      });
    },
    handerClose() {
      this.barMenus.forEach(function(currentValue, index, arr) {
        currentValue.isShow = false;
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.screen_content {
  width: 100%;
  height: 58px;
  padding: 0 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  z-index: 99999;
  background: #fff;

  .screen_text {
    font-size: 20px;
    color: #333;
    font-weight: bold;
    line-height: 28px;
    margin-right: 46px;
    z-index: 9999;
  }
}

.screen_list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 9999;
  height: 100%;
}

.screen_item {
  height: 100%;
  margin-right: 32px;
  font-size: 15px;
  font-weight: bold;
  font-family: PingFang-SC-Bold, PingFang-SC;
}

.item_name {
  display: block;
  line-height: 58px;
  height: 100%;
  font-size: 15px;
  color: #333;
  font-weight: bold;
}

.select_content {
  width: 375px;
  height: 600px;
  background: rgba(0, 0, 0, 0.7);
  z-index: 99;
  position: absolute;
  top: 58px;
  left: 0;

  .select_block {
    width: 100%;
    height: 436px;
    background: #fff;
    z-index: 999;
  }
}

.empty_block {
  height: 58px;
  border-bottom: 1px solid #ccc;
}

.scene_block {
  box-sizing: border-box;
  padding-top: 24px;
  padding-left: 15px;
  height: 360px;
  overflow-y: auto;

  .title_name {
    width: 100%;
    font-size: 15px;
    font-weight: bold;
    text-align: left;
  }
}

.allOption {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  li {
    width: 70px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 12px;
    border: 0.5px solid #ccc;
    margin-right: 17px;
    margin-bottom: 16px;
    margin-top: 10px;
  }

  li:nth-child(4n) {
    margin-right: 0;
  }
}

.current {
  color: #FFA001;
  border: 0.5px solid #FFA001 !important;
}

.allPic {
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    width: 100%;
    height: 40px;
    font-size: 16px;
    color: #666;
    line-height: 40px;
    text-align: center;
  }
}

.current_pic {
  color: #FFA001 !important;
}

.footer_button {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  background: #fff;
}

.empty {
  width: 124px;
  height: 32px;
  line-height: 32px;
  background: #ccc;
  border-radius: 4px;
  color: #fff;
  outline: none;
}

.search {
  width: 169px;
  height: 32px;
  line-height: 32px;
  color: #fff;
  border: #FFA001;
  background: #FFA001;
  border-radius: 4px;
  outline: none;
}
</style>
