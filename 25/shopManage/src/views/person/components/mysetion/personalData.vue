<template>
  <div id="personalData">
    <div class="box" v-if="personList.length > 0">
      <div class="header">
        <h3>个人资料</h3>
      </div>
      <div class="xinXi">
        <form action="./updataUserInfo.do" method="post">
          <p class="shuoMin">
            （在这里填写您的个人资料，请详细填写下每一个栏目）<span
              >带*的栏目必须填写</span
            >
          </p>
          <table class="tb">
            <tbody>
              <tr>
                <td class="td1">会员名：</td>
                <td class="td2">
                  <b>{{ personList[0].Account }}</b>
                </td>
              </tr>
              <tr>
                <td class="td1">姓名：</td>
                <td class="td2">
                  <input
                    type="text"
                    class="yourInput"
                    v-model="personList[0].Name"
                  />
                </td>
              </tr>
              <tr>
                <td class="td1">性别：</td>
                <td class="td2">
                  <!--                <input type="radio" :checked="nan"/><span class="font">男</span>-->
                  <!--                <input type="radio" :checked="nv" name="sex"/><span class="font">女</span>-->
                  <el-radio v-model="Sex" label="0">男</el-radio>
                  <el-radio v-model="Sex" label="1">女</el-radio>
                </td>
              </tr>
              <tr>
                <td class="td1">移动电话：</td>
                <td class="td2">
                  <div>
                    <span class="phone">
                      {{ personList[0].Phone }}
                    </span>

                    <span class="clor">已验证</span>
                    <router-link
                      to="/PerCenter/personalData/xiuGai"
                      id="xiuGai"
                      mobile="135*****949"
                      >修改</router-link
                    >
                  </div>
                </td>
              </tr>
              <tr>
                <td class="td1">邮编：</td>
                <td class="td2">
                  <input
                    type="text"
                    class="yourInput"
                    v-model="personList[0].Code"
                    vtype=""
                  />
                </td>
              </tr>
              <tr class="top10px">
                <td class="td1">出生日期：</td>
                <td class="td2">
                  <template>
                    <div class="block">
                      <span class="demonstration"></span>
                      <el-date-picker
                        v-model="personList[0].Birthday"
                        type="date"
                        placeholder="选择日期"
                      >
                      </el-date-picker>
                    </div>
                  </template>
                </td>
              </tr>

              <td colspan="2" class="baoCun">
                <button @click="baoCun" class="btton" type="button">
                  保存
                </button>
              </td>
            </tbody>
          </table>
        </form>
      </div>
    </div>
    <xiuGai class="xiuGai"></xiuGai>
    <div class="zheZao"></div>
  </div>
</template>

<script>
import xiuGai from "./xiuGai";
import { getUserInfo, updataUserInfo } from "../../../../network/person";
export default {
  name: "personalData",
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value1: "",
      value2: "",
      personList: [],
      Sex: "",
      Name: "",
      nan: "",
      nv: ""
      // personList:	[ { "UId": 1, "Account": "admin", "PassWord": "123456", "Name": "张三", "Sex": 1, "Phone": "132454121", "Code": null, "Birthday": null, "CreateTime": "2020-07-14T07:35:07.000Z", "LastLogin": "0000-00-00 00:00:00", "IsMember": null, "S_Mem_Date": "0000-00-00 00:00:00", "E_Mem_Data": "0000-00-00 00:00:00", "Grade": 0, "InvoiceType": 0, "Inv_Content": null, "SumScore": 10 } ],
    };
  },
  components: {
    xiuGai
  },
  methods: {
    baoCun() {
      let Name = this.personList[0].Name;
      let Code = this.personList[0].Code;
      let Sex = this.personList[0].Sex;
      let Birthday = this.personList[0].Birthday;
      // console.log(thdy);
      let data = { Name, Code, Sex, Birthday };
      console.log(data);
      updataUserInfo(data)
        .then(res => {
          console.log(res.data.message);
        })
        .catch(e => {
          console.log(e);
        });

      console.log(Name);
    }
  },
  beforeCreate() {
    getUserInfo()
      .then(res => {
        this.personList = res.data.data;
        console.log(1111111);
        if (this.personList[0].Sex == 0) {
          this.Sex = "0";
        } else {
          this.Sex = "1";
        }
        console.log(this.personList);
        console.log(this.personList[0].Account);
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>

<style scoped>
.box {
  width: 970px;
  height: 496px;
  /* position: absolute; */
  top: 45px;
  right: 7%;
}
.header {
  width: 950px;
  height: 50px;
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
.xinXi {
  border: 1px solid #efefef;
  width: 968px;
  height: 444px;
}
form {
  width: 968px;
  height: 444px;
}
.shuoMin {
  color: #6b6b6b;
  font-size: 12px;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.shuoMin span {
  color: #da5278;
}
.tb {
  width: 100%;
  border-collapse: collapse;
  cellpadding: 0;
  cellspacing: 0;
}
.td1 {
  color: #6b6b6b;
  font-size: 14px;
  text-align: right;
  width: 40%;
}
b {
  font-size: 14px;
  color: #6b6b6b;
  font-weight: bold;
}
/* ::placeholder{

  }*/
.yourInput {
  border: solid 1px #efefef;
  padding: 6px 12px;
  width: 226px;
  height: 34px;
  font-size: 12px;
}
.td2 {
  text-align: left;
}
tr {
  height: 45px;
}
label {
  font-size: 14px;
  color: #6b6b6b;
}
.phone {
  width: 150px;
  display: inline-block;
  color: #6b6b6b;
  font-size: 14px;
}
.clor {
  color: #da5278;
  font-weight: bold;
  font-size: 14px;
}
#xiuGai {
  font-size: 14px;
  margin-left: 5px;
}
.btton {
  width: 142px;
  height: 42px;
  font-size: 18px;
  font-weight: 600;
  display: inline-block;
  line-height: 20px;
  padding: 10px 20px;
  border: 1px solid #da5278;
  -webkit-border-radius: 10px 10px;
  -moz-border-radius: 10px 10px;
  -o-border-radius: 10px 10px;
  border-radius: 10px 10px;
  text-decoration: none;
  background-color: #da5278;
  color: #fff;
  cursor: pointer;
  margin: 5px 5px;
  text-align: center;
}
.baoCun {
  text-align: center;
  position: relative;
  top: 20px;
}
.top10px {
  position: relative;
  top: 30px;
}
.font {
  font-size: 14px;
  color: #6b6b6b;
}
template {
  font-size: 14px;
  color: #6b6b6b;
  font-family: 微软雅黑;
}
.zheZao {
  z-index: 7;
  position: absolute;
  top: 0;
  left: -400px;
  height: 1000px;
  background-color: rgba(0, 0, 0, 0.37);
  width: 2000px;
  transition: all 0.3s;
  display: none;
}
.xiuGai {
  display: none;
}
</style>
