import { useMemberStore } from '@/stores'
// 请求基地址
const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

// 拦截器配置
const httpInterceptor = {
    //拦截前触发
    invoke(options: UniApp.RequestOptions) {
        //非 http 开发需要拼接地址
        if (!options.url.startsWith('http')) {
            options.url = baseURL + options.url
        }
        //请求超时,默认 60s
        options.timeout = 10000
        options.header = {
            ...options.header,
            'source-client': 'miniapp',
        }
        //添加 token 请求头标识
        const memberStore = useMemberStore()
        const token = memberStore.profile?.token
        if (token) {
            options.header.Authorization = token
        }
    },
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)
