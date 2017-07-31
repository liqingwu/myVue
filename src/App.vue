<template>
  <div id="app">
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="Goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="Rating">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="Seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// 字体图标在这里引入,在common中引入会报错
require('common/sass/iconfont.scss');
import $ajax from './axios/axios';
export default {
  name: 'app',
  created() {
    $ajax.Test({ financingNumber: '13', pageIndex: 1 })
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error)
      })

  },
  data() {
    return {
      seller: {

      }
    }
  }
}
</script>

<style <style lang="scss">
//引入公用的style
@import 'common/sass/index';
.tab {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  @include border-1px(rgba(7, 17, 27, 0.1));
  .tab-item {
    flex: 1;
    a {
      display: block;
      text-align: center;
      font-size: 14px;
      color: rgb(77, 85, 93);
      &.active {
        color: rgb(240, 20, 20);
      }
    }
  }
}
</style>

