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
export type GuessItem = {
    /** 商品描述 */
    desc: string
    /** 商品折扣 */
    discount: number
    /** id */
    id: string
    /** 商品名称 */
    name: string
    /** 商品已下单数量 */
    orderNum: number
    /** 商品图片 */
    picture: string
    /** 商品价格 */
    price: number
}
