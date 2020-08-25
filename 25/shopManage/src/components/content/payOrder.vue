<template>
  <div class="all">
    <div class="tittle">
      <img
        src="http://s.dapuimg.com/public/dapu/images/icons/logo.png"
        alt="大朴网"
        width="245"
        height="49"
        border="0"
      />
      <p>无甲醛棉品，始于大朴</p>
    </div>
    <div class="box">
      <div class="hd">
        <span>订单信息</span>
      </div>
      <div style="display:flex;padding:20px;height:auto">
        <div>
          <img
            alt="大朴"
            src="https://activity.dapuimg.com/qrcode_for_gh_19ea3aa21889_860.jpg"
            style="width:350px"
          />
          <p>[扫一扫]关注大朴官方微信，随时获取订单信息</p>
        </div>
        <div style="border-left:1px solid;padding-left:20px;" v-if="this.payorder!=''">
          <table style="font-size:14px">
            <tr>
              <td style="text-align:left">
                <span>订单编号：{{this.payorder[0].OrderNum}}</span>
              </td>
            </tr>
            <tr>
              <td style="text-align:left">应付金额：¥{{allPrice}}</td>
            </tr>
            <tr>
              <td style="text-align:left">应付期限：{{paydate | formatDateTime}}</td>
              <span style="color:red;margin-left:-60px">（请您在24小时内完成支付，否则订单会被自动取消)</span>
            </tr>
          </table>
          <el-table
            v-if="cartData!=''"
            :data="cartData"
            style="width: 100%"
            :header-cell-style="rowclass"
            :cell-style="cellstyle"
          >
            <el-table-column prop="date" label="商品信息" width="300">
              <template slot-scope="scope">
                <router-link
                  :to="{ path: '/productdetails/' + scope.row.id }"
                  style="color:#0088CC;"
                >{{scope.row.product_Name}}</router-link>
                <p>{{scope.row.Title1+''+scope.row.Title1value+'、'+scope.row.Title2+scope.row.Title2value}}</p>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="商品单价" width="120">
              <template slot-scope="scope">¥{{ scope.row.product_Price}}</template>
            </el-table-column>
            <el-table-column prop="address" label="商品数量" width="100">
              <template slot-scope="scope">{{ scope.row.num}}</template>
            </el-table-column>
            <el-table-column prop="address" label="小计" width="100">
              <template slot-scope="scope">
                ¥
                <span class="itemprice">{{scope.row.num*scope.row.product_Price}}</span>
              </template>
            </el-table-column>
          </el-table>
          <div class="onep">
            <p style="color:#C09853">
              <span>
                支付方式：
                <span style="color:red">【{{checkedData[0].whichway}}】</span>
              </span>
              <span>还差一步，请立即支付</span>
              <el-button type="danger" style="margin-left:10px" @click="addPayOder">去付款</el-button>
              <router-link :to="{path:'/paybyway',query:{id:2}}" style="margin-left:10px">
                <span style="color:red">[ 更换支付方式 ]</span>
              </router-link>
            </p>
          </div>
          <div class="twop">
            <p>物流人员送货上门时，请注意查验签收货物</p>
            <p>如果订单的含有赠送的优惠券将在订单完成时赠送</p>
            <p>
              您现在可以：
              <router-link to="/PerCenter/myorder" style="color:#4E8FC2">查看订单</router-link>
            </p>
          </div>
        </div>
      </div>
      <div class="bottombox">
        <p>提示：</p>
        <p>1."订单提交"仅代表大朴网已经收到了您提交的订单，只有您的订单通过了确认审核之后，我们双方的订购合同才算成立。</p>
        <p>2.当日16:00以后的的订单，作为次日订单处理，请您原谅。如果您的订单不能正常发货，我们将在24小时内与您联系。</p>
        <p>3.大朴收到您的订单后，将针对订单进行审核，如果审核发现订单异常，或有其他大朴无法出货给您的情况，如商品缺货，配送超区等，将通知您考虑取消订单，届时请予原谅。</p>
        <p class="pp">4.物流上门时，请您务必当面对照发货单核对商品，如果出现商品缺少、配送错误、包装破损问题或质量问题等，请直接联系大朴网，以保证为您及时解决！</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getcartlist } from '@/network/order'
import { getPayOder, addPayOder } from '@/network/payOrder'
export default {
  name: 'payOrder',
  data() {
    return {
      payorder: [],
      multipleSelection: [],
      discountts: 0,
      totalPrice: 0,
      paydate: new Date(),
      allPrice: 0
    }
  },

  components: {},
  filters: {
    formatDateTime(value) {
      let date = new Date(value)
      let y = date.getFullYear()
      let MM = date.getMonth() + 1
      MM = MM < 10 ? '0' + MM : MM
      let d = date.getDate()
      d = d < 10 ? '0' + d : d
      d += 1
      let h = date.getHours()
      h = h < 10 ? '0' + h : h
      let m = date.getMinutes()
      m = m < 10 ? '0' + m : m
      let s = date.getSeconds()
      s = s < 10 ? '0' + s : s
      return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s
    }
  },
  beforCreate() {},
  created() {
    this.getPayOder()
    // this.allPrice
    // this.cartData.map((item, index) => {
    //   this.allPrice += item.num * item.product_Price
    // })
    this.allPrice = this.$route.query.obj
    console.log(this.allPrice)
  },
  methods: {
    rowclass() {
      return 'color:black;font-size:14px;border:1px solid #DDDDDD;'
    },
    cellstyle() {
      return 'border:1px solid #DDDDDD;font-size:13px'
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    getPayOder() {
      getPayOder().then(res => {
        // console.log(res);
        this.payorder = res.data.data[1]
        // console.log(this.payorder);
      })
    },
    addPayOder() {
      addPayOder(this.payorder[0].OrderNum).then(res => {
        console.log(res.data.success)
        if (res.data.success == true) {
          this.$message({
            type: 'success',
            message: '支付成功'
          })
          setTimeout(() => {
            this.$router.push({
              path: `/PerCenter/myorder`
            })
          }, 200)
          this.cartData = []
          localStorage.setItem('k', JSON.stringify(this.cartData))
        }
      })
    }
  },
  computed: {
    ...mapGetters(['checkedData', 'cartData'])
  }
}
</script>
<style scoped lang="scss">
@import '~assets/css/cart/payOrder.scss';
</style>