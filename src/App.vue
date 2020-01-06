<template>
  <div class="app">
    <van-nav-bar
          fixed="true"
          title="爱购商城"
          :left-text="backText"
          :left-arrow="isBack"
          @click-left="goBack"
    />
    <!-- 中间主体 -->
    <router-view></router-view>

    <!-- 底部菜单 -->
    <van-tabbar v-model="active" router>
        <van-tabbar-item icon="wap-home-o" to="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="cart-o"  info="0" to="/shopcar">购物车</van-tabbar-item>
        <van-tabbar-item icon="user-o" to="/user">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang='scss' scoped> 
   .app{
      padding-bottom: 50px;
      padding-top: 46px;
   
    .van-hairline--bottom{
      background-color :  #4d7ce6
    }
   .van-nav-bar .van-icon{
      color: #ffffff;
    }
    .van-nav-bar__title{
      color: #fff;
    }
    .van-nav-bar__text{
      color: #fff;
    }
 }

    
</style>
<script>
export default {
  data(){
    return{
      active : 0,
      backText:'',
      isBack:false
    }
  },
  watch:{
    $route:function(newPath,oldPath){
      switch(newPath.path){
        case '/home':
          this.active=0
          break;
        case '/shopcar':
          this.active=1
          break;
        case '/user':
          this.active=2
          break;
      }
        if(newPath.path == '/home'){
            //如果是/home,则不显示返回操作
            this.isBack=false
            this.backText = ''
        }else{
            //显示
            this.isBack=true
            this.backText = '返回'
        }
    }
  },
  methods:{
    goBack(){
        //返回上一页
        this.$router.go(-1)
    }
  }
}
</script>