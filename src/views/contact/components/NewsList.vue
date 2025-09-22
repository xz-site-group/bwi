<script setup lang="ts">
import NewsItem from '@/views/news_insights/components/NewsItem.vue'
import {NEWS_DATA} from "./const"
</script>

<template>
<section   class="relative" >
    <div class="container m-auto px-2 xl:w-[60%]">
        <NewsItem v-for="item in NEWS_DATA" :key="item.id" :info="item"></NewsItem>
    </div>

</section>
</template>

<style scoped>

</style>
