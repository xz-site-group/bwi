<script setup>
import BaseLayout from '@/layout/BaseLayout.vue'
import BasicAd from '@/components/BasicAd.vue'

import baseAdImg1920 from '@/assets/images/about/base_ad_1920.webp'
const adSrcset = [
    {
        url: baseAdImg1920,
        media: '(max-width: 1920px)',
        type: 'image/webp'
    },
]
import AboutSection1 from '@/views/about/components/AboutSection1.vue'
import AboutSection2 from '@/views/about/components/AboutSection2.vue'
</script>

<template>
    <BaseLayout>
        <BasicAd class="about-basic-ad" :src="baseAdImg1920"  :srcset="adSrcset" :has-mask="false">
            <template v-slot:logo>
                <div class="container  px-16  md:px-24 lg:pl-44 mx-auto m-8 text-white lg:w-[80%]">
                </div>
            </template>
        </BasicAd>

        <AboutSection1></AboutSection1>
        <AboutSection2></AboutSection2>
    </BaseLayout>
</template>

<style>

</style>
