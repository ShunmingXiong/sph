import {
    reqGoodsInfo
} from "@/api"
const state = {
    goodInfo: {}
}
const actions = {
    //获取产品信息
    async getGoodInfo({
        commit
    }, skuId) {
        let res = await reqGoodsInfo(skuId);
        if (res.code == 200) {
            commit("GETGOODINFO", res.data)
        }
        console.log('detail',res)
    }
}
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo
    }
}
const getters = {
    categoryView(state) {
        //state.getGoodInfo初始状态是空对象，
        return state.goodInfo.categoryView || {}
    },
    skuInfo(state) {
        return state.goodInfo.skuInfo || {}
    },
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList || []
    }
}
export default {
    state,
    actions,
    mutations,
    getters
}