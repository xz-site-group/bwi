<script setup lang="ts">
import HomeBanner from '@/assets/images/home/banner.png'
</script>

<template>
    <div class="banner relative">
        <img :src="HomeBanner" alt="" style="width: 100%; height: 100%" />
        <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>
    </div>
</template>

<style scoped></style>
