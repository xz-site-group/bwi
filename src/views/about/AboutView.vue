<script setup>
import BaseLayout from '@/layout/BaseLayout.vue'
import BasicAd from '@/components/BasicAd.vue'
import BannerImg from '@/assets/images/home/banner.png'
import HomeBanner from '@/assets/images/home/home-bg-nomask-s.jpg'
import BwiSource from "@/assets/images/common/bwi.svg"
const srcsetArr = [
    `${BannerImg} 1280w`,
    `${HomeBanner} 750w`,
]
const srcsetStr  = srcsetArr.join(',')
import AboutSection1 from '@/views/about/components/AboutSection1.vue'
import AboutSection2 from '@/views/about/components/AboutSection2.vue'
console.log('BannerImg', typeof BannerImg, srcsetStr)
</script>

<template>
    <BaseLayout>
        <BasicAd class="about-basic-ad" :src="BannerImg"  >
            <template v-slot:logo>
                <div class="container  px-16  md:px-24 lg:pl-44 mx-auto m-8 text-white lg:w-[80%]">
                    <div class="h-[12vw] max-h-[100px] min-h-[56px]"></div>
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
