//API统一管理
import requests from "./request";
import mockRequests from './mockAjax'
//三级联动
//get请求 无参数 /api/product/getBaseCategoryList
export const reqCategoryList = () => {
    //发请求 返回结果是Promise
    return requests({
        url: '/product/getBaseCategoryList',
        method: 'get',
    })
}

export const reqGetBannerList = () => mockRequests.get('/banner');

//获取floor数据
export const reqFloorList = () => mockRequests.get('/floor');

//获取搜索模块数据：/api/list
export const reqGetSearchInfo = (params) => {
    return requests({
        url: "/list",
        method: "post",
        data: params
    })
}

//获取产品详情信息的接口  URL: /api/item/{ skuId }  请求方式：get   
export const reqGoodsInfo = (skuId) => requests({
    url: `/item/${skuId}`,
    method: 'get'
});