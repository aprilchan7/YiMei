<template>
  <div>
    <div class="logo">
      <img src="@/assets/images/logo.png" alt />
    </div>

    <div id="mylogin">
      <!--      <h1>这是登录页面</h1>-->
      <!--      <router-view>-->

      <div id="loginBox">
        <h3>用户登录</h3>

        <div id="username">
          <label for>用户名:</label>
          <input type="text" v-model="Account" />
        </div>

        <div id="pwd">
          <label for>密码:</label>
          <input type="password" v-model="PassWord" />
        </div>

        <div id="thelogin">
          <!--          <router-link  >-->
          <button type="button" @click="userlogin">登录</button>
          <!--          </router-link>-->

          <router-link to="/forgetPwd">
            <a href class="forgetPwd">忘记密码</a>
          </router-link>
        </div>

        <div class="myShouji">
          <a href class="shouji">手机校验登录</a>
          <span>|</span>
          <router-link to="/zhuce">
            <a href>免费注册</a>
          </router-link>
        </div>
      </div>
      <!--      </router-view>-->
    </div>
  </div>
</template>

<script>
import { login } from '@/network/login'
import { overUserInfo } from '../../../toolkit'
export default {
  name: 'denglu',
  data() {
    return {
      Account: '15328189934',
      PassWord: '1234',
      tiao: ''
    }
  },
  created() {},
  methods: {
    userlogin() {
      let data = { Account: this.Account, PassWord: this.PassWord }
      if (this.Account == '' || this.PassWord == '') {
        this.$message({
          message: '请输入账号密码！',
          type: 'warning'
        })
      } else {
        login(data)
          .then(res => {
            if (res.data.success) {
              this.$message({
                message: '登录成功！',
                type: 'success'
              })
              //console.log(res.data.data)
              overUserInfo(res.data.data)
              // console.log(window.pageConfig.userInfo);
              // console.log(window.session.userInfo);
              setTimeout(() => {
                window.location.href = '/'
              }, 200)
            } else {
              this.$message({
                message: res.data.message,
                type: 'warning'
              })
            }
          })
          .catch(e => {
            console.log(e)
          })
      }
    }
  }
}
</script>

<style scoped>
#mylogin {
  width: 1000px;
  height: 410px;
  background: url('../../../assets/images/home/dapu_login.jpg');
  margin: 0 auto;
  position: relative;
}
#loginBox {
  width: 520px;
  height: 390px;
  background-color: rgba(246, 248, 249, 0.81);
  position: absolute;
  top: 10px;
  margin-left: 470px;
}
h3 {
  border-bottom: 1px solid #877b74;
  color: #877b74;
  font-family: '微软雅黑';
  font-size: 24.5px;
  padding-bottom: 10px;
  width: 500px;
  margin: 20px auto;
}
#mylogin input {
  width: 160px;
  /*display: inline;*/
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  border-radius: 4px;
  height: 30px;
}
label {
  width: 160px;
  display: inline-block;
  text-align: right;
  padding-right: 40px;
  margin-left: -137px;
}
#username {
  margin-top: 40px;
}
#pwd {
  margin-top: 20px;
}
#thelogin {
  margin-top: 15px;
}
#thelogin button {
  width: 54px;
  height: 30px;
  cursor: pointer;
  background-color: #49afcd;
  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
  border: none;
  color: white;
  border-radius: 3px;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  margin-left: 30px;
}
.forgetPwd {
  color: #49afcd;
  margin-left: 5px;
}
.shouji {
  margin-left: 57px;
}
.myShouji span {
  margin-left: 5px;
  margin-right: 5px;
}
#mylogin a {
  color: #49afcd;
  font-size: 14px;
}
#mylogin a:hover {
  text-decoration: underline;
}
.logo {
  margin: 50px;
}
.logo > img {
  width: 187px;
  height: 73px;
}
</style>
