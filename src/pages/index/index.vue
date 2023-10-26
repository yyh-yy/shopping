<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './componets/CustomNavbar.vue'
import CategoryPanel from './componets/CategoryPanel.vue'
import HotPanel from './componets/HotPanel.vue'
import { getHomeBanner, getHomeCategory, getHomeHotAPI } from '@/services/home'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home.d'
import type { XtxGuessInstance } from '@/types/component'
import PageSkeleton from './componets/PageSkeleton.vue'
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBanner()
  if (res.code === '1') {
    bannerList.value = res.result
  }
}
const categoryList = ref<CategoryItem[]>([])
const getCategoryData = async () => {
  const res = await getHomeCategory()
  if (res.code === '1') {
    categoryList.value = res.result
  }
}
const homeList = ref<HotItem[]>([])

const getHomeData = async () => {
  const res = await getHomeHotAPI()
  if (res.code === '1') {
    homeList.value = res.result
  }
}
const isLoading = ref(true)
//uni-app 生命周期函数
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getCategoryData(), getHomeData()])
  isLoading.value = false
})
const guessRef = ref<XtxGuessInstance>()
const onScrolltolower = () => {
  guessRef.value?.getMore()
}
const isTriggered = ref(false)
const onRefresherrefresh = async () => {
  isTriggered.value = true
  guessRef.value?.resetData()
  await Promise.all([
    getHomeBannerData(),
    getCategoryData(),
    getHomeData(),
    guessRef.value?.getMore(),
  ])
  isTriggered.value = false
}
</script>

<template>
  <CustomNavbar></CustomNavbar>
  <scroll-view
    refresher-enabled
    @refresherrefresh="onRefresherrefresh"
    @scrolltolower="onScrolltolower"
    class="scroll-view"
    scroll-y
    :refresher-triggered="isTriggered"
  >
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <XtxSwiper :list="bannerList" />
      <CategoryPanel :list="categoryList" />
      <HotPanel :list="homeList" />
      <XtxGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
//
page {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f7f7f7;
}
.scroll-view {
  flex: 1;
}
</style>
