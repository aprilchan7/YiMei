<template>
  <div>
    <div class="box" v-if="mation.length>0">
      <div class="box-head">
        <h3 class="title">发票信息（这里可以配置默认的发票信息）</h3>
        <div>
          <h3 class="title2">发票抬头:</h3>
          <div class="taiTou">
            <el-radio v-model="radio" label="0" @change="hide">个人</el-radio>
            <el-radio v-model="radio" label="1" @change="show">单位</el-radio>
            <br />
            <input
              class="danwei"
              v-if="tj"
              type="text"
              maxlength="30"
              v-model="mation[0].Inv_Content"
              placeholder="请输入单位名称"
            />
          </div>
        </div>
        <h3 class="title2">发票内容:</h3>
        <div class="taiTou">
          <el-radio v-model="neiRong" label="0">商品明细（附购物清单）</el-radio>
        </div>
        <div class="taiTou">
          <el-radio v-model="neiRong" label="1">办公礼品</el-radio>
        </div>
        <div class="taiTou">
          <el-radio v-model="neiRong" label="2">礼品</el-radio>
        </div>
        <div class="footer">
          <button class="baoCun" @click="preservation">保存修改</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { updataUserINV, getUserINV } from '@/network/person'
import { getUserInfo } from '@/network/person'

export default {
  name: 'Information',
  data() {
    return {
      radio: '0',
      neiRong: '0',
      tj: false,
      danwei: '',
      mation: []
    }
  },
  methods: {
    show() {
      this.tj = true
      console.log(this.radio)
    },
    hide() {
      this.tj = false
    },
    preservation() {
      let InvoiceType = this.radio
      let Inv_Content = this.mation[0].Inv_Content
      let InvContentTypef = this.neiRong
      let UId = window.pageConfig.userInfo.UId
      console.log(UId)
      let data = { InvoiceType, Inv_Content, InvContentTypef, UId }
      updataUserINV(data)
        .then(res => {
          console.log(res.data.message)
        })
        .catch(e => {
          console.log(e)
        })
    }
  },
  beforeCreate() {
    getUserINV()
      .then(res => {
        this.mation = res.data.data
        console.log(1111111)

        if (this.mation[0].InvoiceType == 0) {
          this.radio = '0'
        } else {
          this.tj = true
          this.radio = '1'
        }
        console.log(this.mation[0].InvContentTypef)
        if (this.mation[0].InvContentTypef == 0) {
          this.neiRong = '0'
        }
        if (this.mation[0].InvContentTypef == 1) {
          this.neiRong = '1'
        }
        if (this.mation[0].InvContentTypef == 2) {
          this.neiRong = '2'
        }
      })
      .catch(e => {
        console.log(e)
      })
  }
}
</script>

<style scoped>
* {
  color: #6b6b6b;
}
.box {
  background-color: rgb(239, 239, 239);
  width: 970px;
  /* position: absolute;
  top: 60px;
  right: 7%; */
}
.box-head {
  width: 870px;

  position: relative;
  background-color: #efefef;
  margin-bottom: 20px;
  padding: 20px 50px;
}
.title {
  text-align: left;
  color: #6b6b6b;
  font-size: 18px;
  padding-bottom: 10px;
}
.title2 {
  text-align: left;
  color: #6b6b6b;
  font-size: 14px;
}
.taiTou {
  padding-left: 50px;
  text-align: left;
}
label {
  margin-left: 5px;
  font-size: 14px;
  line-height: 30px;
}
.left5 {
  margin-left: 5px;
}
.footer {
  height: 40px;
  border-top: 1px solid #808080;
  margin-top: 30px;
  padding-top: 30px;
  text-align: center;
}
.baoCun {
  height: 40px;
  display: inline-block;
  width: 120px;
  line-height: 28px;
  border: 1px solid #da5278;
  color: #da5278;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s;
  cursor: pointer;
}
.baoCun:hover {
  color: whitesmoke;
  background-color: #da5278;
  transition: all 0.3s;
}
.danwei {
  font-size: 14px;
  width: 242px;
  height: 42px;
  padding: 5px 20px;
  border: 1px solid #dedede;
  outline: 0;
  margin: 5px 5px;
}
</style>
