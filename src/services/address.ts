import { http } from '@/utils/https'
import type { AddressParams } from '@/types/address'

//新建地址
export const postMemberAddressAPI = (data: AddressParams) => {
    return http({
        method: 'POST',
        url: '/member/address',
        data,
    })
}
