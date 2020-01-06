<template>
    <div class="newslist_container">
        <van-loading size="24px" vertical v-show="flag">加载中...</van-loading>
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                 
                  <div class="newslist">
                     <router-link tag="div" :to="'/newsdetail'+ item.id"  class="newsitem" v-for="item in newslist" :key="item.id">
                   <!-- <div  class="newsitem" v-for="item in newslist" :key="item.id"> -->
                        <div cl ass="img_container">
                                <img :src="item.img_url" >
                        </div> 
                        <div class="info">
                                <h5>{{item.title}}</h5>
                                <div class="time_click"> 
                                    <div>发布时间:{{item.add_time | dateFormat('YYYY-MM-DD HH:mm:ss')}}</div>
                                    <div>点击次数:{{item.click}}次</div>
                                </div>
                        </div>
                    <!-- </div> -->
                     </router-link>
                 </div>

            </van-pull-refresh>

          
    </div>
</template>

<script>
//引入接口
import { getnewslist} from '@/api/index.js'
export default {
    data(){
        return{
            newslist:[],
            isLoading:false,
            flag:true
        }
    },
    methods:{
        //请求新闻资讯列表数据
        getnewslist(){
            getnewslist().then(res=>{
                if(res.status === 0){
                    this.newslist = res.message
                    //当数据加载完成时隐藏
                    this.flag=false
                }
            })
        },
        //下拉刷新时间
         onRefresh() {
                setTimeout(() => {
                    this.$toast('刷新成功');
                    this.isLoading = false;
                }, 500);
             }
  

    },
    created(){
        //加载新闻资讯的数据
        this.getnewslist()
    }
}
</script>
<style lang='scss' scoped>
    img{
        width: 100px;
        height: 90px;
    }

    .newslist_container{
        background-color: #eee;
        padding: 8px;
        .newslist{
            .newsitem{
                 display: flex;
                //  justify-content: space-between;
                 align-items: center;
                 border-bottom: 1px solid #ccc;
                 padding-bottom: 5px;

                 .img_container{
                     width: 100px;
                     height: 100px;
                     margin-right: 5px;
                 }
                 .info{
                     .time_click{
                         display: flex;
                         justify-content: space-between;
                         font-size: 12px;
                         color: #888888;
                         margin-bottom: 10px;
                     }
                 }
            }
        }
    }
</style>