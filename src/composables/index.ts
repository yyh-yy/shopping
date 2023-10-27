import { ref } from 'vue'
import type { XtxGuessInstance } from '@/types/component'
export const useGuessList = () => {
    const guessRef = ref<XtxGuessInstance>()
    const onScrolltolower = () => {
        guessRef.value?.getMore()
    }
    //必须返回
    return {
        guessRef,
        onScrolltolower,
    }
}
