<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useResponsiveFontSize } from '@/composables/useResponsiveFontSize.js'
import { NEWS_DATA } from './const'

const props = defineProps({
    articleId: String,
})

const NEWS_DATA1 = ref(NEWS_DATA)
const articleInfo = computed(() => {
    return NEWS_DATA1.value.find((item) => String(item.id) === String(props.articleId))
})

const { fontSizeClamp: TimeTextSize } = useResponsiveFontSize(15, 36)
const { fontSizeClamp: titleTextSize } = useResponsiveFontSize(20, 60)
const { fontSizeClamp: descTextSize } = useResponsiveFontSize(13, 28)

const { fontSizeClamp: contentTextSize } = useResponsiveFontSize(12, 18)

</script>

<template>
    <div class="news-content">
        <!--        图片，标题，摘要-->

        <div class="container m-auto">
            <div class="px-4 py-8 xl:py-16 pl-4 xl:px-16">
                <div class="image-container cursor-pointer">
                    <img class="max-w-full" :src="articleInfo.src" alt="News Image" />
                </div>
                <div class="text-container flex-1">
                    <div
                        class="time pt-4 xl:pt-10 leading-none text-[#707070] py-2 cursor-pointer"
                        :style="{ fontSize: TimeTextSize }"
                    >
                        {{ articleInfo.time }}
                    </div>
                    <div class="cursor-pointer pt-4 xl:pt-10">
                        <div
                            class="title font-medium line-clamp-2 leading-none"
                            :style="{ fontSize: titleTextSize }"
                        >
                            {{ articleInfo.title }}
                        </div>
                        <div
                            class="summary line-clamp-2 leading-normal"
                            :style="{ fontSize: descTextSize }"
                        >
                            {{ articleInfo.summary }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--   end     图片，标题，摘要-->
        <div class="container m-auto">
            <div class="px-4  pl-4 xl:px-16" :style="{ fontSize: contentTextSize }">
                <div v-html="articleInfo.content"></div>
                <div class="w-full h-[4vw] max-h-[40px]"></div>
                <div v-html="articleInfo.content"></div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.news-content {
    border-top: 1px solid #707070;
}
</style>
