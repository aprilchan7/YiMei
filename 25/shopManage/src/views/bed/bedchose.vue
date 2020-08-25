<template>
  <div class="bedchose">
    <div>
      <ul>
        <li style="font-weight:bold;text-decoration:none;cursor: unset">根数：</li>
        <li>
          <a
            href="javascript:;"
            :class="activeIndex == 0 ? 'selected' : ''"
            @click="searchByGS(0)"
          >全部</a>
        </li>
        <li>
          <a
            href="javascript:;"
            :class="activeIndex == 1 ? 'selected' : ''"
            @click="searchByGS(1)"
          >240根</a>
        </li>
        <li>
          <a
            href="javascript:;"
            :class="activeIndex == 2 ? 'selected' : ''"
            @click="searchByGS(2)"
          >300根</a>
        </li>
        <li>
          <a
            href="javascript:;"
            :class="activeIndex == 3 ? 'selected' : ''"
            @click="searchByGS(3)"
          >350根</a>
        </li>
        <li>
          <a
            href="javascript:;"
            :class="activeIndex == 4 ? 'selected' : ''"
            @click="searchByGS(4)"
          >600根</a>
        </li>
        <li>
          <a
            href="javascript:;"
            :class="activeIndex == 5 ? 'selected' : ''"
            @click="searchByGS(5)"
          >床单被罩枕巾单品</a>
        </li>
        <li>
          <a
            href="javascript:;"
            :class="activeIndex == 6 ? 'selected' : ''"
            @click="searchByGS(6)"
          >靠垫套</a>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li style="font-weight:bold;text-decoration:none;cursor: unset">尺寸：</li>
        <li>
          <a
            href="javascript:;"
            :class="activeIndex1 == 0 ? 'selected' : ''"
            @click="searchBySize(0)"
          >全部</a>
        </li>
        <li>
          <a
            href="javascript:;"
            :class="activeIndex1 == 1 ? 'selected' : ''"
            @click="searchBySize(1)"
          >2.0米</a>
        </li>
        <li>
          <a
            href="javascript:;"
            :class="activeIndex1 == 2 ? 'selected' : ''"
            @click="searchBySize(2)"
          >1.8米</a>
        </li>
        <li>
          <a
            href="javascript:;"
            :class="activeIndex1 == 3 ? 'selected' : ''"
            @click="searchBySize(3)"
          >1.5米</a>
        </li>
        <li>
          <a
            href="javascript:;"
            :class="activeIndex1 == 4 ? 'selected' : ''"
            @click="searchBySize(4)"
          >1.2米</a>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li style="font-weight:bold;text-decoration:none;cursor: unset">类型：</li>
        <li>
          <a
            href="javascript:;"
            :class="activeIndex2 == 0 ? 'selected' : ''"
            @click="searchByType(0)"
          >全部</a>
        </li>
        <li>
          <a
            href="javascript:;"
            :class="activeIndex2 == 1 ? 'selected' : ''"
            @click="searchByType(1)"
          >纯色</a>
        </li>
        <li>
          <a
            href="javascript:;"
            :class="activeIndex2 == 2 ? 'selected' : ''"
            @click="searchByType(2)"
          >磨毛</a>
        </li>
        <li>
          <a
            href="javascript:;"
            :class="activeIndex2 == 3 ? 'selected' : ''"
            @click="searchByType(3)"
          >条纹</a>
        </li>
        <li>
          <a
            href="javascript:;"
            :class="activeIndex2 == 4 ? 'selected' : ''"
            @click="searchByType(4)"
          >印花</a>
        </li>
        <li>
          <a
            href="javascript:;"
            :class="activeIndex2 == 5 ? 'selected' : ''"
            @click="searchByType(5)"
          >绣花</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: "bedchose",
  data() {
    return {
      activeIndex: -1,
      activeIndex1: -1,
      activeIndex2: -1,
      proot: 0,
      psize: 0,
      ptype: 0
    }
  },
  created() {},
  beforeUpdate() {},
  components: {},
  methods: {
    ...mapActions(['setRoot', 'setSize', 'setType']),
    searchByGS(key) {
      this.activeIndex = key
      this.proot = key
      // this.setRoot(key);
    },
    searchBySize(key) {
      this.activeIndex1 = key
      this.psize = key
      // this.setSize(key);
    },
    searchByType(key) {
      this.activeIndex2 = key
      this.ptype = key
      // this.setType(key);
    }
  },
  watch: {
    proot: function() {
      this.setRoot(this.proot)
    },
    psize: function() {
      this.setSize(this.psize)
    },
    ptype: function() {
      this.setType(this.ptype)
    }
  }
}
</script>
<style lang="scss">
@import '~assets/css/productshow/life.scss';
</style>
