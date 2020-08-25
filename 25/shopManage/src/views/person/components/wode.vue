<template>
    <div>
      <div>
        <button to="/PerCenter" @click="hreftwo" class="mycenter">个人中心</button>
      </div>

    </div>

</template>

<script>
    export default {
      name: "sd",
      methods: { //跳转页面

        hreftwo() {

          this.$router.push({path: '/PerCenter/myorder'})

        }

      }
    }
</script>

<style scoped>
.mycenter{
  z-index: 100;
  position: absolute;
  top: 40px;
  right: 80px;
  width: 80px;
  padding: 0px 15px 0;
  height: 40px;
  background-color: rgb(177, 84, 79);
  color: #FFFFFF;
  line-height: 40px;
  font-size: 12px;
  border: 0px solid;
}

</style>
