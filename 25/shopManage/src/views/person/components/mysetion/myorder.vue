<template>
  <div>
    <div class="box" v-if="Myorder.length>0">
      <div class="header">

          <img src="../mydd.gif" alt=""  class="tu">


        <div class="text">
          <p class="name">{{Myorder[0][0].NAME}}</p>
          <p>{{Myorder[0][0].userTypeName}}</p>
          <p>累计消费:{{Myorder[0][0].totalMoney}}</p>
        </div>
      </div>
      <div class="season">
        <h3 class="myh3">我的订单</h3>
        <div v-for="(items,indexs) in buttonlist" @click="changeclass(indexs)" :class="{'change':getclass == indexs}" class="daiZhiFu"  v-on:click="getMyOder(indexs-1)">{{ items.select }}</div>
      </div>
      <div class="footer">
        <table class="footerorder">
            <thead>
              <th>订单商品</th>
              <th>收货人</th>
              <th>订单金额</th>
              <th>下单时间</th>
              <th>订单状态</th>
              <th>操作</th>
            </thead>
            <tr v-for="(item, index) in Myorder[2]"
            :key="item.id"
            name="item.id" class="trout">
              <td>
                订单编号：
                <span>{{ item.ordernum }}</span>
              </td>
              <td>{{ item.New_Name }}</td>
              <td>￥{{ item.TotalPrice }}</td>
              <td>{{ item.CreateDate | dateFmt('YYYY-MM-DD HH:mm:ss')}}</td>
              <td v-text="typelist(item.State)"></td>
              <td>  
                  <div v-if="item.State == 0">
                    <el-button  @click="open2(item,index)" type="text" >
                      <div class="mem-btn">
                      确认付款
                      </div>
                    </el-button>
                  </div>
                  <div v-if="item.State == 2">
                    <el-button  @click="open3(item,index)" type="text" >
                      <div class="mem-btn">
                      申请退款
                      </div>
                    </el-button>
                  </div>
                  <div v-if="item.State == 2">
                    <el-button  @click="open5(item,index)" type="text" >
                      <div class="mem-btn">
                      确认收货
                      </div>
                    </el-button>
                  </div>
                  <div v-if="item.State == 5">
                    <el-button type="text" @click="dialogFormVisible = true"  @click.native="getplorder(item)">
                      <div  class="mem-btn">
                        订单评论
                      </div>
                    </el-button>
                  </div>
                  <el-dialog title="订单评价" :visible.sync="dialogFormVisible">
                    <el-form :model="form" :rules="rules2" ref="registerForm">
                      <el-form-item label="请为订单打分" :label-width="formLabelWidth">
                        <el-rate
                          v-model="form.Star"
                          show-text>
                        </el-rate>
                      </el-form-item>
                

                      <el-form-item label="请您评价订单"  prop="Content":label-width="formLabelWidth" 
                      >
                        <el-input v-model="form.Content" type="textarea"
                        :rows="2"
                        placeholder="请输入内容" autocomplete="off"  
                      ></el-input>
                      </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                      <el-button @click="dialogFormVisible = false">取 消</el-button>
                      <el-button type="primary" plain
                    @click=" open4(item,index,form)" @click.native="pinglun(item,index,form)">确 定
                      </el-button>
                    </div>
                  </el-dialog>
                  <div>
                    <el-button type="text" @click="drawer = true"  @click.native="getchakanorder(item)">
                      <div class="mem-btn">
                        查看详情
                      </div>
                    </el-button>
                  </div>
                  <el-drawer
                    size="50%"
                    :visible.sync="drawer"
                    :direction="direction">
                    <h2>查看商品详情</h2>
                    <div class="drawbox"  v-for="(itemp, indexp) in Myorder[1]" 
                    :key="item.id"
                    name="item.id" 
                    v-if="chakanorder == itemp.OrderNum">
                        <div class="draw drawname">
                          {{ itemp.Pro_Name }}
                        </div>
                        <div>
                          <img :src="require(`@/assets/images/${itemp.Pro_Url}`)">
                        </div>
                        <div class="draw">
                          {{ itemp.Num }}件
                        </div>
                        <div class="draw">
                          单价￥{{ itemp.Price }}
                        </div>
                    </div>
                  </el-drawer>
              </td>
            </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import { getMyOder } from '../../../../network/person'
  import { addcomment } from '@/network/addcomment'
  import { updateOrderState } from '@/network/addcomment'

    export default {
        name: "myorder",
       data(){
         return{
          rules2: {
                        Content: [
                          {required: true, message: '请输入评价内容', trigger: 'blur'},
                          {min:1,message:'请输入内容',trigger:'blur'}
                        ]
                      },
          newsList:[],
          getclass: 0,
          active: false,
　　　　　 buttonlist: [
　　　　　  {select:'全部订单'},
　　　　　　{select:'待支付'},
　　　　　　{select:'已取消的订单'},
　　　　　　　   　],
           drawer: false,
           direction: 'rtl',
           Myorder:[],
           orderlist:[],
           chakanorder:'',
           dialogFormVisible: false,
           form: {
            Content: '',
            OrderNum: '',
            Star:4,
          },
        formLabelWidth: '120px'
        }
       },
       computed:{
              typelist() {
          return function(i) {
            let res;
            switch (Number(i)) {
              case 0:
                res = "未付款";
                break;
              case 2:
                res = "已付款";
                break;
              case 3:
                res = "未发货";
                break;
              case 4:
                res = "已发货";
                break;
              case 5:
                res = "已收货";
                break;
              case 12:
                res = "退款完成";
                break;
              default:
                res = "订单有误";
                break;
            }
            return res;
          };
        },
       },
       methods: {
        open1() {
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        });
      },
        changeclass(indexs) {
            this.getclass = indexs
        },
        open2(item,index) {
          let orderNum = item.ordernum
          let state = 2
          let indexa = index
          updateOrderState(orderNum,state)
          this.Myorder.splice(state + 1);
         this.Myorder[2][indexa].State = 2
        this.$message({
          message: '商品已付款成功',
          type: 'success'
        });
      },
        open3(item,index) {
          let orderNum = item.ordernum
          let state = 12
          let indexa = index
          updateOrderState(orderNum,state) 
          this.Myorder[2][indexa].State = 12
        this.$message({
          message: '商品已退款成功',
          type: 'success'
        });
      },
      open4(item,index,form) {
        if (form.Content != '') {
          this.$message({
          message: '评论已提交成功',
          type: 'success'
        });
        this.dialogFormVisible = false;
        } else {
          this.$message.error('请输入有效的评论内容');
        }
      },open5(item,index) {
          let orderNum = item.ordernum
          let state = 5
          let indexa = index
          updateOrderState(orderNum,state) 
          this.Myorder[2][indexa].State = 5
        this.$message({
          message: '商品已成功收货',
          type: 'success'
        });
      },
        getMyOder(state){
          getMyOder(state).then(res => {
            this.Myorder =res.data.data;
            })
        },
        getchakanorder(item){
            this.chakanorder = item.ordernum
        },
        getplorder(item){
          this.form.OrderNum = item.ordernum
        },
        pinglun(item,index,form) {
          console.log(555555555555555555);
            console.log(form);
          if (form.Content != '') {
            let data = form
          addcomment(data).then(res => {
          })
         }
        },
        
      },
       created() {
        this.getMyOder(-1)
      } 
    }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
.active {
  color: red;
}
　 　.unactive {
  color: #000;
}
.box {
  width: 970px;

  /*background-color: #00aaf1;*/
}

.header {
  text-align: left;
  height: 128px;
  position: relative;
  line-height: 128px;
  background-color: #efefef;
  margin-bottom: 20px;
  padding: 30px 50px;
}
.myh3 {
  padding-bottom: 10px;
}
.text {
  display: inline-block;
  width: 170px;
  height: 100px;
  position: absolute;
  top: -20px;
  left: 230px;
}
.tu {
  overflow: hidden;
  display: inline-block;
}
.name {
  color: rgb(107, 107, 107);
  font-size: 25px;
  font-weight: bold;
}
p {
  width: 170px;
  margin-top: 20px;
  height: 10px;
  font-size: 14px;
  color: #da5278;
}
.season {
  width: 920px;
  height: 142px;
  position: relative;
  background-color: #efefef;
  margin-bottom: 20px;
  padding-left: 50px;
  padding-top: 20px;
}
h3 {
  text-align: left;
  color: #6b6b6b;
}
.change {
  width: 120px;
  height: 50px;
  line-height: 50px;
  margin-right: 10px;
  float: left;
  border: 1px solid #fff !important;
  color: #fff !important;
  text-align: center;
  text-decoration: none;
  transition: all 0.4s ease 0s;
  cursor: pointer;
  background: #da5278 !important;
}
.drawname {
  width: 210px;
}
.quanBu {
  width: 120px;
  height: 50px;
  line-height: 50px;
  margin-right: 10px;
  float: left;
  border: 1px solid #fff;
  color: #fff;
  text-align: center;
  text-decoration: none;
  transition: all 0.4s ease 0s;
  cursor: pointer;
  background: #da5278;
}
.daiZhiFu {
  transition: all 0.3s;
  width: 120px;
  height: 50px;
  line-height: 50px;
  margin-right: 10px;
  float: left;
  border: 1px solid #da5278;
  color: #da5278;
  padding: 0px 10px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  background: 0 0;
}
.footer {
  padding-top: 20px;
  /* width: 920px; */
  background-color: #efefef;

  /* padding-left: 50px;
 
  padding-bottom: 20px; */
  /* margin: 0 auto; */
}
table {
  width: 920px;
}
th {
  font-weight: bold;
  font-size: 14px;
  padding-bottom: 10px;
  color: #6b6b6b;
}
.daiZhiFu:hover {
  color: whitesmoke;
  background-color: #da5278;
  transition: all 0.3s;
}
.footerorder {
  /* text-align: center; */
  border-collapse: collapse;
  width: 100%;
}

.footerorder td {
  color: #6b6b6b;
  font-family: "微软雅黑";
  line-height: 30px;
  font-size: 14px;
  height: 20px;
 }
 .footerorder span {
  color: #da5278;
 }
 .mem-btn {
    width: 120px;
    line-height: 28px;
    border: 1px solid #da5278;
    color: #da5278;
    text-align: center;
    text-decoration: none;
    transition: all .4s ease 0s;
    cursor: pointer;
    background: 0 0;
 }
.mem-btn:hover {
  color: aliceblue;
  background-color: #da5278;
}
.trout {
  border-bottom: 2px solid #fff;
}
.el-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    padding: 5px 20px;
    font-size: 14px;
    border-radius: 4px;
}

.drawbox {
  width: 700px;
  height: 120px;
}
.draw {
  float: left;
  padding-top: 50px;
  padding-left: 40px;
  padding-right: 50px;
}
.drawbox img {
  float: left;
  padding-top: 5px;
  height: 100px;
}
</style>
