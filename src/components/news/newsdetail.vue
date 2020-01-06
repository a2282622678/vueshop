<template>
    <div class="newsdetail_container">
        <h3 class="title">
            {{newsInfo.title}}
        </h3>
        <div class="subtitle">
            <span>发布时间:{{newsInfo.add_time | dateFormat}}</span>
            <span>点击:{{newsInfo.click}}次</span>
        </div>
        <div class="content" v-html="newsInfo.content">
            
        </div>
        <div class="comment">
            <!-- 文本域 -->
            <van-cell-group>
                <van-field
                    v-model="message"
                    rows="2"
                    autosize
                    type="textarea"
                    maxlength="50"
                    placeholder="请输入留言"
                    show-word-limit
                />
            </van-cell-group>
            <!-- 评论按钮 -->
            <van-button  type="info" size="large" class="postComment" @click="addComment">评论</van-button>
            <!-- 评论列表 -->
            <div class="comentlist">
                <div class="item" v-for="item in comments" :key="item.id">
                    <div>{{item.user_name}}:{{item.content}}</div>
                    <div>评论时间:{{item.add_time | dateFormat('YYYY-MM-DD HH:mm:ss') }}</div>
                </div>
            </div>
            <!-- 查看更多按钮 -->
            <van-button plain type="danger" :loading='loading' loading-text="加载中..." size="large" class="loadMore" @click="loadMore">查看更多</van-button>
        </div>
    </div>
</template>

<script>
import { getNewsDetail,getNewsComments,sendComment }from '@/api/index.js'
export default {
    data(){
        return{
            id:this.$route.params.id,
            pageindex: 1,
            message:'',
            newsInfo:{},
            comments:[],
            loading:false,
            hasComment:true
        }
    },
    methods:{
        //获取文章详情
        getNews(){
            getNewsDetail(this.id).then(res =>{
                if(res.status==0){
                    this.newsInfo = res.message[0] 
                }
            })
        },
        //获取文章的评论数据
        getComments(){
                //请求前判断是否有数据
                if(this.hasComment === false){
                    this.$toast("加载完毕")
                    this.loading = false
                    return

                }
            getNewsComments(this.id,this.pageindex).then( res =>{
                //恢复加载更多评论
                this.loading = false
                //先判断是否有评论数据
                if(res.message.length === 0){
                    this.hasComment = false
                    this.$toast("加载完毕")
                    return
                }
                this.comments = this.comments.concat(res.message)
            })
        },
        //发表评论
        addComment(){
            sendComment(this.id,this.message).then(res=>{
                if(res.status === 0){
                        this.$toast('评论成功')
                        //构造一个对象,放到comments数组的开头
                        var comment = {
                            add_time:new Date(),
                            user_name:'匿名用户',
                            content:this.message
                        }
                        this.comments.unshift(comment)
                        //清空
                        this.message = ''
                }
            })
        },
        loadMore(){
            this.loading = true;
            ++ this.pageindex
            this.getComments()
        }
        
        
    },
    created(){
        this.getNews()
        this.getComments()
    
    }

}
</script>
<style lang='scss' scoped>
    .newsdetail_container{
        padding: 8px;
        background-color: #eee;
        .comment{
            .postComment{
                margin-top: 10px;
            }
            .comentlist{
                .item{
                    background-color: #e8e8e8;
                    font-size: 12px;
                    margin-top: 6px;
                }
            }
            .loadMore{
                margin-top: 15px;
            }
        }
        .title{
            text-align: center;
            color: #404040;
            padding: 8px 0px;
        }
        .subtitle{
            color: #888888;
            font-size: 14px;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #9e9e9e87;
            margin-bottom: 10px
        }
        .content{
            margin-bottom: 10px;
            /deep/ img{
                width: 100%;
            }
            
        }
    }
</style>