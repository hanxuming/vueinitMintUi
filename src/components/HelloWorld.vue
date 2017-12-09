<template>
  <div class="hello">
    <mt-header fixed title="固定在顶部"></mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>
    <h1 class="testless"><span>test less/sass</span></h1>
    <div class="testrem"></div>
  </div>
</template>

<script>
import { Header, Navbar, TabItem } from 'mint-ui';
import { Meeting } from '@/service/getData'
export default {
  name: 'HelloWorld',
  data () {
    return {
      selected:"1"
    }
  },
  component:{
    Header,
    Navbar,
    TabItem
  },
  mounted () {
     Meeting().then(res => {
        console.log(JSON.stringify(res));
     }).catch(error => {
        console.log(JSON.stringify(errir))
     })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
/*页面中使用px2rem*/
 @import '../styles/rem.less';
 
  .testless{
    span{
      color:red;
    }
  };
  .testrem{
    .px2rem(width,100px);
    .px2rem(height,100px);
    background:blue;
  }
</style>
