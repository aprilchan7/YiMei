<template>
  <div style="background-color:#EFEFEF;padding-top:30px;padding-left:50px;width:1000px">
    <h4 style="color:#6B6B6B;text-align:left;margin-left:10px">积分变更记录</h4>
    <div>
      <el-table
        :header-cell-style="{background:'#EFEFEF',fontSize:'14px'}"
        :cell-style="{color:'#6B6B6B',background:'#EFEFEF',fontSize:'14px'}"
        :data="myPoints"
        style="width: 100%;background-color:#EFEFEF;"
      >
        <el-table-column prop="date" label="时间" width="210">
          <template slot-scope="scope">{{ scope.row.CreateDate | dateFmt('YYYY-MM-DD HH:mm:ss')}}</template>
        </el-table-column>
        <el-table-column prop="name" label="类型" width="180">
          <template slot-scope="scope">{{scope.row.Message}}</template>
        </el-table-column>
        <el-table-column prop="date" label="积分" width="150">
          <template slot-scope="scope">{{ scope.row.Score}}</template>
        </el-table-column>
        <el-table-column prop="address" label="摘要" width="270">
          <template slot-scope="scope">{{scope.row.Content}}</template>
        </el-table-column>
      </el-table>
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
</template>

<script>
import { getPoints } from '@/network/person'
export default {
  name: 'pointsDetail',
  data() {
    return {
      myPoints: [],
      total: 0,
      pageSize: 5,
      listLoading: false,
      currentPage: 1
    }
  },
  created() {
    this.getPoints()
  },
  methods: {
    handleSizeChange: function(size) {
      this.pageSize = size
      //  console.log(this.pageSize) //每页下拉显示数据
      this.getPoints()
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage
      //  console.log(this.currentPage) //点击第几页
      this.getPoints()
    },
    getPoints() {
      // console.log(this.current, this.pageSize)
      getPoints(this.currentPage, this.pageSize).then(res => {
        //  console.log(res.data)
        this.myPoints = res.data.data
        this.total = res.data.total
        console.log(this.myPoints)
      })
    }
  }
}
</script>

<style scoped>
</style>
