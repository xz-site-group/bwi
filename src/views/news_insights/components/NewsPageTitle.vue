<script setup lang="ts">
import { useResponsiveFontSize } from '@/composables/useResponsiveFontSize.js'
const { fontSizeClamp: sectionTitleTextSize } = useResponsiveFontSize(42, 90)
const { fontSizeClamp: sectionDecorationTextSize } = useResponsiveFontSize(84, 180)
</script>

<template>
    <section class="relative">
        <div class=" m-auto pl-4 xl:px-16">
            <div class="flex flex-row items-center relative">
                <div class=" leading-none  font-medium  pr-4 " :style="{fontSize:sectionTitleTextSize}">
                    <div>News &</div>
                    <div>Insights</div>
                </div>
                <div class="decoration flex justify-center items-center leading-[1] text-[#ff0000]" :style="{fontSize:sectionDecorationTextSize}"></div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.decoration:after {
    content: '\002F';
    position:  absolute;
    top: -5%;
    color: #ff0000;
}
</style>
