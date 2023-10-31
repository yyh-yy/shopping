import { http } from '@/utils/https'
import type { ProfileDetail, ProfileParams } from '@/types/member'
/**
 * 获取个人信息
 */
export const getMemberProfileAPI = () => {
    return http<ProfileDetail>({
        method: 'GET',
        url: '/member/profile',
    })
}

//修改个人信息
export const updateMemberProfileAPI = (data: ProfileParams) => {
    return http<ProfileDetail>({
        method: 'PUT',
        url: '/member/profile',
        data,
    })
}
