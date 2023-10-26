import type { BannerItem, CategoryItem, HotItem, GuessItem } from '@/types/home'
import type { PageResult, PageParams } from '@/types/global.d.ts'
import { http } from '@/utils/https'

//首页广告区域
export const getHomeBanner = (distributionSite = 1) => {
    return http<BannerItem[]>({ method: 'GET', url: '/home/banner', data: { distributionSite } })
}

//前台分类
export const getHomeCategory = () => {
    return http<CategoryItem[]>({ method: 'GET', url: '/home/category/mutli' })
}

//热门推荐

export const getHomeHotAPI = () => {
    return http<HotItem[]>({ method: 'GET', url: '/home/hot/mutli' })
}

/**
 * 猜你喜欢-小程序
 */
export const getHomeGoodsGuessLikeAPI = (data?: PageParams) => {
    return http<PageResult<GuessItem>>({
        method: 'GET',
        url: '/home/goods/guessLike',
        data,
    })
}
