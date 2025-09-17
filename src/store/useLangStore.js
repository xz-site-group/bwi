import { ref, computed, watchEffect } from 'vue'
import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n';

export const useLangStore = defineStore('lang-store', () => {
    // 定义支持的语言列表
    const supportedLanguages = [
        { code: 'en', name: 'English' },
        { code: 'zh', name: '中文' },
    ]

    // 定义 localStorage 的键名
    const LANGUAGE_KEY = 'lang'

    // 获取系统语言
    const getSystemLang = () => {
        const systemLang = navigator.language || navigator.userLanguage
        return systemLang.split('-')[0].toLowerCase() // 获取语言代码并转换为小写
    }
    const { locale } = useI18n();
    // 从 localStorage 获取当前语言，如果没有则根据系统语言设置，最后回退到默认语言
    const defaultLang = 'en'
    const currentLang = ref(
        localStorage.getItem(LANGUAGE_KEY) ||
            supportedLanguages.find((lang) => lang.code === getSystemLang())?.code ||
            defaultLang,
    )
    locale.value = currentLang.value; // 同步 vue-i18n 的语言设置
    // 设置当前语言
    const setCurrentLang = (langCode) => {
        const lang = supportedLanguages.find((lang) => lang.code === langCode)
        if (lang) {
            currentLang.value = langCode
            localStorage.setItem(LANGUAGE_KEY, langCode) // 保存到 localStorage
            locale.value = currentLang.value; // 同步 vue-i18n 的语言设置
        }
    }

    // 获取当前语言名称
    const currentLangName = computed(() => {
        const lang = supportedLanguages.find((lang) => lang.code === currentLang.value)
        return lang ? lang.name : 'Unknown'
    })

    // 获取当前语言
    const getCurrentLang = () => {
        return currentLang.value
    }

    // watchEffect(() => {
    //     locale.value = currentLang.value; // 同步 vue-i18n 的语言设置
    // })
    // 返回状态和操作
    return {
        currentLang,
        currentLangName,
        setCurrentLang,
        getCurrentLang,
        supportedLanguages, // 提供语言列表
    }
})
