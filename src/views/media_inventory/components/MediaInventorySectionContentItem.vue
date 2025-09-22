<script setup>
import { useResponsiveFontSize } from '@/composables/useResponsiveFontSize.js'
const { fontSizeClamp: titleTextSize } = useResponsiveFontSize(34, 60)
const { fontSizeClamp: subTitleTextSize } = useResponsiveFontSize(20, 36)
const { fontSizeClamp: descTextSize } = useResponsiveFontSize(13, 28)
</script>

<template>
    <div class="mod-1 pt-2 md:pt-9">
        <div class="img-wrap flex flex-col ">
            <slot name="img">
                <img :src="adImg01" alt="" />
            </slot>
        </div>
        <div class="px-4 ">
            <div class="title font-bold" :style="{fontSize:titleTextSize}">
                <slot name="title"></slot>
            </div>
            <div class="font-medium leading-[1]" :style="{fontSize:subTitleTextSize}">
                <slot name="sub-title"></slot>
            </div>
            <div :style="{fontSize:descTextSize}">
                <slot name="desc"></slot>
            </div>
            <div class="pt-6 lg:pt-12" :style="{fontSize:descTextSize}">
                <slot name="sub-desc"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
