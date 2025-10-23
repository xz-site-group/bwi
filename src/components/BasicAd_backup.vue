<script setup>
import { ref, onMounted } from 'vue'
import HeaderPlaceHandler from '@/layout/HeaderPlaceHandler.vue'
// 定义 props 来接收 srcset 字符串
const props = defineProps({
    srcset: {
        type: Array,
        default() {
            return []
        },
    },
    src: {
        type: String,
        default: '',
    },
    showLogo: {
        type: Boolean,
        default: true,
    },
})
const basicAdRef = ref(null);
let basicAdHeight = 0;
let headerHeight = 0;

const calculateHeights = () => {
    const basicAdElement = basicAdRef.value;
    const headerElement = document.getElementById('header');

    if (basicAdElement) {
        basicAdHeight = basicAdElement.offsetHeight;
    }
    if (headerElement) {
        headerHeight = headerElement.offsetHeight;
    }
};

const jump = () => {
    if (basicAdHeight > 0 && headerHeight > 0) {
        window.scrollTo({
            top: basicAdHeight - headerHeight,
            behavior: 'smooth' // 平滑滚动效果
        });
    }
};

// 在页面加载时计算高度
onMounted(() => {
    calculateHeights();
});
</script>

<template>
    <!-- 这是一个广告组件。这个组件，应该包含一张图片或者一张视频   -->
    <section ref="basicAdRef" class="relative basic-ad h-[48vw] lg:h-[100dvh] overflow-hidden" >
        <div class="absolute top-0 left-0 w-full h-full -z-10">
            <img :src="props.src" alt="广告图" class="w-full h-full object-cover" />
        </div>
        <div class="absolute top-0 left-0 z-10 w-full h-full bg-black bg-opacity-50">
            <div
                class="w-full h-full flex flex-col justify-center items-center text-white"
                v-if="showLogo || $refs.logo"
            >
                <HeaderPlaceHandler></HeaderPlaceHandler>
                <slot name="logo">
                    <div class="basic-ad-logo w-[6vw] h-[55%] bg-[#ff0000]"></div>
                </slot>
            </div>
        </div>
        <div class="absolute top-1/2 left-0 transform -translate-y-1/2 z-20 w-full lg:pb-28">
            <div class="container px-10 md:px-16 lg:px-20 mx-auto text-white lg:w-[80%]">
                <HeaderPlaceHandler></HeaderPlaceHandler>
                <slot></slot>
            </div>
        </div>
        <!--    start arrow    -->
        <div class="hidden lg:block absolute bottom-10 left-1/2 -translate-x-1/2 z-30" @click="jump">
            <button class="scroll-hint animate-bounce text-white hover:text-gold transition-colors">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="square"
                    stroke-linejoin="miter"
                >
                    <path d="M12 4v16m0 0l-7-7m7 7l7-7" />
                </svg>
            </button>
        </div>
        <!--    end arrow    -->
    </section>
</template>

<style scoped>
.basic-ad {
    max-height: 100dvh;
}

.basic-ad-logo {
    position: relative;
    transform: skewX(-15deg);
}
</style>
