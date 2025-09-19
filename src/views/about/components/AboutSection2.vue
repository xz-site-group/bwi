<script setup>
import AbcBg375 from "@/assets/images/about/abc_bg_375.webp";
import AbcBg563 from "@/assets/images/about/abc_bg_563.webp";
import AbcBg750 from "@/assets/images/about/abc_bg_750.webp";
import AbcBg1920 from "@/assets/images/about/abc_bg_1920.webp";
import AbcBg3840 from "@/assets/images/about/abc_bg_3840.webp";
</script>

<template>
    <div class="relative bg-black">
        <picture>
            <source media="(max-width: 375px)" :srcset="AbcBg375">
            <source media="(max-width: 563px)" :srcset="AbcBg563">
            <source media="(max-width: 750px)" :srcset="AbcBg750">
            <source media="(max-width: 1920px)" :srcset="AbcBg1920">
            <source media="(min-width: 1921px)" :srcset="AbcBg3840">
            <img :src="AbcBg1920" alt="Responsive Image">
        </picture>
        <div class="absolute top-0 left-0 z-10 w-full h-full">
            <div class="h-[3vw] max-h-[100px]"></div>
            <div class="container px-4 h-full mx-auto">
                <div class="w-full flex justify-end text-black">
                    <div class="text-[clamp(14px,3vw,32px)] lg:text-4xl lg:w-[80%] xl:w-[60%]">
                        <ul class="leading-[1]">
                            <li class="pt-4" data-i18n-text="- Headquartered in the Philippines, servicing ACR Towers and beyond">{{ $t('aboutUs.list1') }}</li>
                            <li class="pt-4" data-i18n-text="- Managing both on-site and online advertising channels">{{ $t('aboutUs.list2') }}</li>
                            <li class="pt-4" data-i18n-text="- Providing full-service media leasing, campaign execution, and platform development">{{ $t('aboutUs.list3') }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* 可以在这里添加一些样式 */
</style>
