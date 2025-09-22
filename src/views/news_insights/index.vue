<script setup >
import BaseLayout from '@/layout/BaseLayout.vue'
import BasicAd from '@/components/BasicAd.vue'
import newsBg from '@/assets/images/news_insights/news_bg_1920.png'
import { useResponsiveFontSize } from '@/composables/useResponsiveFontSize.js'
import NewsList from '@/views/news_insights/components/NewsList.vue'

const { fontSizeClamp: baseAdTextSize } = useResponsiveFontSize(20, 96)

const { fontSizeClamp: sectionTitleTextSize } = useResponsiveFontSize(42, 90)
const { fontSizeClamp: sectionDecorationTextSize } = useResponsiveFontSize(84, 180)
</script>

<template>
<BaseLayout>
    <BasicAd :src="newsBg">
        <div class="" :style="{ fontSize: baseAdTextSize }">
            <div class="">PROVEN RESULTS.</div>
            <div class="flex flex-row justify-end">IMPACTFUL STORIES.</div>
        </div>
    </BasicAd>
    <div class="w-full h-[4vw] max-h-[100px]"></div>
    <section class="relative">
        <div class="container m-auto">
            <div class="flex flex-row items-center relative">
               <div class=" leading-none  font-medium pr-4" :style="{fontSize:sectionTitleTextSize}">
                   <div>News &</div>
                   <div>Insights</div>
               </div>
                <div class="decoration flex justify-center items-center leading-[1] text-[#ff0000]" :style="{fontSize:sectionDecorationTextSize}"></div>
            </div>
        </div>

    </section>
    <div class="w-full h-[4vw] max-h-[100px]"></div>
    <NewsList></NewsList>
    <div class="w-full h-[4vw] max-h-[100px]"></div>
</BaseLayout>
</template>

<style scoped>
.decoration:after {
    content: '\002F';
    position:  absolute;
    top: -5%;
    color: #ff0000;
}
</style>
