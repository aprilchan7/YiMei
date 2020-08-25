<template>
  <div>
    <!--<div class="logo">
      <img src="@/assets/images/logo.png" alt />
    </div>-->
    <div id="forget">
      <div id="searchPwd">
        <h3>找回密码</h3>
<!--        <router-link to="/denglu">-->
          <a href="/denglu">返回登录</a>
<!--        </router-link>-->
      </div>

      <div id="buzhou">
        <div id="firstBu">1.填写账户名</div>
        <span>&gt;</span>
        <div>2.找回方式</div>
        <span>&gt;</span>
        <div>3.设置新密码</div>
        <span>&gt;</span>
        <div>4.完成</div>
      </div>

      <div id="yourPwd">
        <form action>
          <label for class="zhanghu">账户选择:</label>
          <select name id>
            <option value>用户名</option>
            <option value>手机号</option>
            <option value>邮箱地址</option>
          </select>
          <div id="newPwd">
            <label for id="twoBox">用户名/手机号/邮箱地址：</label>
            <input type="text" value="用户名/手机号码/邮箱" />
          </div>

          <div id="yanzheng">
            <label for>验证码:</label>
            <input type="text" />
          </div>
        </form>
      </div>

      <div id="nextBu">
        <button>下一步</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'forgetPwd'
}
</script>

<style scoped>
#forget {
  width: 1000px;
  height: 410px;
  background: url('../../../assets/images/home/dapu_login.jpg');
  margin: 0 auto;
  position: relative;
}
#searchPwd {
  background-color: #e0dfdb;
  height: 60px;
  line-height: 60px;
}
#searchPwd h3 {
  display: inline;
  float: left;
  margin: 0 30px;
}
#searchPwd a {
  /*margin-right: 30px;*/
  font-size: 14px;
  text-decoration: none;
  color: #428bca;
  float: right;
  margin-right: 20px;
  font-weight: bold;
}
#searchPwd a:hover {
  text-decoration: underline;
}
#buzhou {
  border-bottom: 1px solid white;
  width: 670px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  line-height: 100px;
}
#buzhou div {
  width: 150px;
  height: 60px;
  background-color: #eeeeee;
  font-size: 16px;
  text-align: center;
  line-height: 60px;
  margin-top: 20px;
  margin-left: 8px;
}
#buzhou #firstBu {
  background-color: #b3a99f;
}
#buzhou span {
  color: #eeeeee;
  font-size: 20px;
  font-family: cursive;
  margin-left: 2px;
}
#yourPwd {
  width: 670px;
  height: 190px;
  border-bottom: 1px solid white;
  margin: 0 auto;
  padding-top: 30px;
}
label {
  width: 300px;
  text-align: right;
  float: left;
  line-height: 24px;
  /*display: block;*/
}
select {
  width: 220px;
  height: 30px;
  margin-left: -113px;
}
#newPwd input {
  height: 30px;
  width: 220px;
  margin-left: -121px;
}
#newPwd {
  margin-top: 30px;
}
#yanzheng input {
  width: 220px;
  height: 30px;
  margin-left: -112px;
}
#yanzheng {
  margin-top: 30px;
}

#twoBox {
  margin-left: 9px;
}
input {
  border: 1px solid gray;
  border-radius: 4px;
}
button {
  width: 200px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #e0dfdb;
  background-color: white;
  margin-top: 15px;
}
/*.logo {
  margin: 50px;
}
.logo > img {
  width: 187px;
  height: 73px;
}*/
</style>
