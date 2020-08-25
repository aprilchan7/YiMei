<template>
  <div id="search" class="mainsearch">
    <div class="search">
      <div class="selectdiv">
        <el-select
          id="select"
          v-model="keyvalue"
          filterable
          remote
          reserve-keyword
          placeholder="搜索商品"
          :remote-method="remoteMethod"
          :loading="loading"
          clearable
          size="large"
          class="login-form-input"
          style="width:90%"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.label"
            class="inputText"
          ></el-option>
        </el-select>
      </div>
      <div class="btnserch">
        <input type="button" class="search-btn" @click="search" />
      </div>
      <div>
        <loginBut />
      </div>
    </div>
  </div>
</template>
<script>
import { getProductListByKey } from "@/network/search.js";
import loginBut from "@/views/home/components/loginButton.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "search",
  data() {
    return {
      options: [],
      keyvalue: "",
      list: [],
      loading: false,
      states: []
    };
  },
  mounted() {},
  components: {
    loginBut
  },

  methods: {
    ...mapActions(["setKey"]),

    remoteMethod(query) {
      this.keyvalue = query;
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          getProductListByKey(query).then(res => {
            this.options = res.data.data;
          });
        }, 200);
      } else {
        this.options = [];
      }
    },
    search() {
      if (this.$route.path.indexOf("home") > 0 || this.$route.path == "/") {
        this.$router.push({
          path: `/product`
        });
      }
      //  console.log(this.$route.path)
    }
  },
  watch: {
    keyvalue: function() {
      console.log(this.keyvalue);
      this.setKey(this.keyvalue);
    }
  }
};
</script>

<style scoped>
.mainsearch {
  text-align: center;
  margin-top: 20px;
}
.selectdiv {
  width: 400px;
  overflow: hidden;
}
.search {
  display: flex;
  justify-content: flex-start;
  margin: 20px auto;
  width: 400px;
  text-align: center;
  box-shadow: 0px 0 0 1px #3f3f3f inset;
  border-radius: 5px;
  overflow: hidden;
  /* border: 1px solid #dcdfe6; */
}
.btnserch {
  margin-left: -5px;
}
.el-input__inner {
  width: 400px;
}
.search-btn {
  width: 30px;
  height: 30px;
  padding: 0px 0px;
  border: none;
  background: url(~assets/images/other/homeseach.png) no-repeat 7px 7px;
  background-color: rgba(255, 255, 255, 0);
  cursor: pointer;
  /* right: 5px; */
  outline: none;
  margin-right: 10px;
}

>>> .el-input__inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border: 0px solid #dcdfe6 !important;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 37px;
  line-height: 37px;
  outline: 0;
  padding: 0px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
  margin-top: 1px;
}
</style>
