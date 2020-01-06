
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8888/api'

export const getlunbo = async function(){
  var res = await axios.get('/getlunbo')
  return res.data
}
export const getnewslist = async function(){
  var res = await axios.get('/getnewslist')
  return res.data
}

export const getNewsDetail = async function(id){
  var res = await axios.get('/getnew/'+id)
  return res.data
}

export const getNewsComments = async function(id,pageIndex){
  var res = await axios.get('/getcomments/'+ id + '?pageindex=' + pageIndex)
  return res.data
}

export const sendComment = async function(id,content){
  //对post表单的数据进行编码,模拟post表单来传递数据
  //类似 x-www-urlencode-form
  var params = new URLSearchParams()
  params.append('content',content)
  var res = await axios.post('/postcomment/'+ id ,params)
  return res.data
}

