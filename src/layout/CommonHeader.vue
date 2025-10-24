<script setup >
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
import Logo from '../assets/images/common/logo.png'
import LangSvg from '../assets/images/common/lang.svg'

import { useRoute } from 'vue-router'
import { useLangStore } from '@/store/useLangStore'
const langStore = useLangStore()
const { currentLangName} = storeToRefs(langStore)
const { setCurrentLang, supportedLanguages } = langStore
const props = defineProps({
    staticRoutePath: {
        type: String,
        default: '',
    },
})

const route = useRoute()

const currentPath = computed(() => route.path)
const isMenuOpen = ref(false)
function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
}
const navTextIsI18n = ref(true)
const navList = ref([
    {
        key: 'about-us',
        name: 'About Us',
        i18nKey: 'nav.aboutUs',
        path: '/about',
    },
    {
        key: 'services',
        name: 'Services',
        i18nKey: 'nav.services',
        path: '/services',
    },
    {
        key: 'media-inventory',
        name: 'Media Inventory',
        i18nKey: 'nav.mediaInventory',
        path: '/media-inventory',
    },
    {
        key: 'news-insights',
        name: 'News & Insights',
        i18nKey: 'nav.newsInsights',
        path: '/news-insights',
    },
    {
        key: 'contact-us',
        name: 'Contact Us',
        i18nKey: 'nav.contactUs',
        path: '/contact',
    },
])
const selectedNavPath = ref(props.staticRoutePath || currentPath.value)
const itemNavHandler = () => {
    isMenuOpen.value = false
}

const isShowLangPanel = ref(false)
const openLangPanel = () => {
    isShowLangPanel.value = !isShowLangPanel.value
}
const closeLangPanel = (event) => {
    // 检查点击的元素是否在语言面板或触发按钮内部
    isShowLangPanel.value = false
}

//
const changeLang = (lang) => {
    isShowLangPanel.value = false
    setCurrentLang(lang)
}
const scrollPosition = ref(0);
// 监听滚动事件
const handleScroll = () => {
    scrollPosition.value = window.scrollY;
};
// 计算背景色的透明度
const headerStyle = computed(() => {
    const opacity = Math.min(scrollPosition.value / 200, 0.8);
    return {
        backgroundColor: `rgba(0, 0, 0, ${opacity})`,
    };
});
onMounted(() => {
    // 添加全局点击事件监听
    document.addEventListener('click', closeLangPanel)
    window.addEventListener('scroll', handleScroll);

})

onUnmounted(() => {
    // 移除全局点击事件监听
    document.removeEventListener('click', closeLangPanel)
    window.removeEventListener('scroll', handleScroll);
})



</script>

<template>
    <header id="header" class="header bg-transparent text-white w-full" :style="headerStyle">
        <!--        h-14 sm:h-16 lg:h-20 xl:h-[100px] -->
        <div
            class="mx-auto h-[12vw] max-h-[100px] min-h-[56px] flex flex-wrap items-center justify-between mt-0 py-2 px-[20px] sm:px-10"
        >
            <!-- logo -->
            <div class="flex items-center">
                <a
                    class="text-white no-underline hover:no-underline font-bold text-xl lg:text-2xl flex items-center"
                    href="/"
                >
                    <img
                        :src="Logo"
                        class="w-[125px] sm:w-[200px] xl:w-[250px]"
                        alt="logo"
                        decoding="async"
                    />
                </a>
            </div>
            <!-- nav-toggle -->
            <div class="block xl:hidden pr-4">
                <button
                    id="nav-toggle"
                    class="flex items-center p-1 text-white hover:text-white focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                    @click="toggleMenu"
                >
                    <svg
                        class="fill-current h-6 w-6"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>

            <!-- menu -->
            <div
                class="w-full flex-grow xl:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-transparent text-black p-4 lg:p-0 z-20"
                role="button"
                tabindex="0"
                id="nav-content"
            >
                <div class="list-reset xl:flex justify-end flex-1 items-center text-white">
                    <RouterLink
                        v-for="item in navList"
                        :key="item.key"
                        :to="item.path"
                        class="item-nav pc-item-nav font-bold"
                        :class="{ active: selectedNavPath === item.path }"
                        @click="itemNavHandler(item)"
                    >
                        <div
                            class="content px-2 py-2"
                            :class="{ active: selectedNavPath === item.path }"
                        >
                            {{ navTextIsI18n ? $t(item.i18nKey) : item.name }}
                        </div>
                    </RouterLink>
                </div>
            </div>

            <!--      语音      -->
            <div class="pl-16 hidden xl:block relative">
                <div class="flex flex-row items-center cursor-pointer" @click.stop="openLangPanel">
                    <img :src="LangSvg" alt="" class="w-4 h-4 inline-block" />
                    <span class="pl-1" style="padding-bottom: 2px">{{ currentLangName }}</span>
                </div>
                <div v-show="isShowLangPanel" class="absolute z-9999 ">
                    <div class="bg-white text-black shadow-lg rounded-md overflow-hidden">
                        <div class="px-4 py-2 cursor-pointer  hover:bg-gray-100 transition duration-150 ease-in-out" v-for="item in supportedLanguages" :key="item.code" @click.stop="changeLang(item.code)">
                            {{ item.name }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- Mobile Menu Overlay -->
    <div
        v-if="isMenuOpen"
        class="fixed inset-0 bg-black bg-opacity-50 z-50"
        @click="isMenuOpen = false"
    >
        <div class="h-full min-w-[186px] px-2 max-w-xs bg-white absolute right-0 top-0">
            <div class="text-black pt-4">
                <RouterLink
                    v-for="item in navList"
                    :key="item.key"
                    :to="item.path"
                    custom
                    v-slot="{ navigate }"
                    class="item-nav mobile-item-nav px-4 py-2 block font-bold"
                    :class="{ active: selectedNavPath === item.path }"
                    @click.stop="itemNavHandler(item)"
                >
                    <div @click="navigate">
                        <div
                            class="mobile-item-nav--content"
                            :class="{ active: selectedNavPath === item.path }"
                        >
                            {{ navTextIsI18n ? $t(item.i18nKey) : item.name }}
                        </div>
                    </div>
                </RouterLink>

                <!-- Language Selector -->
                <div class="pt-4"></div>
                <div class="pl-4 xl:block relative text-center border-t-2">
                    <!-- Language Selector Button -->
                    <div class="flex pt-4 flex-row items-center justify-center cursor-pointer"  @click.stop="openLangPanel">
                        <img :src="LangSvg" alt="Language Icon" class="w-4 h-4 inline-block mr-2" />
                        <span class="text-base ">{{ currentLangName }}</span>
                        <svg
                            class="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>
                    </div>

                    <!-- Language Panel -->
                    <div v-show="isShowLangPanel" class="absolute z-9999 mt-2 w-36 bg-white shadow-lg rounded-md">
                        <div class="py-2">
                            <div
                                class="px-4 py-2 cursor-pointer hover:bg-gray-100 transition duration-150 ease-in-out"
                                v-for="item in supportedLanguages"
                                :key="item.code"
                                @click.stop="changeLang(item.code)"
                            >
                                <div class="flex items-center justify-center">
                                    <span class="text-sm	 ">{{ item.name }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Language Selector -->
            </div>


        </div>
    </div>
  <!--    end mobile menu -->
</template>

<style scoped>
#header {
    backdrop-filter: blur(2px); /* 添加模糊效果以增强透明度视觉效果 */
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.65);
}

.item-nav {
    position: relative;
}
.pc-item-nav {
    margin: 0 10px;
}
.pc-item-nav:hover {
    transform: scale(1.1);
}

.pc-item-nav.active .content {
    margin: 0 10px;
    background: #ff0000;
}

.pc-item-nav.active::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 30px; /* 设置左侧背景图的宽度 */
    height: 100%;
    background: url('@/assets/images/common/nav-active.svg') no-repeat left;
    background-size: cover;
    z-index: -1; /* 确保背景图在文字下方 */
}

.pc-item-nav.active::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 20px; /* 设置右侧背景图的宽度 */
    height: 100%;
    background: url('@/assets/images/common/nav-active.svg') no-repeat right;
    background-size: cover;
    z-index: -1; /* 确保背景图在文字下方 */
}
.mobile-item-nav {
    text-align: center;
}
.mobile-item-nav.active {
    background: #ff0000;
    color: #fff;
}
.mobile-item-nav.active:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 100%;
    z-index: 1;
    background-size: cover;
    border-top: 20px solid #fff; /* 上边框透明 */
    border-bottom: 20px solid #ff0000; /* 下边框透明 */
    border-left: 5px solid #fff; /* 左边框为白色 */
    border-right: 5px solid #ff0000;
}

.mobile-item-nav.active:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 10px;
    height: 100%;
    z-index: 1;
    background-size: cover;
    border-top: 20px solid #ff0000; /* 上边框透明 */
    border-bottom: 20px solid #fff; /* 下边框透明 */
    border-left: 5px solid #ff0000; /* 左边框为白色 */
    border-right: 5px solid #fff;
}
</style>
