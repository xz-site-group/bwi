<script setup lang="ts">
// 定义 props 来接收 srcset 字符串
const props = defineProps<{
    srcset: string;
    src: any;
}>();
</script>

<template>
    <!-- 这是一个广告组件。这个组件，应该包含一张图片或者一张视频   -->
    <section class="relative basic-ad h-[45vw] lg:h-[100dvh] overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full -z-10">
            <img
                :src="props.src"
                alt="广告图"
                class="w-full h-full object-cover"
            />
        </div>
        <div class="absolute top-0 left-0 z-10 w-full h-full bg-black bg-opacity-50">
            <div class="w-full h-full flex flex-col justify-center items-center text-white">
                <slot name="logo">
                    <div class="basic-ad-logo w-[6vw] h-[55%] bg-[#ff0000]" ></div>
                </slot>
            </div>
        </div>
        <div class="absolute top-1/2 left-0 transform -translate-y-1/2 z-20 w-full pb-20 lg:pb-28">
            <div class="container px-10 md:px-16  lg:px-20 mx-auto m-8 text-white  lg:w-[80%]" >
                <slot ></slot>
            </div>
        </div>
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
