<script setup>
import BaseLayout from '@/layout/BaseLayout.vue'
import BasicAd from '@/components/BasicAd.vue'
import HomeBanner from '@/assets/images/home/home-bg-nomask-s.jpg'
import BwiSource from "@/assets/images/common/bwi.svg"
import BannerImg from '@/assets/images/home/banner.png'

import baseAdImg282 from '@/assets/images/about/base_ad_282.webp'
import baseAdImg375 from '@/assets/images/about/base_ad_375.webp'
import baseAdImg563 from '@/assets/images/about/base_ad_563.webp'
import baseAdImg750 from '@/assets/images/about/base_ad_750.webp'
import baseAdImg1125 from '@/assets/images/about/base_ad_1125.webp'
import baseAdImg1500 from '@/assets/images/about/base_ad_1500.webp'
import baseAdImg1920 from '@/assets/images/about/base_ad_1920.webp'
import baseAdImg2880 from '@/assets/images/about/base_ad_2880.webp'
import baseAdImg3840 from '@/assets/images/about/base_ad_3840.webp'
const adSrcset = [
    {
        url: baseAdImg282,
        media: '(max-width: 282px)',
        type: 'image/webp'
    },
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
        url: baseAdImg1125,
        media: '(max-width: 1125px)',
        type: 'image/webp'
    },
    {
        url: baseAdImg1500,
        media: '(max-width: 1500px)',
        type: 'image/webp'
    },
    {
        url: baseAdImg1920,
        media: '(max-width: 1920px)',
        type: 'image/webp'
    },
    {
        url: baseAdImg2880,
        media: '(max-width: 2880px)',
        type: 'image/webp'
    },
    {
        url: baseAdImg3840,
        media: '(max-width: 3840px)',
        type: 'image/webp'
    }
]
import AboutSection1 from '@/views/about/components/AboutSection1.vue'
import AboutSection2 from '@/views/about/components/AboutSection2.vue'
console.log(typeof baseAdImg750)
</script>

<template>
    <BaseLayout>
        <BasicAd class="about-basic-ad" :src="baseAdImg750"  :srcset="adSrcset">
            <template v-slot:logo>
                <div class="container  px-16  md:px-24 lg:pl-44 mx-auto m-8 text-white lg:w-[80%]">
                    <img class="w-[35vw]" :src="BwiSource" alt="">
                </div>
            </template>
        </BasicAd>

        <AboutSection1></AboutSection1>
        <AboutSection2></AboutSection2>
    </BaseLayout>
</template>

<style>

</style>
