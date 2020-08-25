<template>
  <div>
    <div class="box">
      <div class="BdTop">
        <span class="title">修改收货地址</span>
      </div>
      <form action>
        <div class="sesion">
          <table>
            <tr>
              <td class="td1">默认收货地址：</td>
              <td class="td2">
                <el-radio v-model="radio" label="0">否</el-radio>
                <el-radio v-model="radio" label="1">是</el-radio>
              </td>
            </tr>
            <tbody>
              <tr>
                <td class="td1">姓名：</td>
                <td class="td2">
                  <input
                    v-model="S_Name"
                    class="Input"
                    @blur="search2"
                    name="name"
                    v-if
                    type="text"
                  />
                  <span v-if="yz1">姓名不能为空</span>
                </td>
              </tr>
              <tr>
                <td class="td1">电话：</td>
                <td class="td2">
                  <input v-model="Tel" class="Input" name="name" @blur="search" type="text" />
                  <span class="infotips">其中联系电话和联系手机必须填写一项</span>
                  <span v-if="yz5">固定电话不能为空</span>
                </td>
              </tr>
              <tr>
                <td class="td1">手机：</td>
                <td class="td2">
                  <input v-model="Phone" class="Input" name="name" @blur="search" type="text" />
                  <span v-if="yz4">手机号码不能为空</span>
                </td>
              </tr>
              <tr>
                <td class="td1">地区：</td>
                <td class="td2">
                  <div class="city-box">
                    <div style="overflow: hidden">
                      <div class="select-l g-f-l">
                        <select v-model="selected" v-if="provinceL" class="select-box t-city">
                          <!--                          <option value="" label="" >请选择省</option>-->
                          <option value label>{{myPCA[0].Province}}</option>
                          <option v-for="(item,index) in provinceL" :value="item">{{ item.name }}</option>
                        </select>
                      </div>
                      <div class="select-l g-f-l g-ml-5">
                        <select v-model="citySelected" v-if="cityL" class="select-box t-city">
                          <!--                          <option value="">请选择市</option>-->
                          <option value>{{myPCA[0].City}}</option>
                          <option v-for="(item,index) in cityL" :value="item">{{ item.name }}</option>
                        </select>
                      </div>
                      <div class="select-l g-f-l g-ml-5">
                        <select v-model="areaSelected" v-if="areaL" class="select-box t-city">
                          <!--                          <option value="">请选择区县</option>-->
                          <option value>{{myPCA[0].Area}}</option>
                          <option v-for="(item,index) in areaL" :value="item">{{ item.name }}</option>
                        </select>
                      </div>
                      <div v-show="notice.province">请选择{{ provinceMsg }}</div>
                    </div>
                    <!--                   <a href="javascript:;" @click="submitCity()">提交</a>-->
                  </div>
                </td>
              </tr>
              <tr>
                <td class="td1">地址：</td>
                <td class="td2">
                  <textarea
                    class="dizhi"
                    type="textarea"
                    v-model="Address"
                    @blur="search3"
                    name="addr"
                    rows="2"
                    cols="30"
                  ></textarea>
                </td>
                <span v-if="yz3">地址不能为空</span>
              </tr>
              <tr>
                <td class="td1">邮政编码：</td>
                <td class="td2">
                  <input v-model="Mail" class="Input" name="name"  type="text" />
                  <span v-if="yz4">邮政编码不能为空</span>
                </td>
              </tr>
              <td class="td1"></td>
              <td class="td2">
                <!--                <button class="queDing" type="button" @click="xiuGai">确定</button>-->
                <el-button :plain="true" @click="xiuGai" class="queDing">确定</el-button>
                <el-button :plain="true" @click="quxiao" class="quxiao">取消</el-button>
                <!--                <button class="quxiao" @click="quxiao" type="button">取消</button>-->
              </td>
              <tr></tr>
            </tbody>
          </table>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { province, city, area } from '../../../../network/vue-area.js'
import { updateMyAddress } from '../../../../network/person'
export default {
  name: 'ChangeAdd',
  data() {
    return {
      yz1: false,
      yz3: false,
      yz4: false,
      yz5: false,
      yz6: false,
      ID: '',
      se1: false,
      se2: false,
      radio: '',
      neiRong: '1',
      selected: '',
      citySelected: '',
      areaSelected: '',
      S_Name: '',
      Address: '',
      Mail: '',
      Phone: '',
      Tel: '',
      Is_True: '',
      provinceL: [],
      cityL: [],
      areaL: [],
      selectedData: '',
      citySelectedData: '',
      areaSelectedData: '',
      provinceMsg: '',
      myPCA: [],
      notice: {
        province: false
      }
    }
  },
  created() {
    console.log(this.$route.query.name)
  },
  mounted() {
    this.provinceL = [...province] /*取出省市数据*/
    // this.cityList = [...city]
  },
  watch: {
    selected: function() {
      // 清除区县
      this.citySelected = {}
      this.cityL = city.filter(item => item.parentId == this.selected.code)
      for (const i in this.cityL) {
        if (
          this.cityL[i].code == this.citySelectedData &&
          this.cityL[i].parentId == this.selected.code
        ) {
          this.citySelected = this.cityL[i]
        }
      }
    },
    citySelected: function() {
      this.areaSelected = {}
      if (this.citySelected) {
        this.areaL = area.filter(
          item => item.parentId === this.citySelected.code
        )
      }
      for (const i in this.areaL) {
        if (
          this.areaL[i].code == this.areaSelectedData &&
          this.areaL[i].parentId == this.citySelected.code
        ) {
          this.areaSelected = this.areaL[i]
        }
      }
    }
  },
  methods: {
    search2() {
      if (
        /^((?![\u3000-\u303F])[\u2E80-\uFE4F]|\·)*(?![\u3000-\u303F])[\u2E80-\uFE4F](\·)*$/.test(
          this.S_Name
        )
      ) {
      } else {
        this.$message({
          type: 'error',
          message: '请输入真实的姓名!'
        })
      }
    },
    search() {
      if (/^1(3|5|7|8|9)\d{9}$/.test(this.Phone)) {
      } else {
        this.$message({
          type: 'error',
          message: '请输入正确的手机号!'
        })
      }
    },
    search3() {
      if (this.Address.length > 6) {
      } else {
        this.$message({
          type: 'error',
          message: '请输入正确的地址!'
        })
      }
    },

    quxiao() {
      this.$router.go(-1)
    },
    show() {
      this.se1 = true
    },
    show2() {
      this.se2 = true
    },
    xiuGai() {
      let S_Name = this.S_Name // S_Name,  --收货人
      let Province = this.selected.name // Province, --省份
      console.log(typeof Province)
      let City = this.citySelected.name // City, --城市
      let Area = this.areaSelected.name // AREA, --区域
      let Address = this.Address // Address, --地址
      let Mail = this.Mail // Mail, --邮编
      let Phone = this.Phone // Phone,--电话
      let Tel = this.Tel // Tel, --手机
      let Is_True = this.radio // Is_True--是否是默认地址
      let Id = this.$route.query.name
      console.log(Id)

      let data = {
        S_Name,
        Province,
        City,
        Area,
        Address,
        Mail,
        Phone,
        Tel,
        Is_True,
        Id
      }
      console.log(data)

      if (S_Name == '') {
        this.yz1 = true;
        this.cj = true
      } if (Address == '') {
        this.yz3 = true;
        this.cj = true
      } if (Phone == '') {
        this.yz4 = true;
        this.cj = true
      } if (Tel == '') {
        this.yz5 = true;
        this.cj = true
      }
      if (Mail == '') {
        this.yz6 = true;
        this.cj = true
      }else {
        if (City === undefined || Province === undefined || Area === undefined) {
          Province = this.myPCA[0].Province
          City = this.myPCA[0].City
          Area = this.myPCA[0].Area
        }
        updateMyAddress(data)
          .then(res => {
            console.log(res.data.message)
          })
          .catch(e => {
            console.log(e)
          })
        this.$router.go(-1)
        this.$message({
          message: '修改成功',
          type: 'success'
        })
      }
    },
    /*从后台获取用户提交的省市区信息*/
    getCity(addr) {
      this.citySelectedData = addr.City
      this.areaSelectedData = addr.County
      for (const i in this.provinceL) {
        if (Number(addr.Province) == this.provinceL[i].code) {
          this.selectedData = this.provinceL[i].name
          this.selected = this.provinceL[i]
        }
      }
    },
    submitCity() {
      /*市默认显示第一个时*/
      /*if (this.province == ''){
            alert("请选择地址")
            return
          }*/
      /*没有默认选择时*/
      if (this.selected == '') {
        this.notice.province = true
        this.provinceMsg = '省'
        return
      } else {
        this.notice.province = false
      }
      if (this.citySelected == undefined) {
        this.notice.province = true
        this.provinceMsg = '市'
        return
      } else {
        this.notice.province = false
      }
      if (this.areaSelected == undefined) {
        this.notice.province = true
        this.provinceMsg = '区县'
        return
      } else {
        this.notice.province = false
      }
      console.log('提交成功')
    }
  },
  created() {
    console.log(this.$route.query.PCA)
    let PCA = this.$route.query.PCA
    this.myPCA.push(PCA)
    console.log(this.myPCA)
    let Id = this.$route.query.name
    let S_Name = this.$route.query.S_Name
    let Province = this.$route.query.Province
    let City = this.$route.query.City
    let Area = this.$route.query.Area
    let Address = this.$route.query.Address
    let Phone = this.$route.query.Phone
    let Mail = this.$route.query.Mail
    let Tel = this.$route.query.Tel
    let Is_True = this.$route.query.Is_True
    this.radio = Is_True
    console.log(Is_True)
    this.S_Name = S_Name
    if (Is_True == 1) {
      this.radio = '1'
    } else {
      this.radio = '0'
    }
    //  this.selected=Province
    //  console.log(this.selected)
    //  this.citySelected=City
    // console.log( this.citySelected)
    //  this.areaSelected=Area
    // console.log(this.areaSelected)
    this.Address = Address
    this.Phone = Phone
    this.Tel = Tel
    this.Mail = Mail
  }
}
</script>

<style scoped>
* {
  font-size: 14px;
  color: #6b6b6b;
}
.box {
  width: 770px;
}
.BdTop {
  width: 758px;
  height: 29px;
  padding-left: 10px;
  background: #eee;
  border: 1px solid #dad9d8;
  color: #6b6b6b;
  font-size: 14px;
  font-weight: 700;
  line-height: 29px;
  text-align: left;
}

table {
  cellspacing: 0;
  cellpadding: 0;
  width: 100%;
  text-align: center;
}

.td2 {
  color: #0f0f0f;
  font-size: 14px;
  color: #615146;
  text-align: left;
}
.sesion {
  width: 756px;
  height: 290px;
  border: none;
  margin: 0 auto;
  border-bottom: 1px dashed #ddd;
  background: #fcfbfb;
  padding: 7px;
  margin-bottom: 7px;
}
tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
td {
  height: 30px;
  line-height: 22px;
}
* {
  font-size: 14px;
  color: #6b6b6b;
}
.td1 {
  color: #0f0f0f;
  text-align: right;
  width: 145px;
  height: 30px;
}
.Input {
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2) inset;
  width: 206px;
  height: 25px;
  border: 1px solid #ccc;
  padding: 3px 5px;
}
option {
  font-weight: normal;
  display: block;
  white-space: pre;
  min-height: 1.2em;
  padding: 0px 2px 1px;
}
select {
  border-radius: 3px;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  -webkit-appearance: menulist;
  box-sizing: border-box;
  align-items: center;
  white-space: pre;
  -webkit-rtl-ordering: logical;
  cursor: default;
  margin: 0em;
  border-radius: 0px;
  border-width: 1px;
  border-style: solid;
  color: #0f0f0f;
  border-image: initial;
}
.dizhi {
  text-align: left;
  width: 229px;
  height: 32px;
}
.queDing {
  position: relative;
  border-radius: 4px;
  width: 92px;
  height: 29px;
  line-height: 5px;
  border: solid 1px #c1c1c1;
  background-color: rgb(249, 249, 249);
  color: #615146;
  font-size: 12px;
}
.quxiao {
  position: relative;
  border-radius: 4px;
  width: 92px;
  height: 29px;
  line-height: 5px;
  border: solid 1px #c1c1c1;
  background-color: rgb(249, 249, 249);
  color: #615146;
  font-size: 12px;
  margin-left: 10px;
}
.g-f-l {
  float: left;
}
.g-ml-5 {
  margin-left: 5px;
}
.city-box {
  width: 400px;
}
.cYellow {
  cursor: pointer;
}
.select-box {
  width: 100px;
  height: 22px;
}
span {
  color: red;
}
.infotips {
  color: #6b6b6b;
}
  .title{
    color: #6b6b6b;
  }
</style>
