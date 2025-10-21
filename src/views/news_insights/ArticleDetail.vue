<script setup >

import BaseLayout from '@/layout/BaseLayout.vue'
import NewsAd from '@/views/news_insights/components/NewsAd.vue'
import NewsPageTitle from '@/views/news_insights/components/NewsPageTitle.vue'
import NewsContent from '@/views/news_insights/components/NewsContent.vue'
defineProps({
    articleId: String,
})

</script>

<template>

    <BaseLayout>
        <NewsAd></NewsAd>
        <div class="w-full h-[4vw] max-h-[100px]"></div>
        <NewsPageTitle></NewsPageTitle>
        <div class="w-full h-[4vw] max-h-[70px]"></div>
        <NewsContent :articleId="articleId"></NewsContent>
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
