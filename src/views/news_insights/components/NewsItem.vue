<script setup lang="ts">
import { computed } from "vue"
import { useRouter } from 'vue-router';
import { INewsItem } from './types'; // 假设你有一个单独的类型文件
import { useResponsiveFontSize } from '@/composables/useResponsiveFontSize.js'
interface Props {
    info: INewsItem;
}

const props = defineProps<Props>();

// 如果需要默认值，可以在这里定义
const defaultInfo: INewsItem = {
    id: 0,
    title: '',
    time: '',
    link: '',
    src: '',
    summary: '',
};

// 确保传入的 info 是有效的 INewsItem 类型
const newsItem = computed(() => ({
    ...defaultInfo,
    ...props.info,
}));
const { fontSizeClamp: TimeTextSize } = useResponsiveFontSize(15, 36)
const { fontSizeClamp: titleTextSize } = useResponsiveFontSize(20, 60)
const { fontSizeClamp: descTextSize } = useResponsiveFontSize(13, 28)

const router = useRouter();
const gotoArticleDetail = () => {
    router.push({ name: 'article-detail', params: { articleId: String(newsItem.value.id) } });
}
</script>

<template>
    <div class="news-item px-4 py-8  xl:py-16 xl:flex " @click.stop="gotoArticleDetail">
        <div class="image-container cursor-pointer">
            <img class="w-[30vw] max-w-[400px] min-w-[160px]" :src="newsItem.src" alt="News Image">
        </div>
        <div class="text-container flex-1 xl:pl-10 xl:flex xl:flex-col xl:justify-between ">
            <div class="time xl:pt-1 pt-4 leading-none text-[#707070] py-2 cursor-pointer" :style="{fontSize: TimeTextSize}">{{ newsItem.time }}</div>
            <div class="max-w-[700px] cursor-pointer">
                <div class="max-w-[700px] title font-medium line-clamp-2 leading-none" :style="{fontSize: titleTextSize}">{{ newsItem.title }}</div>
                <div class="max-w-[635px] summary line-clamp-2  leading-normal" :style="{fontSize: descTextSize}">{{ newsItem.summary }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.news-item {
    border-top: 1px solid #707070;
}




</style>
