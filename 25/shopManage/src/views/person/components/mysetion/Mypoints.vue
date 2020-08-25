<template>
  <div>
    <div class="box">
      <div class="header">
        <h3 class="title">我的积分</h3>
        <table class="jf-info" cellpadding="0" cellspacing="0">
          <tbody>
            <tr>
              <td class="td1">您目前的积分数:</td>
              <td class="td2">{{ totalScore }}</td>
              <td>
                <router-link to="/PerCenter/Mypoints/pointsDetail" style="color:#4E8FC2">查看积分明细</router-link>
                <!-- <a href="/PerCenter/pointsDetail" class="cBlue">查看积分明细</a> -->
                <!-- <button @click="goto()">查看积分明细</button>
                -->
              </td>
            </tr>
            <tr>
              <td>您的会员级别是:</td>
              <td>新用户</td>
              <td>
                <a href="#" class="czong">查看会员级别介绍</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="footer">
        <h3 class="title">积分说明</h3>
        <div class="text">
          <p>
            <strong>一、大朴积分（以下简称积分）是什么？</strong>
          </p>
          <p>1、积分是大朴网对会员购物、参加互动的奖励分值。</p>
          <p>2、积分可以在大朴网直接抵现金使用，100积分=1元。</p>
          <p>3、积分当年有效，年底自动清零。</p>
          <p>&nbsp;</p>
          <p>
            <strong>二、积分如何获取？</strong>
          </p>
          <p>1、 评论已购买商品</p>
          <p>评论规则：</p>
          <p>A. 纯文字评论不得少于10个字。</p>
          <p>B. 用户可对90天内的订单进行评论。</p>
          <p>积分奖品规则：</p>
          <p>A. 文字评论奖励商品金额100%的积分数，即商品金额100元，奖励积分100</p>
          <p>
            B.
            晒图+文字奖励商品金额200%的积分数，即商品金额100元，奖励积分200。注意此规则和规则1不累计计算，也就是说发表文字和晒图同时最多奖励商品金额200%的积分数。
          </p>
          <p>C. 积分兑换比100：1，即100积分等于1元，可用于官网购物消费。</p>
          <p>D. 确认收货后15日内评论给予积分奖励，过时则不再给予积分奖励</p>
          <p>
            E.
            确认收货15天后再评论，无法获得原订单金额对应的积分。仅可获得50积分。
          </p>
          <p>2、参加大朴网积分活动</p>
          <p>参加大朴网不定期举行的积分活动，可以获得积分奖励，具体奖励以实际活动为准。</p>
          <p>&nbsp;</p>
          <p>
            <strong>三、 积分如何使用？</strong>
          </p>
          <p>1、在大朴网订单结算页面，勾选“使用积分支付”即可使用积分抵现金。</p>
          <p>2、积分抵现金可与会员折扣、商品优惠、优惠券同时享受。</p>
          <p>3、大促活动进行时，可能会限制积分支付使用。</p>
          <p>4、积分支付每单限额为订单金额的20%</p>
          <p>&nbsp;</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMyUserInfo } from '@/network/home'
export default {
  name: 'Mypoints',
  data() {
    return {
      totalScore: 0
    }
  },
  created() {
    getMyUserInfo().then(res => {
      console.log(res.data)
      this.totalScore = res.data.data[0].SumScore
    })
  },
  methods: {
    goto() {
      this.$router.push('/PerCenter/Mypoints/pointsDetail')
    }
  }
}
</script>

<style scoped>
* {
  font-size: 14px;
  color: #6b6b6b;
}
.box {
  width: 970px;
  /* position: absolute; */
  /* overflow: hidden; */

  /* height: 1200px; */
}
.header {
  width: 870px;
  height: 110px;
  /* position: relative; */
  background-color: #efefef;
  margin-bottom: 20px;
  padding: 25px 50px;
  overflow: hidden;
}
.title {
  /* position: relative; */
  top: -5px;
  color: #6b6b6b;
  text-align: left;
  font-size: 18px;
}
td {
  height: 30px;
}
.td1 {
  width: 112px;
  padding-right: 15px;
}
.td2 {
  width: 42px;
  padding-right: 15px;
}
.cBlue {
  color: #4e8fc2;
}
.cBlue:hover {
  color: #ff5656;
  border-bottom: solid 1px #ff5656;
}
.czong:hover {
  color: rgb(127, 91, 66);
  border-bottom: solid 1px rgb(127, 91, 66);
}
.footer {
  /* position: relative; */
  background-color: #efefef;
  margin-bottom: 20px;
  padding: 30px 50px;
  overflow: hidden;
}
.text {
  text-align: left;
  height: 500px;
}
</style>
