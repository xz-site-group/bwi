<script setup>
import MediaKit from '@/assets/images/media_inventory/media_kit.png'
import MediaKitPDF from '@/assets/documents/media_kit.pdf' // 假设你的PDF文件路径
import { useResponsiveFontSize } from '@/composables/useResponsiveFontSize.js'

const { fontSizeClamp: titleTextSize } = useResponsiveFontSize(34, 80)
const { fontSizeClamp: descTextSize } = useResponsiveFontSize(18, 32)
const { fontSizeClamp: btnTextSize } = useResponsiveFontSize(13, 22)
const { fontSizeClamp: prviewTextSize } = useResponsiveFontSize(16, 32)
</script>

<template>
    <section class="bg-[#EFEFEF]">
        <div class="container m-auto">
            <div class="md:flex md:flex-row-reverse md:items-center">
                <div class="md:flex-1">
                    <img :src="MediaKit" alt="" />
                </div>
                <div class="md:flex-1 px-6 py-2 md:p-10">
                    <div class="font-medium" :style="{ fontSize: titleTextSize }">Media Kit</div>
                    <div class="leading-none" :style="{ fontSize: descTextSize }">
                        <p>Download our Media Kit</p>
                        <p>for full specifications and rates.</p>
                    </div>
                    <div class="flex flex-row items-center relative pt-4 pl-[10px]">
                        <div
                            class="relative custom-btn font-bold w-[140px] h-10 flex flex-row justify-center items-center cursor-pointer"
                        >
                            <a
                                class="absolute z-10 p-2 px-4 cursor-pointer"
                                :style="{ fontSize: btnTextSize }"
                                download
                                :href="MediaKitPDF"
                                >Download</a
                            >
                        </div>
                        <a :href="MediaKitPDF" target="_blank" class="pl-10 cursor-pointer underline"  :style="{ fontSize: prviewTextSize }"
                            >View Online</a
                        >
                    </div>
                </div>
            </div>
            <div class="md:hidden w-full h-[4vw] max-h-[40px]"></div>
        </div>
    </section>
</template>

<style scoped>
.custom-btn {
    //background: #ff0000;
    color: #fff;
}

.custom-btn:after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: #ff0000;
    color: white;
    z-index: 1;
    transform: skewX(-15deg);
}
</style>
