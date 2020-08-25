<template>
  <div class="bigbox">
    <div class="box">
      <div class="header">
        <h3>我的消息</h3>
        <p>这里会发布一些通知，包括优惠券，积分等变动提醒等。如果有是什么宝贵意见也可以在这里提交给我们。</p>
      </div>
      <div class="setion">
        <div
          class="xiaoXi"
          v-for="item in myNewMessage"
          :key="item.Message_Id"
          style="margin-top:20px"
        >
          <p class="p1">{{ item.Message_Type }}</p>
          <p class="p2">{{ item.Message_Text }}</p>
          <i @click="delmessage(item.Message_Id)">删除</i>
          <p
            style="text-align: center;margin-top:-5px;"
          >{{ item.Message_Time | dateFmt("YYYY-MM-DD HH:mm:ss") }}</p>
        </div>
        <!-- 分页 paging -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          layout="total, prev, pager, next"
          background
          :total="total"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getMymessage } from '@/network/person'
import { getDleMessage } from '@/network/person'
export default {
  name: 'MyMessage',
  data() {
    return {
      myNewMessage: [],
      delOldMessage: [],
      total: 0,
      pageSize: 2,
      listLoading: false,
      currentPage: 1
    }
  },
  created() {
    this.getMymessage()
  },
  methods: {
    handleSizeChange: function(size) {
      this.pageSize = size
      //  console.log(this.pageSize) //每页下拉显示数据
      this.getMymessage()
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage
      //  console.log(this.currentPage) //点击第几页
      this.getMymessage()
    },
    getMymessage() {
      //console.log(this.currentPage, this.pageSize)
      getMymessage(this.currentPage, this.pageSize).then(res => {
        //   console.log(res.data)
        this.myNewMessage = res.data.data
        this.total = res.data.total
        console.log(res)
        for (let i = 0; i < this.myNewMessage.length; i++) {
          if (this.myNewMessage[i].Message_Type == 0) {
            this.myNewMessage[i].Message_Type = '活动通知'
          } else if (this.myNewMessage[i].Message_Type == 1) {
            this.myNewMessage[i].Message_Type = '优惠券变动通知'
          } else if (this.myNewMessage[i].Message_Type == 2) {
            this.myNewMessage[i].Message_Type = '积分变动通知'
          }
          console.log(this.myNewMessage[i].Message_Type)
        }
      })
    },
    delmessage(Message_Id) {
      getDleMessage(Message_Id).then(res => {
        if (res.data.success) {
          this.$message('删除成功')
          this.getMymessage()
          // this.$router.push("/MyMessageome")
        } else {
        }
      })

      // this.myNewMessage.map((item,index)=>{
      //   if(item.Message_Id==Message_Id){
      //     this.myNewMessage.splice(index,1);
      //   }
      // })
      // console.log(Message_Id)
    },
    mytype2() {
      console.log(this.myNewMessage)
      this.myNewMessage.map((item, index) => {
        if (item.Message_Type == 0) {
          return (this.mytype = '活动通知')
        }
        if (item.Message_Type == 1) {
          return (this.mytype = '优惠券通知')
        }
        if (item.Message_Type == 2) {
          return (this.mytype = '积分通知')
        }
      })
      console.log(this.mytype)
    }
  },

  computed: {
    ...mapGetters(['mymessage'])
  }
}
</script>

<style scoped>
* {
  font-size: 14px;
  color: #6b6b6b;
}
.bigbox {
  height: auto;
  margin-bottom: 30px;
}
.box {
  width: 970px;
  height: auto;

  margin: 20px 0;
}
.header {
  background-color: #efefef;
  margin-bottom: 20px;
  padding: 30px 50px;
}
h3 {
  top: -10px;
  font-size: 18px;
  color: #6b6b6b;
  text-align: left;
}
p {
  text-align: left;
}
.setion {
  background-color: #efefef;
  margin-bottom: 20px;
  padding: 30px 50px;
  height: auto;
  z-index: 1;
}
.xiaoXi {
  background: #fff;
  padding: 10px 20px;
}
.p2 {
  padding-right: 50px;
}
i {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: inline-block;
  margin-left: 700px;
  margin-top: -65px;
  border: 1px solid #da5278;
  color: #da5278;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
}
</style>
