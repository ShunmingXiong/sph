一
2 项目配置
    2.1 package.json
        "scripts": {
            "serve": "vue-cli-service serve --open",
            "build": "vue-cli-service build",
            "lint": "vue-cli-service lint"
        },
    --open 让浏览器自动打开

    2.2 vue.config.js
    lintOnSave:false //关闭语法检查

    2.3 src文件夹配置别名 @表示src文件夹
    jsconfig.json
    {
        "compilerOptions": {
            "baseUrl": "./",
            "paths": {
            "@/*":["src/*"]
            }
        },
        "exclude": [
            "node_modules",
            "dist"
        ]
    }

3 项目路由
    vue-router
    key：url地址栏
    value：路由组件内容

4 header与footer组件
    项目开发：
    1.书写静态页面（html+css）
    2.拆分组件
    3.获取服务器的数据动态展示
    4.完成相应的动态业务逻辑

    注意1：创建组件的时候，组件结构+组件样式+图片资源
    注意2：less样式通过less less-load解析

5 路由组件搭建
使用vue-router
    Home Search Login Register
    pages | views文件夹放置路由组件
    $route:获取路由信息（路径、query、params）
    $router:编程式导航路由跳转（push|replace）

    路由跳转：
    声明式导航router-link
    编程式导航push|replace

    声明式导航能做的，编程式导航都能做

    Footer组件：
    在Home、search显示
    在登录注册时隐藏
    1 可以使用v-show 拿到$route.path 判断是Home和Search组件就显示Footer组件
    2 终极方案：路由元信息meta

6 路由传参      
    params：属于路径的一部分，配置路由需要占位 必须配合name使用
        如何指定params参数可传可不传，需要在配置路由的时候在占位后面加上?
        如果传递空字符串：使用undefined解决
    query

    路由组件可以传递props：只有params参数
    布尔写法 true
    对象写法 额外给路由组件传递参数
    函数写法 


    this.$router.push传递参数有2种方式：
    传递参数 – this.$router.push({path: '路由', query: {key: value}})  /router?id=666&name=zhangsan
    参数取值 – this.$route.query.key
    使用这种方式，传递参数会拼接在路由后面，出现在地址栏.

    传递参数 – this.$router.push({name: ’ 路由的name ', params: {key: value}})   /router/123/router/zhangsan
    参数取值 – this.$route.params.key
    使用这种方式，参数不会拼接在路由后面，地址栏上看不到参数…
    动态路由也是传递params的，所以在 this.$router.push() 方法中 path不能和params一起使用，否则params将无效。需要用name来指定页面

二
1 编程式路由导航多次执行会报NavigationDuplicated错误
    vue-router会返回一个promise对象
        1 通过给push传递成功失败回调函数（治标不治本）
            this.$router.push({
                name:'search',
                query:{
                    k:this.keyword.toUpperCase()
                },
                // params:{
                //     keyword:this.keyword
                // },
                params:{
                    keyword:'' || undefined
                }
            },()=>{

            },(error)=>{
                console.log(error)
            })
        2 this:当前组件实例（Search）
        this.$router属性：当在入口文件注册路由时，给组件实例添加的$router | $route
        伪代码：
        function VueRouter(){}
        //原型对象方法
        VueRouter.prototype.push = function(){}
        let $router = new VueRouter();
        $router.push(xxx)
        所以要重写push方法
2 Home组件业务分析
3 三级联动组件
    很Home,Search,Detail模块都在使用，注册为全局组件
4 其余静态组件（ListCOntainer,Recommend,Rank,Like,Floor,Brand）
    HTML+CSS+图片资源
5 postman测试接口
    三级联动
    http://39.98.123.211/api/product/getBaseCategoryList   get请求
6 axios二次封装
    XMLHttpRequest JQ fetch axios
    二次封装：
    请求拦截器：可以在发请求前处理一些业务
    响应拦截器：服务器返回数据之后，处理一些事情

    API文件夹（axios）
    baseURL:'/api'
7 接口统一管理
项目小：在组件生命周期中发请求
项目大：axios.get('xxx)
跨域：协议，域名，端口不同就会存在跨域
    解决----jsonp cros 代理
8 nprogress进度条使用
start：进度条开始
done：进度条结束
9 vuex状态管理
    集中式管理
    state 仓库存储数据的地方
    mutations 修改数据的地方
    actions 派发action 发送异步请求 书写业务逻辑
    getters 计算，用于简化仓库数据，获取仓库数据
    modules
10 TypeNav三级联动展示数据业务
[
    {
        id:1,
        name:'电子书',
        child:[
            {id:2,name:"喜羊羊",child:[]}
        ]
    }
]
一级分类背景
    1 CSS样式
    2 js
通过js控制二三级显示与隐藏
    最开始使用display控制

卡顿现象：
正常：事件触发频繁，而且每一次触发，回调函数都要去执行，（如果时间很短，而回调函数内部有计算，就会引发浏览器卡顿）
节流：在规定间隔时间范围内不会重复触发回调，只有大于这个时间才会触发回调，把频繁触发变为少量触发
防抖：前面的所有的触发都被取消，最后一次执行在规定的时间之后才会触发，也就是说连续快速的触发，只会执行一次

三级联动路由跳转与传递参数
Home模块跳转到Search模块：会携带产品名字和产品id
声明式导航：出现卡顿现象
    router-link是一个组件，当服务器数据返回之后，循环出很多router-link（创建组件实例对象）消耗内存

复习:
1)商品分类的三级列表由静态变为动态[获取服务器数据,解决跨域]
2)节流防抖
3)路由跳转:
    声明式导航:一个组件router-link VC实例 耗内存
    编程式导航:自定义属性+事件委派

1)开发search组件中的typenav组件商品分类(过渡动画)
    过渡动画要配合v-show与v-if使用
2)三级分类优化
将typenav中的this.$store.dispatch('categoryList')放到app组件中,这样就只请求一次
3)合并参数params和query
4)首页ListContainer组件与Floor组件
    服务器返回的数据只有商品分类列表数据,需要自己mock
    插件mockjs
        1)在项目的src中插件mock文件夹;
        2)准备json数据;
        3)把mock数据需要图片放在public文件夹中;
        4)开始mock mockServe.js
        5)在入口文件引入mockServe.js
        -webpack默认对外暴露：图片，json数据格式
5)ListContainer组件开发重点
安装Swiper5

复习：
1）完成商品分类三级列表跳转（合并参数）
2）完成search组件对于typenav的使用（过渡动画）
3）对于typenav请求次数进行优化
4）swiper插件
5）mock数据

1)解决轮播图
    定时器
    watch+nextTick
        在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用它，然后等待 DOM 更新。
2)开发floor组件
    getFloorList这个action需要在Home路由组件中派发，因为需要v-for遍历Floor组件
    组件通信
    props：父子组件通信
    自定义事件：$on $emit 子传父
    全局事件总线$bus
    pubsub-js
    插槽
3)封装轮播图全局组件
4)search模块开发
    1）先静态页面+静态组件拆分
    2）发请求（API）
    3）vuex（三连环）
    4）组件获取仓库数据，动态展示数据

1）动态开发面包屑中的分类名
编程式路由导航{自己跳自己}
2）动态开发面包屑关键字
    1）让Header组件清除关键字
    props：父子
    自定义事件：子父
    vuex：万能
    $bus：万能
    pubsub-js
    插槽

重点*****
1：综合排序
2：价格排序
asc升序 desc降序
order属性的属性值：
    1:asc
    1:desc
    2:asc
    2:desc
谁应该有类名
    通过order属性值中包含1（综合，默认）还是2（价格）
谁应该有箭头
    谁有类名谁就有箭头
箭头制作：阿里图标库

电商平台需要分页？
pageNo：代表当前页
pageSize：每页展示多少条数据
total：整个分页器一共多少条数据
continues：代表分页连续个数
一个重要的地方：
连续页面起始页和结束页（假设共五页）
例：6 7   8   9 10
    7 8   9   10 11
上述例子：八和九是中间页

开发产品详情页面
静态组件（Detail是路由组件）
1 当点击商品图片的时候，跳转到详情页面，在路由跳转的时候要带上产品ID给详情页
    滚动行为
2 API请求数据
3 Vuex获取产品信息