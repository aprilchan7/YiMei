<template>
  <div>
    <div class="box">
      <div class="header">
        <h3>修改密码</h3>
        <div class="">
          <form method="post" class="section" action="/updataPass.do">
            <table>
              <tbody>
                <tr>
                  <td>新密码：</td>
                  <td>
                    <input
                      class="Input"
                      type="password"
                      name="changeWord"
                      v-model="changeWord"
                    />
                  </td>
                </tr>
                <tr>
                  <td>确认密码：</td>
                  <td>
                    <input class="Input" type="password" name="changeWord" />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <button class="baoCun" type="button" @click="baoCunXG">
                      保存修改
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { updataPass } from "@/network/person";
export default {
  name: "ChangeWord",
  data() {
    return {
      changeWord: ""
    };
  },
  methods: {
    baoCunXG() {
      let UId = 1;
      let PassWord = this.changeWord;
      // console.log(PassWord)
      // console.log(thdy);
      let data = { PassWord, UId };
      console.log(data);
      updataPass(data)
        .then(res => {
          console.log(res);
          this.$message(res.data.message);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
  //   beforeCreate(){
  //     getUserInfo()
  //       .then(res=>{
  //         this.changeWord =res.data.data;
  //         console.log(1111111);
  //         console.log(this.changeWord)
  //       })
  //       .catch(e => {
  //         console.log(e)
  //        let id= sessionStorage.myUser
  //       })
  //   }
  //
};
</script>

<style scoped>
* {
  font-family: "微软雅黑";
  line-height: 30px;
  font-size: 14px;
  color: #6b6b6b;
}
.box {
  width: 970px;
  /* position: absolute; */
  top: 60px;
  right: 7%;
}
.header {
  position: relative;
  background-color: #efefef;
  margin-bottom: 20px;
  padding: 30px 50px;
}
h3 {
  position: relative;
  top: -10px;
  font-size: 18px;
  color: #6b6b6b;
  text-align: left;
}
table {
  cellpadding: 0;
  cellspacing: 0;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}
tbody {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}
.Input {
  width: 240px;
  padding: 5px 20px;
  border: 1px solid #dedede;
  outline: 0;
  margin: 5px 5px;
}
td {
  display: table-cell;
  vertical-align: inherit;
  padding: 10px 5px 10px 0;
}
.baoCun {
  width: 240px;
  padding: 5px 20px;
  outline: 0;
  margin: 5px 5px;
  line-height: 28px;
  border: 1px solid #da5278;
  color: #da5278;
  text-align: center;
  transition: all 0.3s;
  cursor: pointer;
}
.baoCun:hover {
  color: whitesmoke;
  background-color: #da5278;
  transition: all 0.3s;
}
</style>
