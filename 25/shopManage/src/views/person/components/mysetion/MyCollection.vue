<template>
  <div>
    <div class="box">
      <div class="header">
        <h3>我的收藏</h3>
        <el-table
          :data="showCartList"
          style="width: 100%"
          empty-text="您的收藏空空如也......."
        >
          <el-table-column prop="PId" label="商品ID" align="center">
          </el-table-column>

          <el-table-column
            prop="Pro_Url"
            label="商品图片"
            width="180"
            align="center"
          >
            <template slot-scope="scope">
              <img
                :src="require(`../../../../assets/images/${scope.row.Pro_Url}`)"
                alt=""
                width="40"
                height="40"
                class="head_pic"
              />
            </template>
          </el-table-column>
          <el-table-column prop="Pro_Name" label="商品名称" align="center">
          </el-table-column>
          <el-table-column prop="Price" label="价格" width="180" align="center">
          </el-table-column>
          <!--<el-table-column
            prop="num"
            label="数量"
            width="180"
            align="center">
            &lt;!&ndash;计数器&ndash;&gt;
            <template slot-scope="scope">
              <el-input-number v-model="scope.row.num"  :min="1" :max="10" label="描述文字"></el-input-number>
            </template>
          </el-table-column>-->
          <el-table-column label="操作" width="180" align="center">
            <template slot-scope="scope">
              <el-button
                @click="deleteCollect(scope.row)"
                type="text"
                size="small"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { showCollect, CollectProSrc } from "@/network/showCollect";

// <<<<<<< HEAD
// import  {showCollect,CollectProSrc} from '@/network/showCollect'
// =======
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MyCollection",
  data() {
    return {
      showList: []
    };
  },
  created() {
    console.log("开始收藏");
    this.$store.dispatch("showPro");
    console.log(this.$store.state.collectPro.collectProList);
    this.showList = this.$store.state.collectPro.collectProList;
// >>>>>>> ce0be906b1a8f055681981ff87dc7837ef321140

    /*let UId=window.pageConfig.userInfo.UId;
      let mypid;//图片ID

      showCollect(UId)
        .then(rep=> {
          console.log(rep.data);
          mypid = rep.data.data;
          console.log("mypid的长度是" + mypid.length);
          console.log(mypid);

          let mm = mypid.forEach(item => {
            console.log(item);
            CollectProSrc(item.PId)
              .then(rep => {
                console.log(rep.data.data[0]);
                let mma = Object.assign(rep.data.data[0], {PId: item.PId})
                console.log(mma)
                // state.collectProList.push(mma);
                this.showList.push(mma);
              })
              .catch(e => {
                console.log(e);
              })
          })
        })*/
  },
  methods: {
    ...mapActions(["showPro", "deleteCollect"])
  },
  computed: {
    ...mapGetters(["showCartList"])
  }
};
</script>

<style scoped>
* {
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
/*th{*/
/*  text-align: left;*/
/*}*/
</style>
