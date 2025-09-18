<script setup lang="ts">
import HomeBanner from '@/assets/images/home/home-bg-nomask-s.jpg'
</script>

<template>
    <div class="banner relative" style="height: 100dvh;">
        <div class="absolute top-0 left-0 w-full h-full -z-50">
            <img :src="HomeBanner" alt="" style="width: 100%; height: 100%" />
        </div>

        <div class="absolute top-0 left-0 z-10 w-full h-full bg-black bg-opacity-50"></div>
        <div class="absolute top-1/2 left-0 transform -translate-y-1/2 z-20 w-full pb-20 lg:pb-28">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped></style>
