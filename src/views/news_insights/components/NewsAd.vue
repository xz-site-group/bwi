<script setup lang="ts">

import BasicAd from '@/components/BasicAd.vue'
import { useResponsiveFontSize } from '@/composables/useResponsiveFontSize.js'

const { fontSizeClamp: baseAdTextSize } = useResponsiveFontSize(20, 96)


import  baseAdImg375 from '@/assets/images/news_insights/news_bg_375.png'
import  baseAdImg563 from '@/assets/images/news_insights/news_bg_563.png'
import  baseAdImg750 from '@/assets/images/news_insights/news_bg_750.png'
import  baseAdImg960 from '@/assets/images/news_insights/news_bg_1125.png'
import  baseAdImg1125 from '@/assets/images/news_insights/news_bg_1125.png'
import  baseAdImg1440 from '@/assets/images/news_insights/news_bg_1500.png'
import  baseAdImg1500 from '@/assets/images/news_insights/news_bg_1500.png'
import  baseAdImg1920 from '@/assets/images/news_insights/news_bg_1920.png'
import  baseAdImg3840 from '@/assets/images/news_insights/news_bg_1920.png'

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
        url: baseAdImg960,
        media: '(max-width: 960px)',
        type: 'image/jpeg'
    },
    {
        url: baseAdImg1125,
        media: '(max-width: 1125px)',
        type: 'image/jpeg'
    },
    {
        url: baseAdImg1440,
        media: '(max-width: 1440px)',
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

    {
        url: baseAdImg3840,
        media: '(max-width: 3840px)',
        type: 'image/jpeg'
    }
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
