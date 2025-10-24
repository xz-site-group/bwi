<script setup lang="ts">


import  baseAdImg375 from '@/assets/images/home/home_bg_m_375.webp'
import  baseAdImg563 from '@/assets/images/home/home_bg_m_563.webp'
import  baseAdImg750 from '@/assets/images/home/home_bg_m_750.webp'
import  baseAdImg1920 from '@/assets/images/home/home_bg_m_1920.webp'

const adSrcset = [
    {
        url: baseAdImg375,
        media: '(max-width: 375px)',
        type: 'image/webp'
    },
    {
        url: baseAdImg563,
        media: '(max-width: 563px)',
        type: 'image/webp'
    },
    {
        url: baseAdImg750,
        media: '(max-width: 750px)',
        type: 'image/webp'
    },
    {
        url: baseAdImg1920,
        media: '(max-width: 1920px)',
        type: 'image/webp'
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
                    :src="baseAdImg1920"
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
