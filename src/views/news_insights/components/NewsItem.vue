<script setup lang="ts">
import { computed } from "vue"
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
    content: '',
};

// 确保传入的 info 是有效的 INewsItem 类型
const newsItem = computed(() => ({
    ...defaultInfo,
    ...props.info,
}));
const { fontSizeClamp: TimeTextSize } = useResponsiveFontSize(15, 36)
const { fontSizeClamp: titleTextSize } = useResponsiveFontSize(20, 60)
const { fontSizeClamp: descTextSize } = useResponsiveFontSize(13, 28)
</script>

<template>
    <div class="news-item  p-4 xl:p-6 xl:flex ">
        <div class="image-container ">
            <img class="w-[30vw] max-w-[400px] min-w-[160px]" :src="newsItem.src" alt="News Image">
        </div>
        <div class="text-container flex-1 xl:pl-10 xl:flex xl:flex-col xl:justify-between">
            <div class="time pt-1 leading-none text-[#707070] py-2" :style="{fontSize: TimeTextSize}">{{ newsItem.time }}</div>
            <div>
                <div class="title font-medium line-clamp-2" :style="{fontSize: titleTextSize}">{{ newsItem.title }}</div>
                <div class="content line-clamp-2 " :style="{fontSize: descTextSize}">{{ newsItem.content }}</div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.news-item {
    border-top: 1px solid #707070;
}




</style>
