<script setup lang="ts">
import NewsItem from '@/views/news_insights/components/NewsItem.vue'
import { NEWS_DATA } from './const'
</script>

<template>
    <section class="relative">
        <!--
            设计稿上的尺寸是 1440，1440 相对于1920来说，相当于75%，所以这里取 75%的值。去掉边距，差不多是72%
        -->
        <div class="container m-auto px-2 xl:w-[72%]">
            <NewsItem v-for="item in NEWS_DATA" :key="item.id" :info="item"></NewsItem>
        </div>
    </section>
</template>

<style scoped></style>
