<script setup >
import BaseLayout from '@/layout/BaseLayout.vue'
import BasicAd from '@/components/BasicAd.vue'
import newsBg from '@/assets/images/contact/contact_ad_1920.png'
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
            <div class="">LET’S START </div>
            <div class="">YOUR NEXT CAMPAIGN.</div>
        </div>
    </BasicAd>
    <div class="w-full h-[4vw] max-h-[100px]"></div>
    <section class="relative">
        <div class="container m-auto">
            <div class="flex flex-row items-center relative">
               <div class=" leading-none  font-medium pr-4" :style="{fontSize:sectionTitleTextSize}">
                   <div>Ready to disrupt? </div>
                   <div>Here’s our info.</div>
               </div>
                <div class="decoration flex justify-center items-center leading-[1] text-[#ff0000]" :style="{fontSize:sectionDecorationTextSize}"></div>
            </div>
            <div>
                <div>
                    📧Email: info@bwi.com
                </div>
                <div>📞Tel: +63-123-456-7890</div>
                <div>
                    📍Address: N.Bacalso Ave., Corner V. Rama St.,Cebu City, Philippines
                </div>
                <div>We’ll get back to you within 1–2 business days.</div>
            </div>
        </div>

    </section>
    <div class="w-full h-[4vw] max-h-[100px]"></div>

    <iframe
        src="https://forms.gle/npzUNZ9vCRMT7aRg6"
        width="100%"
        height="1000px"
        frameborder="0"
        marginheight="0"
        marginwidth="0">
        正在加载…
    </iframe>
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
