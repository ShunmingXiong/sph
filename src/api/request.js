//对axios二次封装
import axios from 'axios'
//引入进度条
import nprogress from 'nprogress'
//引入进度条样式
import 'nprogress/nprogress.css'
const requests = axios.create({
    //基础路径
    baseURL:'/api',
    timeout:5000,
});
//请求拦截器：在发请求之前，请求拦截器可以检测到
requests.interceptors.request.use((config)=>{
    //config包含headers请求头
    nprogress.start();
    return config
})

//响应拦截器
requests.interceptors.response.use((res)=>{
    nprogress.done();
    return res.data;
},(error)=>{
    return Promise.reject(new Error('faile'));
})

export default requests