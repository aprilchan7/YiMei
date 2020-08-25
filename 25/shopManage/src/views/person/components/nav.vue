<template>
  <div id="navheader">
    <div class="box">
      <div>
        <div class="dingDan">
          <p class="dingDan1">订单中心</p>
          <router-link to="/PerCenter/myorder" class="dingDan2">我的订单</router-link>
          <router-link to="/PerCenter/mycomment" class="dingDan2">我的评论</router-link>
        </div>
        <div class="geRen">
          <p class="dingDan1">个人中心</p>
          <router-link to="/PerCenter/personalData" class="dingDan2">个人资料</router-link>
          <router-link to="/PerCenter/ShiAddress" class="dingDan2">收货地址</router-link>
          <router-link to="/PerCenter/Information" class="dingDan2">发票信息</router-link>
          <router-link to="/PerCenter/Mypoints" class="dingDan2">我的积分</router-link>
          <router-link to="/PerCenter/Mypoints/pointsDetail" class="dingDan2">积分详情</router-link>
          <router-link to="/PerCenter/MyMessage" class="dingDan2">我的消息</router-link>
          <router-link to="/PerCenter/MyCollection" class="dingDan2">我的收藏</router-link>
          <router-link to="/PerCenter/ChangeWord" class="dingDan2">修改密码</router-link>
        </div>
      </div>
      <div class="neiRong">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navheader'
}
</script>

<style scoped>
.box {
  /* position: absolute; */
  display: flex;
  width: 200px;
  /* height: 564px; */
  margin: 50px auto 0;
  /* margin-bottom: 100px; */
  margin-left: 10%;
  color: #808080;
  background-color: rgb(239, 239, 239);
}
.dingDan {
  text-align: left;
  padding: 30px 0 0 30px;
}
.dingDan1 {
  color: #6b6b6b;
  font-size: 18px;
}
template {
  font-family: 微软雅黑;
}
.dingDan2 {
  display: block;
  margin-top: 15px;
  font-size: 14px;
  color: #6b6b6b;
}
.geRen {
  width: 200px;
  /* height: 307px; */
  font-size: 12px;
  padding-top: 5px;
  text-align: left;
  padding: 30px 0 50px 30px;
}
.neiRong {
  /* padding-left: -100px; */
  /* height: 1000px; */
}
</style>
