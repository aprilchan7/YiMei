<template>
  <div>
    <div class="mask" v-show="visible" @click="visible=false"></div>
    <div class="mask" v-show="ifTan" @click="ifTan=false"></div>
    <div>
      <addcart
        @showbox="toshow"
        v-show="visible"
        :isshow="visible"
        :kind="this.allkind"
        :totalNum="this.allnum"
        :totalPrice="this.allprice"
      />
    </div>
    <section class="details" v-if="this.productlist.length>0">
      <div class="boxleft">
        <div class="picbox">
          <div class="choose" ref="choose">
            <div class="content" ref="content" @mousemove="handleMove" @mouseleave="notshow">
              <img :src="picsrcbig" />
              <div class="shadow" ref="shadow"></div>
            </div>
            <el-carousel
              type="card"
              height="100px"
              :autoplay="false"
              indicator-position="none"
              arrow="never"
            >
              <el-carousel-item
                v-for="(item, index) in piclist"
                :key="item.id"
                name="item.id"
                @click.native="setActiveItem(piclist, index, picsrcbig)"
              >
                <img :src="require(`../../assets/images/${item.Pro_Url}`)" class="medium" />
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="larger" ref="larger">
            <img :src="picsrcbig" ref="big" />
          </div>
        </div>
        <!-- 收藏按钮 -->
        <!--                <div>-->
        <!--                  <a href="/collect.do" >-->
        <div id="shoucangbg" class="shoucang" @click="tiaoShoucang"></div>
        <!--                  </a>-->

        <myCollect class="tanchuK" v-if="ifTan" ref="son">
          <template slot="mySlot">
            <img src="../../assets/images/home/cha2.jpg" alt @click="guanbi" />
          </template>
          <template slot="mySlot2">
            <router-link to="/PerCenter/MyCollection">
              <a href class="myMy">我的收藏</a>
            </router-link>
          </template>
        </myCollect>

        <!--                </div>-->
        <!-- 分享按钮 -->
        <a href>
          <div id="bshare-shareto" class="shareto">&nbsp;</div>
        </a>
      </div>
      <div class="boxright">
        <h1 class="goods-name">{{ productlist[0].Pro_Name }}</h1>
        <div class="product-id clearfix">
          商品编码：&nbsp;
          <span id="goodsBn">{{ productlist[0].Pro_Num }}</span>
        </div>
        <div class="goods-price-box clearfix">
          <div style="margin:0px;padding:0px;">
            <span class="goodsprice">￥{{ productlist[0].Price }}</span>
          </div>
        </div>
        <div class="goods-price-box clearfix">
          <span class="huiyuan">会员价</span>&nbsp;&nbsp;
          <span
            class="mlvprice"
            style="color:#7F5B42;font-weight:bold;"
          >￥{{ productlist[0].MemPrice }}</span>
          <a
            class="how"
            target="_blank"
            href="http://www.dapu.com/index.php/article-bangzhuzhongxin_tesesuwu-24.html"
          >如何成为会员？</a>
        </div>
        <div id="promotion_show" class="clearfix">
          <span class="cuxiao">促销</span>
          <span id="promotion_msg">满88包邮</span>
        </div>
        <div class="score-wrap">
          <ul>
            <li>
              <p class="score-num">{{ productlist[0].Pro_SumCount - productlist[0].Pro_NewCount }}</p>
              <p class="score-name">销量</p>
            </li>
            <li>
              <p class="score-num">{{comment.length }}</p>
              <p class="score-name">用户评论数</p>
            </li>
            <li>
              <p class="score-num">{{ productlist[0].Score }}</p>
              <p class="score-name">购买送积分</p>
            </li>
          </ul>
        </div>
        <div class="tagline">{{ productlist[0].Pro_Title }}</div>
        <div id="goods-spec" class="goods-spec">
          <div class="spec-item specItem">
            <span class="buttontitle">{{ Pro_Spe_Title1 }}</span>
            <div class="rightdiv1" v-for="(item,index) in shopbutton1" :key="index">
              <span
                class="title1"
                :class="activeClass == index ? 'redBorder':''"
                @click="value1(item,index)"
              >{{ item }}</span>
            </div>
            <br />
            <br />
            <span class="buttontitle">{{ Pro_Spe_Title2 }}</span>
            <div class="rightdiv1" v-for="(item,index) in shopbutton2" :key="item.id">
              <span
                class="title2"
                :class="activeClass1 == index ? 'redBorder':''"
                @click="value2(item,index)"
              >{{ item }}</span>
            </div>
          </div>
        </div>
        <div class="buyinfo clearfix">
          数量:
          <el-input-number
            class="elbutton"
            size="small"
            v-model="num4"
            :min="0"
            :max="productlist[0].Pro_SumCount"
          ></el-input-number>
          <!-- @change="handleChange(num4)" -->
        </div>
        <div class="shopbutton">
          <el-button
            type="danger"
            :style="disable"
            @mouseenter.native="enter(Pro_Spe_Title1,Title1_value,Pro_Spe_Title2,Title2_value )"
            @click.native="addcart(productlist[0].Pro_Id,productlist[0].Pro_Name,productlist[0].Price,Pro_Spe_Title1,Title1_value,Pro_Spe_Title2,Title2_value,num4,picsrcbig,productlist[0].Pro_SumCount,productlist[0].Score )"
          >加入购物车</el-button>
        </div>
      </div>
    </section>
    <div class="bottomcontent">
      <div class="btshop">
        <hotShop />
      </div>
      <div class="btright">
        <div id="buttonbox">
          <el-radio-group v-model="isCollapse">
            <el-radio-button :label="false" @click.native="showdata()">产品详情</el-radio-button>
            <el-radio-button :label="true" @click.native="showcommentary()">用户评论</el-radio-button>
          </el-radio-group>
        </div>
        <div class="otherbox" v-html="pro_data" :style="productshow"></div>
        <div class="otherbox" :style="commentaryshow">
          <div class="talk" v-for="item in this.comment" :key="item.id" name="item.id">
            <span class="tel">{{item.Name}}</span>
            <div class="talktext">{{item.Content}}</div>
            <div class="talkdate">{{item.CreateDate}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import myCollect from '@/views/home/components/myCollect.vue'
import { collectPro } from '@/network/collectPro'
import addcart from '@/components/commom/addcart'
import { mapActions, mapGetters } from 'vuex'
import { getProductDetail, getComment } from '@/network/productdetails'
import hotShop from '@/components/content/hotShop'
import { isLogin } from '@/toolkit'
export default {
  data() {
    return {
      visible: false,
      intnum: 0,
      num4: 1,
      productlist: [], //产品的信息表
      ProdeuctList: [],
      piclist: [], //产品图片表
      Pro_Spe_Title1: '',
      Pro_Spe_Title2: '',
      picsrcbig: '', //轮播图切换存放图片地址的
      shopbutton1: [],
      shopbutton2: [],
      isCollapse: false,
      pro_data: '',
      productshow: '',
      commentaryshow: { display: 'none' },
      talklist: [],
      talktel: [],
      pro_Id: '',
      Title1_value: '',
      Title2_value: '',
      activeClass: -1,
      activeClass1: -1,
      disable: '',
      allkind: 0,
      allnum: 0,
      allprice: 0,
      ifTan: false,
      comment: []
      // pid:
    }
  },
  components: {
    addcart,
    hotShop,
    myCollect
  },
  mounted: function() {
    // let piclist = this.piclist
    // let intnum = this.intnum
    // let url = this.piclist[0].Pro_Url
    // console.log(2222222222222222);
    // console.log(url);
    // picsrcbig = "require(`../../assets/images/${url}`)",
    // this.setActiveItem(piclist,intnum,picsrcbig);//需要触发的函数
  },
  created() {
    this.getProductDetail()
    // getComment(this.$route.params.id).then(res => {
    //   console.log('3333333333333')
    //   console.log(res.data)
    //   this.comment = res.data.data
    //   console.log(this.comment)
    //   this.comment.map((item, index) => {
    //     return (item.CreateDate = new Date(
    //       +new Date(item.CreateDate) + 8 * 3600 * 1000
    //     )
    //       .toISOString()
    //       .replace(/T/g, ' ')
    //       .replace(/\.[\d]{3}Z/, ''))
    //     console.log(item.CreateDate)
    //   })
    // })
  },
  watch: {
    $route(to, from) {
      try {
        if (to.name === 'productdetails') {
          this.getProductDetail()
        }
      } catch (e) {
        console.log(e)
      }
    }
  },
  methods: {
    ...mapActions(['addToCart']),
    getProductDetail() {
      getProductDetail(this.$route.params.id).then(res => {
        console.log('33333333333333999999')
        console.log(res.data)
        this.pro_Id = this.$route.params.id
        this.productlist = res.data.data[0]
        let piclist2 = res.data.data[1]

        //我的评论
        this.comment = res.data.data[2]
        console.log(this.comment)
        this.comment.map((item, index) => {
          return (item.CreateDate = new Date(
            +new Date(item.CreateDate) + 8 * 3600 * 1000
          )
            .toISOString()
            .replace(/T/g, ' ')
            .replace(/\.[\d]{3}Z/, ''))
          console.log(item.CreateDate)
        })

        var newArr = piclist2.filter(item => item.Type == 3) //遍历数组拿到类型为3的数组
        this.piclist = newArr

        if (res.data.data[0][0].Pro_Spe_Content1 != null) {
          var newButton1 = res.data.data[0][0].Pro_Spe_Content1.split('$')
        }
        this.shopbutton1 = newButton1 //遍历字符串，以$分隔存入新数组
        if (res.data.data[0][0].Pro_Spe_Content2 != null) {
          var newButton2 = res.data.data[0][0].Pro_Spe_Content2.split('$')
          this.shopbutton2 = newButton2 //遍历字符串，以$分隔存入新数组
        }

        let myurl = this.piclist[0].Pro_Url //将拿到数据分别赋值给几个数组

        this.picsrcbig = require(`../../assets/images/${myurl}`)
        if (res.data.data[0][0].Pro_Spe_Title1 != null) {
          //判断选择菜单2是否有数值，并且赋值
          this.Pro_Spe_Title1 = res.data.data[0][0].Pro_Spe_Title1 + ':'
        }
        if (res.data.data[0][0].Pro_Spe_Title2 != null) {
          //判断选择菜单2是否有数值，并且赋值
          this.Pro_Spe_Title2 = res.data.data[0][0].Pro_Spe_Title2 + ':'
        }
        this.pro_data = res.data.data[0][0].pro_data
        //   console.log(33333333333333);
        //   console.log(res.data.data[0]);
        //   console.log(res.data.data[1]);
        //   console.log(res.data.data[2]);
      })
    },
    showdata() {
      this._data.productshow = { display: 'block' }
      this._data.commentaryshow = { display: 'none' }
    },
    showcommentary(productshow) {
      this._data.productshow = { display: 'none' }
      this._data.commentaryshow = { display: 'block' }
    },
    setActiveItem(piclist, name, picsrcbig) {
      let srcnow = piclist[name].Pro_Url
      this.picsrcbig = require(`../../assets/images/${srcnow}`)
    },
    // 获取元素到文档区域的坐标
    getPosition: function(element) {
      var dc = document,
        rec = element.getBoundingClientRect(),
        x = rec.left, // 获取元素相对浏览器视窗window的左、上坐标
        y = rec.top
      // 与html或body元素的滚动距离相加就是元素相对于文档区域document的坐标位置
      x += dc.documentElement.scrollLeft || dc.body.scrollLeft
      y += dc.documentElement.scrollTop || dc.body.scrollTop
      return {
        left: x,
        top: y
      }
    },
    handleMove(evt) {
      var larger = this.$refs.larger
      var shadow = this.$refs.shadow
      var big = this.$refs.big
      var pos = this.getPosition(this.$refs.choose)
      var shadowRect = shadow.getBoundingClientRect()
      var bigRect = big.getBoundingClientRect()
      var contentRect = this.$refs.content.getBoundingClientRect()
      var maxX = contentRect.width - shadowRect.width
      var maxY = contentRect.height - shadowRect.height

      var X = evt.pageX - pos.left - shadowRect.width / 2
      var Y = evt.pageY - pos.top - shadowRect.height / 2

      if (X <= 0) {
        X = 0
      }
      if (X >= maxX) {
        X = maxX
      }
      if (Y <= 0) {
        Y = 0
      }
      if (Y >= maxY) {
        Y = maxY
      }
      // 防止遮罩层粘滞，跟随鼠标一起滑出大图位置
      var bigX = (X * bigRect.width) / contentRect.width
      var bigY = (Y * bigRect.height) / contentRect.height
      //  bigX / bigW = X / contentW,主图和遮罩层之间存在两倍关系，放大图和原图之间也有两倍关系
      shadow.style.left = X + 'px'
      shadow.style.top = Y + 'px'

      // console.log(X, Y, bigX, bigY);

      big.style.left = -bigX + 'px'
      big.style.top = -bigY + 'px'

      larger.style.display = 'block'
      shadow.style.display = 'block'
    },
    notshow() {
      var larger = this.$refs.larger
      var shadow = this.$refs.shadow
      larger.style.display = 'none'
      shadow.style.display = 'none'
    },
    /*关闭弹出框*/
    guanbi() {
      this.ifTan = false
    },

    /*收藏产品*/
    tiaoShoucang() {
      console.log(11111)

      /*弹出收藏框*/
      if (this.ifTan == false) {
        // this.$refs.son.myClose();
        this.ifTan = true
        console.log(this.ifTan)
      }

      // let UId=sessionStorage.myUser;
      let UId = window.pageConfig.userInfo.UId
      // console.log(this.$cookie.keys());
      // console.log(this);
      // console.log(this.$cookie);
      // console.log(window.pageConfig.userInfo);
      // console.log(window.pageConfig.userInfo.UId);

      if (UId != undefined && UId != '') {
        let PId = this.$route.params.id
        // console.log(proId);
        let data = { UId, PId }
        // let data={PId}
        collectPro(data)
          .then(resp => {
            console.log(resp.data.message)
          })
          .catch(e => {
            console.log(e)
          })
      }
    },
    toshow(visible) {
      this.visible = false
    },
    value1(text, index) {
      this.Title1_value = text
      this.activeClass = index
      // console.log(index,text)
    },
    value2(text, index) {
      this.Title2_value = text
      this.activeClass1 = index
      //  console.log(index,text)
    },
    enter(a, b, c, d) {
      if (a != '' && c != '') {
        if (b != '' && d != '') {
          this.disable = { cursor: 'pointer' }
        } else {
          this.disable = { cursor: 'not-allowed' }
        }
      } else if (a != '' && c == '') {
        if (b != '') {
          this.disable = { cursor: 'pointer' }
        } else {
          this.disable = { cursor: 'not-allowed' }
        }
      }
    },
    addcart(a, b, c, d, e, f, g, h, i, j, k) {
      if (d != '' && f != '') {
        if (e != '' && g != '') {
          if (!isLogin()) {
            this.$message({
              message: '您还没有登录！请先登录',
              type: 'warning'
            })
            setTimeout(() => {
              this.$router.push({
                path: `/denglu`
              })
            }, 300)
          } else {
            this.sureadd(a, b, c, d, e, f, g, h, i, j, k)
          }
        } else {
          this.$message.error('请选择商品信息')
        }
      } else if (d != '' && f == '') {
        if (e != '') {
          if (!isLogin()) {
            this.$message({
              message: '您还没有登录！请先登录',
              type: 'warning'
            })
            setTimeout(() => {
              this.$router.push({
                path: `/denglu`
              })
            }, 300)
          } else {
            this.sureadd(a, b, c, d, e, f, g, h, i, j, k)
          }
        } else {
          this.$message.error('请选择商品信息')
        }
      } else if (d == '' && f == '') {
        if (!isLogin()) {
          this.$message({
            message: '您还没有登录！请先登录',
            type: 'warning'
          })
          setTimeout(() => {
            this.$router.push({
              path: `/denglu`
            })
          }, 300)
        } else {
          this.sureadd(a, b, c, d, e, f, g, h, i, j, k)
        }
      }
    },
    sureadd(a, b, c, d, e, f, g, h, i, j, k) {
      console.log(a, b, c, d, e, f, g, h, i, j, k)
      this.visible = true
      this.addToCart({
        id: a,
        product_Name: b,
        product_Price: c,
        Title1: d,
        Title1value: e,
        Title2: f,
        Title2value: g,
        num: h,
        img: i,
        stock: j,
        Score: k
      })
      // 购物车弹框显示数据
      this.allkind = this.cartProducts.length
      this.allnum = 0
      this.allprice = 0
      this.cartProducts.map((item, index) => {
        this.allnum += item.num
        this.allprice += item.num * item.product_Price
        // console.log(this.allkind+'==='+this.allnum+'==='+this.allprice)
      })
    },
    notshow() {
      var larger = this.$refs.larger
      var shadow = this.$refs.shadow
      larger.style.display = 'none'
      shadow.style.display = 'none'
    },
    updated() {
      // this.getProductDetail();
    }
  },
  computed: {
    ...mapGetters(['cartProducts'])
  }
}
</script> 
<style lang="scss" scoped>
@import '~assets/css/productdetails/productdetails.scss';

.mask {
  background-color: transparent;
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
/*收藏*/
.tanchuK {
  /*margin-top:300px;*/
  /*margin-left: 320px;*/
  position: fixed;
  top: 50%;
  margin-top: -100px;
  left: 50%;
  margin-left: -200px;
  z-index: 20;
}
.myMy {
  color: red;
  text-decoration: none;
}
.myMy:hover {
  text-decoration: underline;
}
</style>
