<template>
  <div id="mainHot">
    <div id="hotShop">
      <h3>热销商品</h3>
    </div>
    <div class="hot" v-for="item in hotList" :key="item.Pro_Id">
      <router-link :to="{ path: '/productdetails/' + item.Pro_Id }">
        <img :src="require(`../../assets/images/${item.Pro_Url}`)" alt="" />
        <!-- <img :src="item.Pro_Url" alt="" /> -->
        <a href="">{{ item.Pro_Name }}</a>
        <strong>￥{{ item.Price }}</strong>
      </router-link>

      <!-- <div class="hot">
        <img src="../../../assets/images/home/hotShop_4.jpg" alt="" />
        <a href="">色织条纹毛巾被</a>
        <strong>￥199</strong>
      </div>

      <div class="hot">
        <img src="../../../assets/images/home/hotShop_5.jpg" alt="" />
        <a href="">阿瓦提素色浴巾</a>
        <strong>￥99</strong>
      </div> -->
    </div>
  </div>
</template>

<script>
import { getHotProduct } from "@/network/hotproduct";
export default {
  name: "mainHot",
  data() {
    return {
      hotList: []
    };
  },
  created() {
    getHotProduct().then(res => {
      this.hotList = res.data.data;
      // console.log("================");

      //console.log(this.hotList);
    });
  }
};
</script>

<style scoped>
#mainHot {
  width: 190px;
  padding-left:30px;
  /* height: 1130px;
   */
  border: 1px solid #dcdcdc;
}
.#mainHot > a {
  display: inline-block;
}
#hotSh {
  background-color: #f6f5f3;
  height: 30px;
  text-align: left;
  line-height: 30px;
}
#hotSh h3 {
  font-weight: bold;
  color: #605046;
  font-size: 14px;
  margin-left: 20px;
}
.hot {
  width: 188px;
  height: 210px;
  /*outline: 1px solid red;*/
  margin-top: 10px;
}
img {
  width: 156px;
  height: 156px;
}
a {
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  font-size: 12px;
  color: #6b6b6b;
  text-align: left;
  width: 120px;
  margin: 5px auto;
}
div a:hover {
  text-decoration: underline;
}
strong {
  display: block;
  font-size: 12px;
  color: #7f5b42;
  margin-top: 5px;
}
</style>
