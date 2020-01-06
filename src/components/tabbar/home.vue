<template>
    <div class="home_container">
        <!-- 轮播图 -->
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in lunBoData" :key="item.img">
                
                    <img :src="item.img" class="item-img">

            </van-swipe-item>

     

        </van-swipe>
        <!-- 九宫格 -->

        <van-grid :column-num="3" :border='false'>
            <router-link class="grid-item" tag="div" to="/newslist">
                <img src="../../assets/image/menu1.png">
                <div>
                    新闻资讯
                </div>
            </router-link>
            <div class="grid-item">
                <img src="../../assets/image/menu2.png">
                <div>
                   图片分享
                </div>
            </div>
            <div class="grid-item">
                <img src="../../assets/image/menu3.png">
                <div>
                    商品购买
                </div>
            </div>
            <div class="grid-item">
                <img src="../../assets/image/menu4.png">
                <div>
                    留言反馈
                </div>
            </div>
            <div class="grid-item">
                <img src="../../assets/image/menu5.png">
                <div>
                    视频专区
                </div>
            </div>
            <div class="grid-item">
                <img src="../../assets/image/menu6.png">
                <div>
                    话费充值
                </div>
            </div>
            <div class="grid-item">
                <img src="../../assets/image/menu7.png">
                <div>
                    联系我们
                </div>
            </div>
            <div class="grid-item">
                <img src="../../assets/image/menu8.png">
                <div>
                    清仓特卖
                </div>
            </div>
            <div class="grid-item">
                <img src="../../assets/image/menu9.png">
                <div>
                    一元福利
                </div>
            </div>
        </van-grid>
    </div>
</template>

<script>

    import { getlunbo } from "@/api/index.js"
    export default {
        //导入请求接口的函数
        data(){
            return {
                lunBoData:[]
            }
        
        },
        methods:{
            getLunBoData(){
                getlunbo().then(res =>{
                    console.log(res.message)
                    if(res.status == 0){
                        this.lunBoData = res.message
                    }
                })
            }
        },
        created(){
            //子调用,获取轮播插图数据
            this.getLunBoData()
        }
    }
</script>
<style scoped>
    .van-swipe{
        height: 200px;
    }
    .item-img{
        width: 100%;
        height: 200px;
    }
    .grid-item img{
        width: 45%;
    }
     .grid-item div{
        color: #523949;
    }
    .van-grid{
         text-align: center;
         padding-top: 10px;
    }
    .grid-item{
        margin: 10px 2px
    }
</style>