import { reqCategoryList,reqGetBannerList,reqFloorList } from "@/api"
const state = {
    //起始值
    categoryList:[],
    //轮播图数据
    bannerList:[],
    //floor数据
    floorList:[],
}
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
    GETFLOORLIST(state,floorList){
        state.floorList = floorList
    }
}
const actions = {
    async categoryList({commit}){
        let result = await reqCategoryList();
        //console.log(result)
        
        if(result.code == 200){
            commit("CATEGORYLIST",result.data)
        }
    },
    async getBannerList({commit}){
        let res = await reqGetBannerList();
        if(res.code == 200){
            commit("GETBANNERLIST",res.data)
        }
    },
    async getFloorList({commit}){
        let res = await reqFloorList();
        if(res.code == 200){
            commit("GETFLOORLIST",res.data)
        }
    }
}
//计算属性
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}