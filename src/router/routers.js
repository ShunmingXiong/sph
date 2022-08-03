import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
export default [
    {
        path:'/home',
        component:Home,
        meta:{show:true}
    },
    {
        name:'search',
        path:'/search/:keyword?',
        component:Search,
        meta:{show:true},
        props:true
    },
    {
        path:'/login',
        component:Login,
        meta:{show:false}
    },
    {
        path:'/register',
        component:Register,
        meta:{show:false}
    },
    {
        path:'/detail/:skuId',
        component:Detail,
        meta:{show:true}
    },
    {
        path:'*',
        redirect:'/home'
    }
]