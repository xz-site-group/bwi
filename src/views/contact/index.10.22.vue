<script setup>
import { ref } from 'vue'
import BaseLayout from '@/layout/BaseLayout.vue'
import BasicAd from '@/components/BasicAd.vue'
import newsBg from '@/assets/images/contact/contact_ad_1920.png'
import { useResponsiveFontSize } from '@/composables/useResponsiveFontSize.js'

const { fontSizeClamp: baseAdTextSize } = useResponsiveFontSize(20, 96)
const { fontSizeClamp: sectionTitleTextSize } = useResponsiveFontSize(36, 90)
const { fontSizeClamp: sectionDecorationTextSize } = useResponsiveFontSize(72, 180)

// 表单状态
const formData = ref({
    topic: '',
    name: '',
    email: '',
    message: ''
})

const isSubmitting = ref(false)
const isSuccess = ref(false)
const isError = ref(false)

const formResponseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScFdpjbf2pcjCGTGpJ6HLaURmDCM-QtJIEteCoZ6_fKpo8Kyw/formResponse'

const handleSubmit = async () => {
    isSubmitting.value = true
    isSuccess.value = false
    isError.value = false

    const submitData = new FormData()
    submitData.append('entry.958710747', formData.value.topic)      // Topic
    submitData.append('entry.912145198', formData.value.name)       // Name
    submitData.append('entry.1684097434', formData.value.email)     // Email
    submitData.append('entry.807214667', formData.value.message)    // Message

    try {
        await fetch(formResponseUrl, {
            method: 'POST',
            mode: 'no-cors',
            body: submitData
        })
        isSuccess.value = true
    } catch (error) {
        console.error('提交错误:', error)
        isError.value = true
    } finally {
        isSubmitting.value = false
    }
}

const resetForm = () => {
    formData.value = {
        topic: '',
        name: '',
        email: '',
        message: ''
    }
    isSuccess.value = false
    isError.value = false
}
</script>

<template>
    <BaseLayout>
        <!-- 顶部广告 -->
        <BasicAd :src="newsBg">
            <div class="" :style="{ fontSize: baseAdTextSize }">
                <div class="">LET'S START</div>
                <div class="">YOUR NEXT CAMPAIGN.</div>
            </div>
        </BasicAd>

        <!-- 间距 -->
        <div class="w-full h-[4vw] max-h-[100px]"></div>

        <!-- 联系信息部分 -->
        <section class="relative xl:px-4">
            <div class="container m-auto px-4 lg:max-w-[60%] xl:max-w-[50%]">
                <!-- 标题 -->
                <div class="flex flex-row items-center relative">
                    <div class="leading-none font-medium pr-4" :style="{ fontSize: sectionTitleTextSize }">
                        <div>Ready to disrupt?</div>
                        <div>Here's our info.</div>
                    </div>
                    <div
                        class="decoration flex justify-center items-center leading-[1] text-[#ff0000]"
                        :style="{ fontSize: sectionDecorationTextSize }"
                    ></div>
                </div>

                <!-- 联系方式 -->
                <div class="pt-3">
                    <div class="pt-2">📧 Email: info@bwi.com</div>
                    <div class="pt-2">📞 Tel: +63-123-456-7890</div>
                    <div class="pt-2">
                        📍 Address: N.Bacalso Ave., Corner V. Rama St., Cebu City, Philippines
                    </div>
                    <div class="pt-2">We'll get back to you within 1–2 business days.</div>
                </div>
            </div>
        </section>

        <!-- 表单间距 -->
        <div class="w-full h-[4vw] max-h-[100px]"></div>

        <!-- 自定义表单 -->
        <div class="container m-auto px-4 lg:max-w-[60%] xl:max-w-[50%]">
            <!-- 表单 -->
            <div v-if="!isSuccess && !isError" class="bg-white p-8 rounded-[10px] shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                <form @submit.prevent="handleSubmit">
                    <!-- Topic -->
                    <div class="mb-6">
                        <label for="topic" class="block font-semibold text-gray-700 mb-2">Topic <span class="text-red-500">*</span></label>
                        <select
                            v-model="formData.topic"
                            id="topic"
                            required
                            class="w-full p-3 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        >
                            <option value="">Choose</option>
                            <option value="投放广告">投放广告</option>
                            <option value="客服">客服</option>
                        </select>
                    </div>

                    <!-- Name -->
                    <div class="mb-6">
                        <label for="name" class="block font-semibold text-gray-700 mb-2">Name <span class="text-red-500">*</span></label>
                        <input
                            v-model="formData.name"
                            type="text"
                            id="name"
                            required
                            class="w-full p-3 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        >
                    </div>

                    <!-- Email -->
                    <div class="mb-6">
                        <label for="email" class="block font-semibold text-gray-700 mb-2">Email <span class="text-red-500">*</span></label>
                        <input
                            v-model="formData.email"
                            type="email"
                            id="email"
                            required
                            class="w-full p-3 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        >
                    </div>

                    <!-- Message -->
                    <div class="mb-8">
                        <label for="message" class="block font-semibold text-gray-700 mb-2">Message <span class="text-red-500">*</span></label>
                        <textarea
                            v-model="formData.message"
                            id="message"
                            required
                            rows="5"
                            class="w-full p-3 border border-gray-300 rounded-lg text-base resize-vertical focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        ></textarea>
                    </div>

                    <!-- 提交按钮 -->
                    <button
                        type="submit"
                        :disabled="isSubmitting"
                        class="w-full bg-[#4285f4] text-white py-4 px-6 rounded-lg text-base font-medium hover:bg-[#3367d6] disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
                    >
                        <span v-if="!isSubmitting">提交</span>
                        <span v-else>提交中...</span>
                    </button>
                </form>
            </div>

            <!-- 成功消息 -->
            <div v-if="isSuccess" class="bg-green-50 border-2 border-green-400 rounded-lg p-8 text-center shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                <div class="text-2xl mb-4">✅</div>
                <p class="text-xl font-semibold text-green-800 mb-6">提交成功！</p>
                <p class="text-gray-700 mb-8">感谢您的反馈，我们将尽快与您联系。</p>
                <button
                    @click="resetForm"
                    class="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-lg font-medium transition-all duration-200"
                >
                    再次提交
                </button>
            </div>

            <!-- 错误消息 -->
            <div v-if="isError" class="bg-red-50 border-2 border-red-400 rounded-lg p-8 text-center shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                <div class="text-2xl mb-4">❌</div>
                <p class="text-xl font-semibold text-red-800 mb-6">提交失败</p>
                <p class="text-gray-700 mb-8">请稍后重试或直接发送邮件至 info@bwi.com</p>
                <button
                    @click="resetForm"
                    class="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-lg font-medium transition-all duration-200"
                >
                    重试
                </button>
            </div>

            <!-- Google 免责声明 -->
            <p class="text-center text-xs text-gray-500 mt-8">
                Never submit passwords through Google Forms. This content is neither created nor endorsed by Google.
            </p>
        </div>

        <!-- 底部间距 -->
        <div class="w-full h-[4vw] max-h-[100px]"></div>
    </BaseLayout>
</template>

<style scoped>
.decoration:after {
    content: '\002F';
    position: absolute;
    top: -5%;
    color: #ff0000;
}
</style>
