<template>
  <div id="shopMenu">
    <div class="logo">
      <img src="@/assets/images/logo.png" alt />
    </div>
    <div>
      <search />
    </div>
    <div class="shopMenu">
      <ul class="header">
        <li v-for="item in list" :key="item.id" class="item">
          <router-link :to="'/'+item.url+'/'+item.id" class="one-header" v-text="item.name "></router-link>
          <div v-if="!!item.children" class="submenu-panel">
            <div class="submenu-panel-bg"></div>
            <ul>
              <li v-for="citem in item.children" :key="citem.id">
                <span :click="setnav" class="nav-left">
                  <router-link
                    :to="'/'+item.url+'/'+item.id+'_'+citem.id"
                    class="two-header"
                    v-text="citem.name"
                  ></router-link>
                </span>
                <span
                  class="nav-right"
                  v-if="citem.children != null"
                  v-for="ccitem in citem.children"
                  :key="ccitem.id"
                >
                  <router-link
                    :to="'/'+item.url+'/'+item.id+'_'+citem.id+'_'+ccitem.id"
                    class="three-header"
                    v-text="ccitem.name "
                  ></router-link>
                </span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import search from '@/components/content/search'
export default {
  name: 'shopMenu',

  data() {
    return {
      activeIndex: '1',
      isshow: false
    }
  },
  components: {
    search
  },
  created() {
    this.getMenuList()
  },
  computed: {
    ...mapGetters(['menulist', 'list'])
  },
  methods: {
    ...mapActions(['getMenuList', 'setnav'])
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/shopMenu.scss';
</style>
