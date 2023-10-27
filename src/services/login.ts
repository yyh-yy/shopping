import { http } from '@/utils/https'
import type { LoginResult } from '@/types/member'

type LoginParams = {
    code: string
    encryptedData: string
    iv: string
}
export const postLogin = (data: LoginParams) => {
    return http<LoginResult>({
        method: 'POST',
        url: '/login/wxMin',
        data,
    })
}
//内测使用
export const postLoginWxMinSimple = (phoneNumber: string) => {
    return http<LoginResult>({
        method: 'POST',
        url: '/login/wxMin/simple',
        data: {
            phoneNumber,
        },
    })
}
