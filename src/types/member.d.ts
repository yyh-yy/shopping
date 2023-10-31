// src/types/member.d.ts
/** 封装通用信息 */
type BaseProfile = {
    /** 用户ID */
    id: number
    /** 头像  */
    avatar: string
    /** 账户名  */
    account: string
    /** 昵称 */
    nickname?: string
}
/** 小程序登录 登录用户信息 */
export type LoginResult = BaseProfile & {
    /** 手机号 */
    mobile: string
    /** 登录凭证 */
    token: string
}

export type ProfileDetail = BaseProfile & {
    gender?: Gender
    birthday?: string
    fullLocation?: string
    profession?: string
}

export type Gender = '女' | '男'

/**
 * ts 中使用 pick 可以把需要的参数选中
 *
 *  */

export type ProfileParams = Pick<
    ProfileDetail,
    'nickname' | 'gender' | 'birthday' | 'profession'
> & {
    provinceCode?: string
    cityCode?: string
    countyCode?: string
}
