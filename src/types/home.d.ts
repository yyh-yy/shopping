import type { GoodsItem } from './global'

export type BannerItem = {
    id: string
    imgUrl: string
    hrefUrl: string
    type: number
}

export type CategoryItem = {
    id: string
    name: string
    icon: string
}
export type HotItem = {
    id: string
    alt: string
    pictures: string[]
    target: string
    title: string
    type: string
}

/** 猜你喜欢-商品类型 */
export type GuessItem = GoodsItem
