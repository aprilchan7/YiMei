<template>
  <div>
    <el-select
      v-model="value"
      multiple
      filterable
      remote
      reserve-keyword
      placeholder="搜索商品"
      :remote-method="remoteMethod"
      :loading="loading" class="login-form-input">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
      class="inputText">
      </el-option>
    </el-select>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: [],
        value: [],
        list: [],
        loading: false,
        states: ["牙刷","牙线"]
      }
    },
    mounted() {
      this.list = this.states.map(item => {
        return { value: `value:${item}`, label: `${item}` };
      });
    },
    methods: {
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options = [];
        }
      }
    }
  }
</script>

<style scoped>
  .login-form-input{
    z-index: 100;
    margin-top: 80px;
    color: #91847B;
    background-color: #eee;
    width: 400px;
    height: 50px;
  }
  .el-input__inner {

    height: 33px;

    font-size: 13px;

    box-shadow: none;

    border: 1px solid #e9e9e9;

  }



  .el-input__inner:hover {

    border-color: #e9e9e9;

  }



  .el-input__inner:focus {
    border-color: #42a5f5;
    box-shadow: none;
    transition-duration: .5s;
  }



  .el-input__inner::-webkit-input-placeholder {
    line-height: 40px;
  }



  .el-input__inner, .el-checkbox__inner, .el-textarea__inner, .el-button {
    border-radius: 0;
  }


</style>
