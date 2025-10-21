<script setup lang="ts">

import BasicAd from '@/components/BasicAd.vue'
import newsBg from '@/assets/images/news_insights/news_bg_1920.png'
import { useResponsiveFontSize } from '@/composables/useResponsiveFontSize.js'

const { fontSizeClamp: baseAdTextSize } = useResponsiveFontSize(20, 96)
</script>

<template>
    <BasicAd :src="newsBg">
        <div class="" :style="{ fontSize: baseAdTextSize }">
            <div class="">PROVEN RESULTS.</div>
            <div class="flex flex-row justify-end">IMPACTFUL STORIES.</div>
        </div>
    </BasicAd>
</template>

<style scoped>

</style>
