<script setup>
import BaseLayout from '@/layout/BaseLayout.vue'
import BasicAd from '@/components/BasicAd.vue'
import BannerImg from '@/assets/images/home/banner.png'
import HomeBanner from '@/assets/images/home/home-bg-nomask-s.jpg'
const srcsetArr = [
    `${BannerImg} 1280w`,
    `${HomeBanner} 750w`,
]
const srcsetStr  = srcsetArr.join(',')
console.log('BannerImg', typeof BannerImg, srcsetStr)
</script>

<template>
    <BaseLayout>
        <BasicAd class="about-basic-ad" :src="BannerImg"  >
            <div class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[105px] font-bold">
                <div>Let’s Start </div>
                <div>Your Next Campaign.</div>
            </div>

        </BasicAd>

        <div>this is about {{ $t('hello')}}</div>
    </BaseLayout>
</template>

<style>

</style>
