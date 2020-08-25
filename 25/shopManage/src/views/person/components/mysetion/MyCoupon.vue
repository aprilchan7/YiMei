<template>
  <div>
    <div class="box">
      <div class="header">
        <h3>我的优惠卷</h3>
        <div>
          <table>
            <tbody>
              <tr>
                <th>名称</th>
                <th>券码</th>
                <th>有效期</th>
                <th>状态</th>
              </tr>
              <tr>
                <td height="60" colspan="5">
                  没有优惠券
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyCoupon"
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
table {
  cellpadding: 0;
  cellspacing: 0;
  width: 100%;
  text-align: left;
}
th {
  font-style: normal;
  font-weight: 500;
  width: 25%;
}
</style>
