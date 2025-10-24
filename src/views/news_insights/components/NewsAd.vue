<script setup lang="ts">

import BasicAd from '@/components/BasicAd.vue'
import { useResponsiveFontSize } from '@/composables/useResponsiveFontSize.js'

const { fontSizeClamp: baseAdTextSize } = useResponsiveFontSize(20, 96)


import  baseAdImg375 from '@/assets/images/news_insights/news_bg_375.webp'
import  baseAdImg563 from '@/assets/images/news_insights/news_bg_563.webp'
import  baseAdImg750 from '@/assets/images/news_insights/news_bg_750.webp'
import  baseAdImg1125 from '@/assets/images/news_insights/news_bg_1125.webp'
import  baseAdImg1500 from '@/assets/images/news_insights/news_bg_1500.webp'
import  baseAdImg1920 from '@/assets/images/news_insights/news_bg_1920.webp'

const adSrcset = [
    {
        url: baseAdImg375,
        media: '(max-width: 375px)',
        type: 'image/jpeg'
    },
    {
        url: baseAdImg563,
        media: '(max-width: 563px)',
        type: 'image/jpeg'
    },
    {
        url: baseAdImg750,
        media: '(max-width: 750px)',
        type: 'image/jpeg'
    },

    {
        url: baseAdImg1125,
        media: '(max-width: 1125px)',
        type: 'image/jpeg'
    },

    {
        url: baseAdImg1500,
        media: '(max-width: 1500px)',
        type: 'image/jpeg'
    },
    {
        url: baseAdImg1920,
        media: '(max-width: 1920px)',
        type: 'image/jpeg'
    },
]
</script>

<template>
    <BasicAd :src="baseAdImg1920" :srcset="adSrcset">
        <div class="" :style="{ fontSize: baseAdTextSize }">
            <div class="">{{ $t('newsInsights.adText1') }}</div>
            <div class="flex flex-row justify-end">{{ $t('newsInsights.adText2') }}</div>
        </div>
    </BasicAd>
</template>

<style scoped>

</style>
