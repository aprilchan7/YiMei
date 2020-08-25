<template>
    <section class="orderbox">
        <div class="paybox">
            <div class="order_title" >
                <span>配送及支付方式</span>
            </div>
            <div class="distribution">
                <h4>配送方式</h4>
                <div class="dibradio">
                    <input type="radio" v-model="checked1" name="deliveryWay" value="网上支付">快递：网上支付
                    <br>
                    <input type="radio" v-model="checked1" name="deliveryWay" value="货到付款" disabled>快递：货到付款 
                    <span>由第三方物流公司配送</span>
                    <a href="http://www.dapu.com/index.php/article-bangzhuzhongxin_zhifufangshi-47.html">查看货到付款范围 </a>
                    <div class="tishi">
                        由于仓储物流原因，货到付款暂时不支持。
                    </div>
                </div>
                <br>
                <br>
                <h4>付款方式</h4>
                <br>
                <p>支持以下银行或机构在线支付</p> 
                <div class="yinhangbox">
                    <table class="yinhangtable">
                        <tr >
                            <td v-for="(item,index) in paylist" v-if="index < 4":key="item.id" name="item.id">
                               <div class="flexdiv">
                                  <div class="inputdiv">  
                                      <input v-model="checked2" type="radio" name="payWay" :value="item.Pay_Name">
                                  </div>
                                  <div>  
                                      <img :src="require(`../../assets/images/${item.Pay_Src}`)" alt="">
                                  </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td v-for="(item,index) in paylist" v-if="index > 3 && index < 8":key="item.id" name="item.id">
                                <div class="flexdiv">
                                    <div class="inputdiv">  
                                        <input v-model="checked2" type="radio" name="payWay" :value="item.Pay_Name">
                                    </div>
                                    <div>  
                                        <img :src="require(`../../assets/images/${item.Pay_Src}`)" alt="">
                                    </div>
                                  </div>
                            </td>
                        </tr>
                        <tr>
                            <td v-for="(item,index) in paylist" v-if="index > 7 && index < 12" :key="item.id" name="item.id">
                                <div class="flexdiv">
                                    <div class="inputdiv">  
                                        <input v-model="checked2" type="radio" name="payWay" :value="item.Pay_Name">
                                    </div>
                                    <div>  
                                        <img  :src="require(`../../assets/images/${item.Pay_Src}`)" alt="">
                                    </div>
                                  </div>
                            </td>
                        </tr>
                        <tr>
                            <td v-for="(item,index) in paylist" v-if="index > 11 && index < 15" :key="item.id" name="item.id">
                                <div class="flexdiv">
                                    <div class="inputdiv">  
                                        <input v-model="checked2" type="radio" name="payWay" :value="item.Pay_Name">
                                    </div>
                                    <div>  
                                        <img :src="require(`../../assets/images/${item.Pay_Src}`)" alt="">
                                    </div>
                                  </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <br>
                <br>
                <p>支持以下第三方支付网关支付</p> 
                <div class="yinhangbox">
                    <table>
                        <tr>
                            <td v-for="(item,index) in paylist" v-if="index > 14" :key="item.id" name="item.id">
                                <div class="flexdiv">
                                    <div class="inputdiv">  
                                        <input v-model="checked2" type="radio" name="payWay" :value="item.Pay_Name">
                                    </div>
                                    <div>  
                                        <img :src="require(`../../assets/images/${item.Pay_Src}`)" alt="">
                                    </div>
                                  </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="sumbit">
                    <el-button type="primary" @click.native="ensure(checked1,checked2)">确认配送及付款方式</el-button>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
    import { getPayBylist } from '@/network/order'
    import  {mapGetters} from 'vuex'
    export default {
    name: 'paybyway',
    data() {
      return {
        textarea1: '',  
        paylist: [],  
        checked1: '网上支付',
        checked2:'支付宝',
      };
    },
    created() {
        // 获得付款方式列表
        getPayBylist()
        .then(res => {
            this.paylist = res.data.data
      })    
    },
    methods:{
        ensure(a,b) {
            console.log(this.paylist)
            this.paylist.map((item, index) => {
                if (item.Pay_Name == this.checked2 ) {
                    console.log(item.Pay_Id)
                    this.checkedData[0].payId = item.Pay_Id
                }
            })
             var id = this.$route.query.id
            console.log(id)
            if(id==1){
                this.$router.push("/order")
            }else if(id==2){
                this.$router.push("/payOrder")
            }  
            this.checkedData[0].payway = this.checked1
            this.checkedData[0].whichway = this.checked2
        }
    },        
    computed:{
        ...mapGetters(['checkedData'])       
    }
} 
</script>

<style scoped>
    /* * {
        margin: 0;
        padding: 0;
    } */
    .order_title {
        padding: 10px 10px;
        font-size: 16px;
        color: #6b6b6b;
        border-bottom: 1px solid #efefef;
    }
    .orderbox {
        width: 100%;
        position: relative;
    }
    
    .paybox {
        width: 70%;
        margin: 15px auto;
        text-align: left;
        border: 2px solid #efefef ;
    }
    .distribution {
        padding: 10px;
        font-size: 13px;
    }
    .dibradio {
        margin: 20px;
    }
    .dibradio>input {
        margin: 10px;
    }
    .dibradio>span {
        margin-left: 5px;
        font-size: 13px;
        color: rgb(153, 153, 153);
    }
    .dibradio>a {
        color: #6B6B6B;
        text-decoration: none;
        cursor: pointer;
        outline: none; 
        margin-left: 5px;
    }
    .tishi {
        width: 280px;
        padding: 5px 15px 3px 15px;
        margin: 0 2px 1em 2px;
        border: 1px solid #fcc;
        background-color: #ffffe6;
        color:black;
    }
    .distribution>p {
        margin-left: 10px;
        font-size: 12px;
    }
    .yinhangbox {
        border: 1px #ccc solid;
        margin: 5px;
        width: 90%;
       
    }
    .yinhangtable {
        vertical-align: middle;
    }
    .yinhangbox td {
        width: 200px;
        height: 50px;
    }
    .flexdiv {
        display:flex
    }
    .yinhangbox td>input {
        margin-left:20px;
        margin-right: 20px;
        margin-top: -10px;
    }
    .yinhangbox td img {
        line-height: 10px;
        border: 1px solid rgba(153, 153, 153, 0.644);
        padding: 5px;
    }
    .inputdiv {
        padding-top: 10px;
        padding-left: 20px;
        padding-right: 20px;
    }
    .sumbit {
        margin: 20px 10px;
    }
    .youhuibox {
        margin-left: 20px;
    }
    .youhuiquan {
        margin-left: 20px;
        color: #357EC0;
        font-size: 16px;
        text-decoration: none;
        width: 100%;
    }
    .beizhu {
        color: #357EC0;
        font-size: 16px;
        text-decoration: none;
    }
    .beizhubox {
        width: 25%;
    }
    .bill {
        width: 20%;
        background-color: #FFFFCC;
        vertical-align: top; 
    }
    .billtitle {
        text-align: right;
        color: #99CCFF;  
    }
    .billtitle+p {
        text-align: right;
        color: #FF9900;
        margin-right: 10px;  
    }
    .zongjia {
        margin-top: 40px;
    }
    .zongjiap {
        
        color: #99CCFF;
        text-align: right;
    }
    .zongjiap>span {
        padding-left: 150px;
    }
    .price {
        margin-top: 10px;
        border-top: 1px solid rgba(0, 0, 0, 0.514) ;
        color: red;
        font-size: 20px;
        text-align: right;
        padding: 10px 0;
    }
    .el-textarea {
    position: relative;
    display: inline-block;
    width: 100%;
    vertical-align: bottom;
    font-size: 14px;
    margin-top: 20px;
}
</style>