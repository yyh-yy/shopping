import { http } from '@/utils/https'
import type { ProfileDetail } from '@/types/member'
/**
 * 获取个人信息
 */
export const getMemberProfileAPI = () => {
    return http<ProfileDetail>({
        method: 'GET',
        url: '/member/profile',
    })
}
