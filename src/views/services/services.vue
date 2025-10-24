<script setup>
import BaseLayout from '@/layout/BaseLayout.vue'
import BasicAd from '@/components/BasicAd.vue'
import ServicesSection from '@/views/services/components/ServicesSection.vue'


import  baseAdImg375 from '@/assets/images/services/services_bg_375.webp'
import  baseAdImg563 from '@/assets/images/services/services_bg_563.webp'
import  baseAdImg750 from '@/assets/images/services/services_bg_750.webp'
import  baseAdImg960 from '@/assets/images/services/services_bg_960.webp'
import  baseAdImg1125 from '@/assets/images/services/services_bg_1125.webp'
import  baseAdImg1440 from '@/assets/images/services/services_bg_1440.webp'
import  baseAdImg1500 from '@/assets/images/services/services_bg_1500.webp'
import  baseAdImg1920 from '@/assets/images/services/services_bg_1920.webp'
import  baseAdImg3840 from '@/assets/images/services/services_bg_3840.webp'

const adSrcset = [
    {
        url: baseAdImg375,
        media: '(max-width: 375px)',
        type: 'image/webp'
    },
    {
        url: baseAdImg563,
        media: '(max-width: 563px)',
        type: 'image/webp'
    },
    {
        url: baseAdImg750,
        media: '(max-width: 750px)',
        type: 'image/webp'
    },
    {
        url: baseAdImg960,
        media: '(max-width: 960px)',
        type: 'image/webp'
    },
    {
        url: baseAdImg1125,
        media: '(max-width: 1125px)',
        type: 'image/webp'
    },
    {
        url: baseAdImg1440,
        media: '(max-width: 1440px)',
        type: 'image/webp'
    },
    {
        url: baseAdImg1500,
        media: '(max-width: 1500px)',
        type: 'image/webp'
    },
    {
        url: baseAdImg1920,
        media: '(max-width: 1920px)',
        type: 'image/webp'
    },

    {
        url: baseAdImg3840,
        media: '(max-width: 3840px)',
        type: 'image/webp'
    }
]

import { useResponsiveFontSize } from '@/composables/useResponsiveFontSize.js'

const { fontSizeClamp: bannalTextSize } = useResponsiveFontSize(20, 96)
</script>

<template>
    <BaseLayout>
        <BasicAd :src="baseAdImg1920" :srcset="adSrcset">
            <div class="" :style="{ fontSize: bannalTextSize }">
                <div data-lang-text="FROM SCREENS TO STREETS"> {{ $t('services.banner_text_1') }}</div>
                <div class="text-right" data-lang-text="FROM ADS TO EXPERIENCES."> {{ $t('services.banner_text_2') }}</div>
            </div>
        </BasicAd>
        <!--   01  -->
        <ServicesSection>
            <template v-slot:decorative-number>01</template>
            <template v-slot:title>
                <div>
                    <div data-lang-text="Media Leasing">{{ $t('services.section_1_title_1') }}</div>
                    <div data-lang-text="Representation">{{ $t('services.section_1_title_2') }}</div>
                </div>
            </template>
            <div>
                <p data-lang-text="">
                    {{ $t('services.section_1_content') }}
                </p>
            </div>
        </ServicesSection>
        <!--   end 01 -->
        <!--   02  -->
        <ServicesSection>
            <template v-slot:decorative-number>02</template>
            <template v-slot:title>
                <div>
                    <div data-lang-text="活动策划">{{ $t('services.section_2_title_1') }}</div>
                    <div data-lang-text="& Event Execution">{{ $t('services.section_2_title_2') }}</div>
                </div>
            </template>
            <div>
                <p>
                    {{ $t('services.section_2_content') }}
                </p>
            </div>
        </ServicesSection>
        <!--   end 02 -->

        <!--   03  -->
        <ServicesSection>
            <template v-slot:decorative-number>03</template>
            <template v-slot:title>
                <div>

                    <div data-lang-text="Creative Direction">{{ $t('services.section_3_title_1') }}</div>
                    <div data-lang-text="& Production Oversight">{{ $t('services.section_3_title_2') }}</div>
                </div>
            </template>
            <div>
                <p>
                    {{ $t('services.section_3_content') }}
                </p>
            </div>
        </ServicesSection>
        <!--   end 03 -->

        <!--   04  -->
        <ServicesSection>
            <template v-slot:decorative-number>04</template>
            <template v-slot:title>
                <div>

                    <div data-lang-text="Digital Platform">{{ $t('services.section_4_title_1') }}</div>
                    <div data-lang-text="Development & Support">{{ $t('services.section_4_title_2') }}</div>
                </div>
            </template>
            <div>
                <p>
                    {{ $t('services.section_4_content') }}
                </p>
            </div>
        </ServicesSection>
        <!--   end 04 -->
    </BaseLayout>
</template>

<style scoped></style>
