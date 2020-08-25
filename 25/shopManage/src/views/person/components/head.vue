<template>
  <div>
    <div class="box">
      <div class="header">
        <div class="tu"></div>
        <a class="text">无甲醛棉品，来自大朴</a>
        <div class="gouWu">
          <router-link to="/" tag="div">购物</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tou",
  data() {
    return {};
  }
};
</script>

<style scoped>
.box {
  position: fixed;
  width: 100%;
  min-width: 1200px;
  height: 50px;
  overflow: hidden;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
}
.header {
  width: 1200px;
  height: 50px;
  margin: 0px auto;
}
.tu {
  width: 245px;
  height: 149px;
  background: url("w.png");
  float: left;
}
.text {
  display: inline-block;
  color: #ffffff;
  font-size: 16px;
  position: absolute;
  left: 50%;
  top: 0px;
  margin-left: -150px;
  width: 300px;
  height: 50px;
  line-height: 50px;
  text-decoration: none;
  word-spacing: 8px;
  letter-spacing: 10px;
  font-family: "微软雅黑";
}
.gouWu {
  border: 1px solid #ffffff;
  color: #ffffff;
  text-align: center;
  margin: 5px 5px;
  font-size: 16px;
  transition: all 0.4s ease 0s;
  background: transparent;
  float: right;
  width: 150px;
  line-height: 38px;
  cursor: pointer;
}
.gouWu:hover {
  background-color: rgb(179, 169, 159);
}
</style>
