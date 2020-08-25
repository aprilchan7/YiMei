<template>
  <fragment>
    <div class="logo">
      <img src="@/assets/images/logo.png" alt />
    </div>
    <div id="zhuce">
      <div id="zhuceBox">
        <form action="/register.do" method="post">
          <div id="box1">
            <label for>手机号:</label>
            <input @focus="tishi" @blur="xiaoshi" type="text" class="left" v-model="Phone" />
            <span id="tishi">
              请填写正确的手机号，目前仅支持中国
              <br />大陆的手机
            </span>
          </div>
          <div id="box2">
            <label for class="tupian">图片码:</label>
            <input type="text" class="left" />
            <input type="button" value="获取短信码" class="duanxin" />
          </div>
          <div id="duanxinma">
            <span>请先输入图片验证码的计算结果，再点击获取短信码</span>
          </div>

          <div id="box3">
            <label for>短信码:</label>
            <input type="text" class="left" />
          </div>

          <div id="box4">
            <label for>密码:</label>
            <input type="password" class="left myPwd" @input="countNum" v-model="PassWord" />
            <div class="mybei"></div>
            <div class="myPower">
              <div class="myid1">
                <div class="myid2"></div>
              </div>
              <!--              <img src="../../../assets/images/home/dapu_pwd-2.png" alt="">-->
            </div>
          </div>

          <div id="box5">
            <label for>确认密码:</label>
            <input type="text" class="left" />
          </div>

          <div id="box6">
            <input type="checkbox" checked="checked" />
            <span>同意注册协议</span>
            <a href>《大朴用户协议》</a>
          </div>

          <div id="box7">
            <input type="button" value="注册" @click="myregister" />
            <!--          <button type="button" @click="register">注册</button>-->
            <span>我已经注册,现在就</span>
            <router-link to="/denglu">
              <a href>登录</a>
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </fragment>
</template>

<script>
import { register } from '@/network/register'
export default {
  name: 'zhuce',
  data() {
    return {
      theNum: '',
      Phone: '',
      PassWord: ''
    }
  },
  methods: {
    /*判断密码的字符长度函数*/
    countNum() {
      let a = document.getElementsByClassName('myPwd')[0].value
      console.log(a)
      let b = document.getElementsByClassName('myPower')[0]

      console.log(a.length)

      if (a.length < 6) {
        b.style.width = '0px'
      } else if (a.length > 6 && a.length <= 10) {
        b.style.width = '60px'
      } else if (a.length > 10 && a.length <= 13) {
        b.style.width = '120px'
      } else if (a.length > 13) {
        b.style.width = '180px'
      }
    },

    myregister() {
      let Phone = this.Phone
      console.log(typeof Phone)
      let PassWord = this.PassWord
      let data = { Phone, PassWord }
      console.log(data)

      register(data)
        .then(res => {
          // console.log(res.data.message);
          console.log(res)

          // if(Phone!='' && PassWord!=''){
          //   this.$router.push({
          //     path: `/home`,
          //   });
          // }

          /* this.$router.push({
               path: `/home`,
             });*/
          if (!res.data.success) {
            this.$message({
              message: res.data.message,
              type: 'warning'
            })
          } else {
            this.$message('注册成功！请登录！')
            setTimeout(() => {
              this.$router.push({
                path: `denglu`
              })
            })
          }
        })
        .catch(e => {
          console.log(e)
        })
    },

    tishi() {
      document.getElementById('tishi').style.display = 'block'
    },
    xiaoshi() {
      document.getElementById('tishi').style.display = 'none'
    }
  }
}
</script>

<style scoped>
#zhuce {
  width: 1000px;
  height: 410px;
  background: url('../../../assets/images/home/dapu_login.jpg');
  margin: 0 auto;
  position: relative;
}
#zhuceBox {
  width: 520px;
  height: 390px;
  background-color: rgba(246, 248, 249, 0.81);
  position: absolute;
  top: 10px;
  margin-left: 470px;
}
label {
  width: 100px;
  display: inline-block;
  margin-left: -200px;
  text-align: right;
}
form div {
  margin: 0 auto;
}
input {
  width: 160px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid #ccc;
}
.duanxin {
  cursor: pointer;
  width: 70px;
  height: 26px;
  font-size: 12px;
  color: #6b6b6b;
  text-align: center;
  /*font-family: simsun;*/
  border: 0 none;
}
.tupian {
  margin-left: -209px;
}
.tupian + input {
  width: 80px;
  height: 30px;
}
#duanxinma span {
  font-size: 12px;
}
#duanxinma,
#box1,
#box2,
#box3 {
  margin-top: 20px;
}
/*#box1 {
    margin-top: 20px;
  }
  #box2 {
    margin-top: 20px;
  }
  #box3 {
    margin-top: 20px;
  }*/
#box4 {
  margin-top: 20px;
  position: relative;
}
#box4 .mybei {
  position: absolute;
  width: 180px;
  background: url('../../../assets/images/home/dapu_pwd-1.jpg');
  right: 33px;
  top: 50%;
  margin-top: -7px;
  height: 14px;
}
/*#box4 img {
    position: absolute;
    top: 50%;
    margin-top: -7.5px;
    left: 306px;
    width: 60px;
    !*transform: scaleX(1);*!
    height: 15px;
    transition: all 0.5s;
    !*overflow: hidden;*!
  }*/
#box4 .myPower {
  background: url('../../../assets/images/home/dapu_pwd-2.png');
  position: absolute;
  top: 50%;
  margin-top: -7.5px;
  left: 308px;
  width: 0;
  height: 15px;
  overflow: hidden;
  transition: all 2s;
}
#box4 .myid1 {
  position: relative;
}
#box4 .myid2 {
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s;
}
/*#box4 .myPower:hover {
    width: 180px;
  }*/
#box5 {
  margin-top: 20px;
}
#box6 {
  margin-top: 10px;
  font-size: 12px;
  height: 16px;
  line-height: 16px;
}
#box6 input {
  width: 12px;
  height: 12px;
  margin-left: -73px;
  margin-top: 3px;
  vertical-align: center;
}
#box6 a:hover {
  text-decoration: underline;
  color: rgb(127, 91, 66);
  vertical-align: middle;
}
#box7 {
  margin-top: 3px;
}
#box7 input {
  width: 200px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #e0dfdb;
  margin-left: 70px;
  cursor: pointer;
  color: #6b6b6b;
}
#box7 input:hover {
  background-color: rgb(224, 223, 219);
}
#box7 span {
  font-size: 12px;
}
#box7 a {
  font-size: 12px;
  color: red;
}
#box7 a:hover {
  text-decoration: underline;
}
.left {
  margin-left: 20px;
}

#tishi {
  /*background-color: #ffffe6;*/
  color: #f00;
  font-size: 12px;
  display: inline-block;
  padding-left: 50px;
  position: absolute;
  right: -12px;
  top: 0;
  width: 230px;
  overflow: hidden;
  display: none;
}
#box1 {
  position: relative;
  /*height: 50px;*/
}

.logo {
  margin: 50px;
}
.logo > img {
  width: 187px;
  height: 73px;
}
</style>
