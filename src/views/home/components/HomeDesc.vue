<script setup lang="ts">

import { ref } from 'vue'
import { useRouter } from "vue-router"

const router = useRouter()

const gotoAbout = () => {
    router.push({ path: '/about' })
}

</script>

<template>
    <section class="  relative bg-center">
        <div class="container px-10 md:px-16  lg:px-20 mx-auto m-8 text-white  lg:w-[80%]">
            <div class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[105px] font-bold">
                <div data-i18n="home.paragraph1" data-i18n-description="Your Brand. 您的品牌。">{{ $t('home.paragraph1') }}</div>
                <div data-i18n="home.paragraph2" data-i18n-description="Our Channels. 我们的渠道。">{{ $t('home.paragraph2') }}</div>
                <div data-i18n="home.paragraph3" data-i18n-description="One Billboard Way. 一路直达。">{{ $t('home.paragraph3') }}</div>
            </div>

            <div class="pt-10 text-2xl lg:text-5xl" data-i18n="home.description" data-i18n-description="An integrated route to visibility, impact and growth. 一条通往可见性、影响力和增长的整合之路。">{{ $t('home.description') }}</div>
            <div class="pt-4 pl-[15px]">
                <div class="relative  custom-btn font-bold w-[180px] h-12 flex flex-row justify-center items-center cursor-pointer" @click="gotoAbout" data-i18n="home.button" data-i18n-description="Learn More 了解更多">{{ $t('home.button') }}</div>
            </div>
        </div>
    </section>
</template>

<style scoped>

.custom-btn {
    background: #ff0000;
    box-shadow: 0 5px 15px rgba(255, 0, 0, 0.3);
}
.custom-btn:before,
.custom-btn:after{
    content: '';
    position: absolute;
    top: 0;
    width: 15px;
    height: 100%;
    background: #ff0000;
    z-index: 1;
}
.custom-btn:before {
    left: -7px;
    transform: skewX(-15deg);
}
.custom-btn:after {
    right: -7px;
    transform: skewX(-15deg);
}
</style>
