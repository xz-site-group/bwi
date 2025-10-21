<script setup >
import BaseLayout from '@/layout/BaseLayout.vue'
import NewsList from '@/views/news_insights/components/NewsList.vue'
import NewsPageTitle from '@/views/news_insights/components/NewsPageTitle.vue'
import NewsAd from '@/views/news_insights/components/NewsAd.vue'
</script>

<template>
<BaseLayout>
    <NewsAd></NewsAd>
    <div class="w-full h-[4vw] max-h-[100px]"></div>
    <NewsPageTitle></NewsPageTitle>
    <div class="w-full h-[4vw] max-h-[70px]"></div>
    <NewsList></NewsList>
    <div class="w-full h-[4vw] max-h-[100px]"></div>
</BaseLayout>
</template>

<style scoped>
.decoration:after {
    content: '\002F';
    position:  absolute;
    top: -5%;
    color: #ff0000;
}
</style>
