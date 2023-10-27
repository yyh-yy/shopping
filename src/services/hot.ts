import { http } from '@/utils/https'
import type { PageParams } from '@/types/global'
import type { HotResult } from '@/types/hot'
export const getHotRecommendApi = (url: string, data?: PageParams & { subType?: string }) => {
    return http<HotResult>({
        method: 'GET',
        url,
        data,
    })
}
