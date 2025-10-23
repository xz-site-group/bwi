<script setup lang="ts">
import {  ref } from 'vue'


const topicOptions = ref([
    {
        value: 'Advertising',
        label: 'Advertising',
        text: 'Advertising',
    },
    {
        value: 'Customer Service',
        label: 'Customer Service',
        text: 'Advertising',
    }
])
// 表单状态
const formData = ref({
    topic: topicOptions.value[0].value,
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
        topic: topicOptions.value[0].value,
        name: '',
        email: '',
        message: ''
    }
    isSuccess.value = false
    isError.value = false
}
</script>

<template>
    <!-- 自定义表单 -->
    <div class=" m-auto px-4 ">
        <!-- 表单 -->
        <div v-if="!isSuccess && !isError" class="bg-white p-8 md:pt-0 rounded-[10px] ">
            <form @submit.prevent="handleSubmit" novalidate>
                <!-- Topic -->
                <div class="mb-4">
                    <label for="topic" class="block font-semibold text-gray-700 mb-2">{{ $t('contact.formTopicLabel') }} <span class="text-red-500">*</span></label>
                    <select
                        v-model="formData.topic"
                        id="topic"
                        required
                        class="w-full p-3 border-b border-gray-300 text-base focus:ring-0 focus:border-transparent outline-none transition-all"
                        placeholder="Select a topic"
                        data-lang-text="选择主题"
                    >
<!--                        <option disabled value="" data-lang-text="">Select a topic</option>-->
                        <option v-for="(item, index) in topicOptions" :key="index" :value="item.value" data-lang-text="投放广告"> {{ item.label }}</option>

                    </select>
                </div>

                <!-- Name -->
                <div class="mb-4">
                    <label for="name" class="block font-semibold text-gray-700 mb-2">{{ $t('contact.formNameLabel') }} <span class="text-red-500">*</span></label>
                    <input
                        v-model="formData.name"
                        type="text"
                        id="name"
                        required
                        class="w-full p-3 border-b border-gray-300 text-base focus:ring-0 focus:border-transparent outline-none transition-all"
                        :placeholder="$t('contact.formNamePlaceholder')"
                        title="Enter your name"
                        data-lang-text="请输入您的名字"
                    >
                </div>

                <!-- Email -->
                <div class="mb-4">
                    <label for="email" class="block font-semibold text-gray-700 mb-2">{{ $t('contact.formEmailLabel') }} <span class="text-red-500">*</span></label>
                    <input
                        v-model="formData.email"
                        type="email"
                        id="email"
                        required
                        class="w-full p-3 border-b border-gray-300 text-base focus:ring-0 focus:border-transparent outline-none transition-all"
                        :placeholder="$t('contact.formEmailPlaceholder')"
                        data-lang-text="请输入您的邮箱"
                    >
                </div>

                <!-- Message -->
                <div class="mb-4">
                    <label for="message" class="block font-semibold text-gray-700 mb-2">{{ $t('contact.formMessageLabel') }} </label>
                    <textarea
                        v-model="formData.message"
                        id="message"
                        required
                        rows="5"
                        class="w-full p-3 border border-gray-300 text-base resize-vertical focus:ring-0 focus:border-transparent outline-none transition-all"
                        :placeholder="$t('contact.formMessagePlaceholder')"
                        data-lang-text="请输入您的消息"
                    ></textarea>
                </div>

                <!-- 提交按钮 -->
                <div class="pl-[15px]">
                    <button
                        type="submit"
                        :disabled="isSubmitting"
                        class="submit-btn w-full text-white py-4 px-6 rounded-lg text-base font-medium hover:opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"

                    >
                        <span v-if="!isSubmitting">{{ $t('contact.formSubmitButton') }}</span>
                        <span v-else>{{ $t('contact.formSubmitButtonSubmitting') }}</span>
                    </button>
                </div>

            </form>
        </div>

        <!-- 成功消息 -->
        <div v-if="isSuccess" class="bg-green-50 border-2 border-green-400 rounded-lg p-8 text-center shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
            <div class="text-2xl mb-4">✅</div>
            <p class="text-xl font-semibold text-green-800 mb-6">{{ $t('contact.formSuccessTitle') }}</p>
            <p class="text-gray-700 mb-8">{{ $t('contact.formSuccessMessage') }}</p>
            <button
                @click="resetForm"
                style="background: #FF0000;color: #fff;"
                class="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-lg font-medium transition-all duration-200"
            >
                {{ $t('contact.formSuccessButton') }}
            </button>
        </div>

        <!-- 错误消息 -->
        <div v-if="isError" class="bg-red-50 border-2 border-red-400 rounded-lg p-8 text-center shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
            <div class="text-2xl mb-4">❌</div>
            <p class="text-xl font-semibold text-red-800 mb-6">{{ $t('contact.formErrorTitle') }}</p>
            <p class="text-gray-700 mb-8">{{ $t('contact.formErrorMessage') }} info@bwi.com</p>
            <button
                @click="resetForm"
                class="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-lg font-medium transition-all duration-200"
                style="background: #FF0000;color: #fff;"
            >
                {{ $t('contact.formErrorButton') }}
            </button>
        </div>

        <!-- Google 免责声明 -->
<!--        <p class="text-center text-xs text-gray-500 mt-8">-->
<!--            {{ $t('contact.googleDisclaimer') }}-->
<!--        </p>-->
    </div>
</template>

<style scoped>
/* 输入框样式 */
input, select {
    border: none;
    border-bottom: 1px solid #707070;
    background: transparent;
    box-shadow: none;
    outline: none;
    padding: 5px;
}

textarea {
    border: 1px solid #707070;
    background: transparent;
    box-shadow: none;
    outline: none;
}

/* 聚焦时的样式 */
input:focus, select:focus, textarea:focus {
    border-color: #4285f4;
    box-shadow: none;
    outline: none;
}
input:-internal-autofill-selected {
    background: transparent;
}
.submit-btn {
    position: relative;
    height: 48px;
    width: 180px;

}
.submit-btn:before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: #ff0000;
    z-index: 1;
    transform: skewX(-15deg);
}
.submit-btn span {
    position: absolute;
    z-index: 2;
}
</style>
