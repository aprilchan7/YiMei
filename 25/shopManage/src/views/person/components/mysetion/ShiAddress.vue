<template>
  <div>
    <div class="box">
      <div class="header">
        <h3>收货地址</h3>
      </div>
      <div class="chuangJian">
        <table>
          <tbody class="body1">
            <tr>
              <td id="add" class="td">
                <input type="button" @click="chuangjian" class="Inputbut pointer" value="创建新地址" />
              </td>
              <td class="td2">
                物流配送网络覆盖全国，异地购物，全国配送，方便快捷，送装及时。
                <br />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="content" v-if="adds">暂无收货地址</div>

      <form action="/addMyAddress.do" v-if="cj" method="post">
        <div class="sesion">
          <table>
            <tbody>
              <tr>
                <td class="td1">收货人姓名：</td>
                <td class="td2">
                  <input v-model="S_Name" class="Input" type="text" @blur="search2" />
                  <span v-if="yz1">姓名不能为空</span>
                </td>
              </tr>

              <tr>
                <td class="td1">省份：</td>
                <td class="td2">
                  <div class="city-box">
                    <div style="overflow: hidden">
                      <div class="select-l g-f-l">
                        <select
                          v-model="selected"
                          v-if="provinceL"
                          class="select-box t-city"
                          @change="show"
                        >
                          <option value label>请选择省</option>
                          <option v-for="(item,index) in provinceL" :value="item">{{ item.name }}</option>
                        </select>
                      </div>
                      <div class="select-l g-f-l g-ml-5">
                        <select
                          v-model="citySelected"
                          v-if="cityL"
                          class="select-box t-city"
                          v-show="se1"
                          @change="show2"
                        >
                          <option value>请选择市</option>
                          <option v-for="(item,index) in cityL" :value="item">{{ item.name }}</option>
                        </select>
                      </div>
                      <div class="select-l g-f-l g-ml-5">
                        <select
                          v-model="areaSelected"
                          v-if="areaL"
                          class="select-box t-city"
                          v-show="se2"
                        >
                          <option value>请选择区县</option>
                          <option v-for="(item,index) in areaL" :value="item">{{ item.name }}</option>
                        </select>
                      </div>
                      <div v-show="notice.province">请选择{{ provinceMsg }}</div>
                    </div>
                    <!--                   <a href="javascript:;" @click="submitCity()">提交</a>-->
                    <span v-if="yz2">省份不能为空</span>
                    <span v-if="yz7">市不能为空</span>
                    <span v-if="yz8">县份不能为空</span>
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
                    rows="2"
                    cols="30"
                  ></textarea>
                  <span v-if="yz3">地址不能为空</span>
                </td>
              </tr>
              <tr>
                <td class="td1">手机号码：</td>
                <td class="td2">
                  <input
                    autocomplete="off"
                    class="Input"
                    v-model="Phone"
                    @blur="search"
                    type="text"
                  />
                  <span v-if="yz4">手机号码不能为空</span>
                </td>
              </tr>
              <tr>
                <td class="td1">固定电话：</td>
                <td class="td2">
                  <input autocomplete="off" class="Input" v-model="Tel"  type="text" />
                  <span v-if="yz5">固定电话不能为空</span>
                </td>
              </tr>
              <tr>
                <td class="td1">邮政编码：</td>
                <td class="td2">
                  <input
                    autocomplete="off"
                    class="Input"
                    v-model="Mail"
                    type="text"
                  />
                  <span v-if="yz6">邮政编码不能为空</span>
                </td>
              </tr>
              <td class="td1"></td>
              <td class="td2">
                <!--                  <button class="queDing" @click="chuangjianQD" type="button">确定</button>-->
                <el-button :plain="true" @click="chuangjianQD" class="queDing" type="button">确定</el-button>
              </td>
              <tr></tr>
            </tbody>
          </table>
        </div>
      </form>
     <div class="forBOx">
       <div class="SHXX2" v-for="(item,index) in huoQu" v-if="huoQu.length>0">
         <table class="TableBoderNone">
           <tbody>
           <tr>
             <td class="td1">收货人姓名：</td>
             <td colspan="4" class="td2">{{item.S_Name}}</td>
           </tr>
           <tr>
             <td align="right">手机号码：</td>
             <td colspan="4" align="left">{{item.Phone}}</td>
           </tr>
           <tr>
             <td align="right">固定电话：</td>
             <td colspan="4" align="left">{{item.Tel}}</td>
           </tr>
           <tr>
             <td align="right">邮政编码：</td>
             <td colspan="4" align="left">{{item.Mail}}</td>
           </tr>
           <tr>
             <td height="64" align="right" valign="top">地区：</td>
             <td colspan="4" align="left">{{item.Province}}-{{item.City}}-{{item.Area}}</td>
           </tr>
           <tr>
             <td height="64" align="right" valign="top">地址：</td>
             <td colspan="4" align="left">{{item.Address}}</td>
           </tr>
           <tr class="Bg" style="background:#dedede;">
             <td colspan="3" align="left">
               <a href="#" rel="_request" v-if="item.Is_True==1">
                 <!--                <input type="radio" name="radiobutton" value="radiobutton" class="Radio" checked="checked">-->
                 <el-radio v-model="radio" @change="moren(item)" label="1">默认</el-radio>
               </a>
               <a href v-else-if="item.Is_True==0">
                 <el-radio v-model="radio" @change="moren(item)" label="0">默认</el-radio>
               </a>

               <!--                默认-->
             </td>
             <td align="left">
               <router-link
                 :to="{path:'/PerCenter/ChangeAdd',query: {name: huoQu[index].Id,Phone:huoQu[index].Phone,S_Name:huoQu[index].S_Name,
              Tel: huoQu[index].Tel,Mail: huoQu[index].Mail,PCA:{Province:huoQu[index].Province,City:huoQu[index].City,Area:huoQu[index].Area},Address:huoQu[index].Address,
              Is_True:huoQu[index].Is_True}}"
                 class="cYellow"
               >修改</router-link>
             </td>
             <!--              "/PerCenter/ChangeAdd"-->
             <td align="left">
               <div class="cYellow">
                 <el-button type="text" @click="del(huoQu[index].Id)">
                   <span class="color">删除</span>
                 </el-button>
               </div>
             </td>
           </tr>
           </tbody>
         </table>
       </div>
     </div>
    </div>
  </div>
</template>

<script>
import { province, city, area } from '../../../../network/vue-area.js'
import {
  addMyAddress,
  getMyAddress,
  delMyAddress,
  updateMyAddress
} from '../../../../network/person'
export default {
  name: 'ShiAddress',
  data() {
    return {
      yz1: false,
      yz2: false,
      yz3: false,
      yz4: false,
      yz5: false,
      yz6: false,
      yz7: false,
      yz8: false,
      cj: false,
      se1: false,
      se2: false,
      adds: true,
      ws: [],
      counter: [],
      huoQu: [],
      errorList: [],
      radio: '1',
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
      notice: {
        province: false
      }
    }
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
    search() {
      if (/^1(3|5|7|8|9)\d{9}$/.test(this.Phone)) {
      } else {
        this.$message({
          type: 'error',
          message: '请输入正确的手机号!'
        })
      }
    },
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
    search3() {
      if (this.Address.length > 6) {
      } else {
        this.$message({
          type: 'error',
          message: '请输入正确的地址!'
        })
      }
    },

    del(id) {
      let Id = id
      let data = { Id }
      console.log(data)
      delMyAddress(data)
        .then(res => {
          console.log(res.data.message)
        })
        .catch(e => {
          console.log(e)
        })

      this.$confirm('此操作将永久删除该地址, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          getMyAddress()
            .then(res => {
              this.huoQu = res.data.data
              console.log(this.huoQu)
              if (this.huoQu.length != 0) {
                this.adds = false
              } else {
                this.adds = true
              }
            })
            .catch(e => {
              console.log(e)
            })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },

    moren(item) {
      console.log(item)
      this.radio = 1
      let Is_True = 1
      let S_Name = item.S_Name // S_Name,  --收货人
      let Province = item.Province // Province, --省份
      let City = item.City // City, --城市
      let Area = item.Area // AREA, --区域
      let Address = item.Address // Address, --地址
      let Mail = item.Mail // Mail, --邮编
      let Phone = item.Phone // Phone,--电话
      let Tel = item.Tel // Tel, --手机
      let Id = item.Id
      console.log(Tel)
      let data = {
        Is_True,
        S_Name,
        Province,
        City,
        Area,
        Address,
        Mail,
        Phone,
        Tel,
        Id
      }
      updateMyAddress(data)
        .then(res => {
          console.log(res.data.message)
          console.log(1111111)
        })
        .catch(e => {
          console.log(e)
        })
      this.$router.go(0)

      // getMyAddress()
      //   .then(res=>{
      //     this.huoQu =res.data.data;
      //     this.ws.push(this.huoQu)
      //     console.log(this.huoQu);
      //     console.log(this.ws)
      //   })
      //   .catch(e => {
      //     console.log(e)
      //   })
      // this.huoQu=1
    },

    show() {
      this.se1 = true
    },
    show2() {
      this.se2 = true
    },
    chuangjian() {
      // this.document.getElementById(cj).style.display="block"
      this.cj = true
    },

    chuangjianQD() {
      // this.cj=false;
      this.counter.push({})
      let S_Name = this.S_Name // S_Name,  --收货人
      let Province = this.selected.name // Province, --省份
      console.log(typeof Province)
      let City = this.citySelected.name // City, --城市
      let Area = this.areaSelected.name // AREA, --区域
      let Address = this.Address // Address, --地址
      let Mail = this.Mail // Mail, --邮编
      let Phone = this.Phone // Phone,--电话
      let Tel = this.Tel // Tel, --手机
      let Is_True = 0 // Is_True--是否是默认地址

      if (this.huoQu.length == 0) {
        Is_True = 1
      }
      let data = {
        S_Name,
        Province,
        City,
        Area,
        Address,
        Mail,
        Phone,
        Tel,
        Is_True
      }

      // if (this.Phone == '') {
      //   this.errorList.push('请输入电话');
      // } else {
      //   if (this.Phone.length < 6) {
      //     this.errorList.push('电话长度不得少于6位');
      //   }
      // }
      if (S_Name == '') {
        this.yz1 = true
        this.cj = true
      } if (Address == '') {
        this.yz3 = true
        this.cj = true
      } if (Phone == '') {
        this.yz4 = true
        this.cj = true
      } if (Tel == '') {
        this.yz5 = true
        this.cj = true
      }
      if (Mail == '') {
        this.yz6 = true
        this.cj = true
      }
        // else if (this.selected==""){
      //   this.yz7=true;
      //   this.cj=true
      // }
      // else if (this.citySelected==""){
      //   this.yz2=true;
      //   this.cj=true
      // }else if (this.areaSelected==""){
      //   this.yz8=true;
      //   this.cj=true
      // }
      else {
        this.cj = false
        addMyAddress(data)
          .then(res => {
            console.log(res.data.message)
          })
          .catch(e => {
            console.log(e)
          })
        this.$router.go(0)
        this.$message({
          message: '添加成功',
          type: 'success'
        })
        getMyAddress().then(res => {
          this.huoQu = res.data.data
          console.log(this.huoQu)
        })
        this.adds = false
      }

      console.log(data)
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
  beforeCreate() {
    getMyAddress()
      .then(res => {
        this.huoQu = res.data.data
        console.log(this.huoQu)
        if (this.huoQu.length != 0) {
          this.adds = false
        } else {
          this.adds = true
        }
      })
      .catch(e => {
        console.log(e)
      })
  }
}
</script>

<style scoped>
.box {
  background-color: rgb(239, 239, 239);
  width: 970px;
}
.header {
  border-radius: 2px;
  width: 950px;
  height: 50px;
  position: relative;
  top: -15px;
  padding-left: 20px;
  background-color: rgb(222, 222, 222);
}
h3 {
  position: relative;
  top: 15px;
  font-size: 16px;
  color: #6b6b6b;
  text-align: left;
}
.chuangJian {
  top: -15px;
  text-align: left;
  padding: 10px 10px;
  line-height: 24px;
  position: relative;
  padding-bottom: 20px;
}
table {
  cellspacing: 0;
  cellpadding: 0;
  width: 100%;
  text-align: center;
}
.body1 {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}
.td {
  width: 20%;
  text-align: center;
  height: 20px;
  vertical-align: middle;
  border: none;
  padding: 3px;
}
.Inputbut {
  position: relative;
  border-radius: 4px;
  width: 92px;
  height: 29px;
  border: solid 1px #c1c1c1;
  background-color: rgb(249, 249, 249);
  color: #615146;
  font-size: 12px;
}
.td2 {
  font-size: 14px;
  color: #615146;
  text-align: left;
}
.sesion {
  width: 936px;
  height: 250px;
  border: none;
  margin: 0 auto;
  border-bottom: 1px dashed #ddd;
  background: #fff;
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
.content {
  font-size: 12px;
  text-align: left;
  padding: 10px 10px;
  line-height: 24px;
  position: relative;
  padding-bottom: 20px;
}
.SHXX {
  text-align: left;
  padding: 10px 10px;
  line-height: 24px;
  position: relative;
  padding-bottom: 20px;
}
.SHXX2 {
  float: left;
  width: 90%;
  margin: 10px 10px;
  padding: 5px;
  border-radius: 8px 8px 8px 8px;
  background-color: rgb(239,239,239);
  border: 1px solid #dedede;
}
.td1 {
  width: 22%;
  text-align: right;
}
.td2 {
  text-align: left;
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
.color {
  color: #6b6b6b;
}
span {
  color: red;
}
  .forBOx{
    width: 970px;
    background-color: rgb(239,239,239);
  }
</style>
