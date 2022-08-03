import Mock from 'mockjs'
//引入json不用暴漏
import banner from './banners.json'
import floor from './floors.json'

//mock:参数一:请求地址,参数二:请求的数据
Mock.mock('/mock/banner',{code:200,data:banner})
Mock.mock('/mock/floor',{code:200,data:floor})
