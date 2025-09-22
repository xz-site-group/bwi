<script setup>
import { useResponsiveFontSize } from '@/composables/useResponsiveFontSize'

import facebookSvg from "@/assets/images/common/facebook.svg";
import youtubeSvg from "@/assets/images/common/youtube.svg";
import xianjiSvg from "@/assets/images/common/tw.svg";
import twitterSvg from "@/assets/images/common/tw.svg";

const { fontSizeClamp: copyrightTextSize } = useResponsiveFontSize(13, 22)
const { fontSizeClamp: firstFontSizeClamp } = useResponsiveFontSize(17, 48 )
const { fontSizeClamp: twoFontSizeClamp } = useResponsiveFontSize(26, 105)
</script>

<template>
    <footer class="bg-black">
        <div class="h-[3vw] max-h-[100px]"></div>
        <section class="relative">
            <div
                class="container px-10 md:px-16 lg:px-20 mx-auto pt-2 text-white text-center leading-none border-t border-t-1 border-[#767676]"
            >
                <div class="">

                    <div class="flex flex-row justify-around pt-4" v-if="false">
                        <img :src="facebookSvg" alt="">
                        <img :src="twitterSvg" alt="">
                        <img :src="xianjiSvg" alt="">
                        <img :src="youtubeSvg" alt="">
                    </div>
                    <div class="copyright text-[#767676] pt-2" :style="{ fontSize: copyrightTextSize }">
                        © Copyright 2025 by Billboard Way Inc.
                    </div>
                </div>
            </div>
        </section>
        <section class="relative">
            <div
                class="container px-6  mx-auto m-8 text-white text-center leading-none "
            >
                <div
                    :style="{
                        fontSize: firstFontSizeClamp,
                    }"
                >
                    <div class="break-words text-wrap" data-i18n-text="We build channels that guide consumers through every journey, online and off.">
                        {{ $t('footer.weBuildChannels') }}
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div
                class="container  mx-auto m-8 text-white  text-center leading-none"
                :style="{
                    fontSize: twoFontSizeClamp
                }"
            >
                <div class="">
                    <span class="relative">@BW</span>
                    <span class="logo-text">I</span>
                    <span>&nbsp;</span>
                    <span data-i18n-text="WHERE BRANDS">{{ $t('footer.whereBrands') }}</span>
                </div>
                <div data-i18n-text="MEET REAL SPACE">{{ $t('footer.meetRealSpace') }}</div>
                <div data-i18n-text="FROM SCREEN TO STREET.">{{ $t('footer.fromScreenToStreet') }}</div>
                <div data-i18n-text="FROM AD TO EXPERIENCE.">{{ $t('footer.fromAdToExperience') }}</div>
            </div>
        </section>
        <div class="h-[3vw] max-h-[100px]"></div>
    </footer>
</template>

<style scoped>
.logo-text {
    display: inline-block;
    color: #ff0000;
    transform: skewX(-15deg);
}
</style>
