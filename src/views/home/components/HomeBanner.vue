<script setup lang="ts">


import  baseAdImg375 from '@/assets/images/home/home_bg_m_375.png'
import  baseAdImg563 from '@/assets/images/home/home_bg_m_563.png'
import  baseAdImg750 from '@/assets/images/home/home_bg_m_750.png'
import  baseAdImg960 from '@/assets/images/home/home_bg_pc_960.png'
import  baseAdImg1125 from '@/assets/images/home/home_bg_pc_1440.png'
import  baseAdImg1440 from '@/assets/images/home/home_bg_pc_1440.png'
import  baseAdImg1500 from '@/assets/images/home/home_bg_pc_1920.png'
import  baseAdImg1920 from '@/assets/images/home/home_bg_pc_1920.png'
import  baseAdImg3840 from '@/assets/images/home/home_bg_pc_1920.png'

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
    <div class="banner relative" style="height: 100dvh;">
        <div class="absolute top-0 left-0 w-full h-full -z-50">
            <picture>
                <source
                    v-for="(src, index) in adSrcset"
                    :key="index"
                    :srcset="src.url"
                    :media="src.media"
                    :type="src.type || 'image/webp'"
                />
                <img
                    :src="baseAdImg750"
                    alt="广告图"
                    class="w-full h-full object-cover"
                    loading="lazy"
                />
            </picture>
<!--            <img :src="HomeBanner" alt="" style="width: 100%; height: 100%" />-->
        </div>

        <div class="absolute top-0 left-0 z-10 w-full h-full bg-black bg-opacity-50"></div>
        <div class="absolute top-1/2 left-0 transform -translate-y-1/2 z-20 w-full pb-20 lg:pb-28">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped></style>
