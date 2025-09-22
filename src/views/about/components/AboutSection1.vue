<script setup lang="ts">
import SectionTitle from '@/components/SectionTitle.vue'
</script>

<template>
    <section class="relative">
        <div class="container px-4 pt-[6.5vw] mx-auto">
            <SectionTitle>
                <div class="text-[5.4vw] lg:text-7xl font-bold leading-[1] max-w-[90%]">
                    <div>{{ $t('aboutUs.title1') }}</div>
                    <div>{{ $t('aboutUs.title2') }}</div>
                </div>
                <div class="w-2 h-[2vw] max-h-[100px]"></div>
                <div class="text-[clamp(12px,3vw,32px)] lg:text-5xl pr-30 max-w-[80%]">
                    <p>{{ $t('aboutUs.description1') }}</p>
                </div>
            </SectionTitle>
            <div class="h-[3vw] max-h-[100px]"></div>
            <div class="text-[clamp(10px,2vw,32px)] lg:text-4xl flex justify-end">
                <div class="lg:w-[80%] xl:w-[60%] leading-[1]">
                    <div>
                        <p>{{ $t('aboutUs.description2') }}</p>
                    </div>
                    <div class="h-[1.5vw] max-h-[30px]"></div>
                    <div>
                        <p>{{ $t('aboutUs.description3') }}</p>
                    </div>
                    <div class="h-[1.5vw] max-h-[30px]"></div>
                    <div>
                        <p>{{ $t('aboutUs.description4') }}</p>
                    </div>
                </div>
            </div>
            <div class="h-[3vw] max-h-[100px]"></div>
            <!--      企业  介绍-->
            <div class="text-[clamp(10px,2vw,32px)] flex justify-end lg:text-4xl">
                <ul class="lg:w-[80%] xl:w-[60%] leading-[1]">
                    <li
                        class="pt-1"
                        data-i18n-text="- Headquartered in the Philippines, servicing ACR Towers and beyond"
                    >
                        {{ $t('aboutUs.list1') }}
                    </li>
                    <li
                        class="pt-1"
                        data-i18n-text="- Managing both on-site and online advertising channels"
                    >
                        {{ $t('aboutUs.list2') }}
                    </li>
                    <li
                        class="pt-1"
                        data-i18n-text="- Providing full-service media leasing, campaign execution, and platform development"
                    >
                        {{ $t('aboutUs.list3') }}
                    </li>
                </ul>
            </div>
            <!--  end 企业介绍 -->
            <div class="h-[3vw] max-h-[100px]"></div>
        </div>
    </section>
</template>

<style scoped></style>
