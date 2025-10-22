<script setup>
import BaseLayout from '@/layout/BaseLayout.vue'
import BasicAd from '@/components/BasicAd.vue'
import CustomGoogleForm from '@/views/contact/components/CustomGoogleForm.vue'
import newsBg from '@/assets/images/contact/contact_ad_1920.png'
import { useResponsiveFontSize } from '@/composables/useResponsiveFontSize.js'

const { fontSizeClamp: baseAdTextSize } = useResponsiveFontSize(20, 96)
const { fontSizeClamp: sectionTitleTextSize } = useResponsiveFontSize(36, 90)
const { fontSizeClamp: sectionDecorationTextSize } = useResponsiveFontSize(72, 180)
</script>

<template>
    <BaseLayout>
        <!-- 顶部广告 -->
        <BasicAd :src="newsBg">
            <div class="" :style="{ fontSize: baseAdTextSize }">
                <div class="">LET'S START</div>
                <div class="">YOUR NEXT CAMPAIGN.</div>
            </div>
        </BasicAd>

        <!-- 间距 -->
        <div class="w-full h-[4vw] max-h-[100px]"></div>

        <div class="container m-auto md:flex md:flex-row">
            <!-- 联系信息部分 -->
            <div class="relative xl:px-4 md:flex-1 ">
                <div class=" px-4 m-auto ">
                    <!-- 标题 -->
                    <div class="flex flex-row items-center relative">
                        <div
                            class="leading-none font-medium pr-4"
                            :style="{ fontSize: sectionTitleTextSize }"
                        >
                            <div>Ready to disrupt?</div>
                            <div>Here's our info.</div>
                        </div>
                        <div
                            class="decoration flex justify-center items-center leading-[1] text-[#ff0000]"
                            :style="{ fontSize: sectionDecorationTextSize }"
                        ></div>
                    </div>

                    <!-- 联系方式 -->
                    <div class="pt-3">
                        <div class="pt-2">📧 Email: info@bwi.com</div>
                        <div class="pt-2">📞 Tel: +63-123-456-7890</div>
                        <div class="pt-2">
                            📍 Address: N.Bacalso Ave., Corner V. Rama St., Cebu City, Philippines
                        </div>
                        <div class="pt-2">We'll get back to you within 1–2 business days.</div>
                    </div>
                </div>
            </div>

            <!-- 表单间距 -->
            <div class="md:hidden w-full h-[4vw] max-h-[100px]"></div>

            <CustomGoogleForm class="md:flex-1"></CustomGoogleForm>

        </div>

        <!-- 底部间距 -->
        <div class="w-full h-[4vw] max-h-[100px]"></div>
    </BaseLayout>
</template>

<style scoped>
.decoration:after {
    content: '\002F';
    position: absolute;
    top: -5%;
    color: #ff0000;
}
</style>
