<script setup>
import BaseLayout from '@/layout/BaseLayout.vue'
import BasicAd from '@/components/BasicAd.vue'
import ServicesSection from '@/views/services/components/ServicesSection.vue'
import ServicesAdImg from '@/assets/images/services/services_bg_1920.webp'

import { useResponsiveFontSize } from '@/composables/useResponsiveFontSize.js'

const { fontSizeClamp: bannalTextSize } = useResponsiveFontSize(20, 96)
</script>

<template>
    <BaseLayout>
        <BasicAd :src="ServicesAdImg">
            <div class="" :style="{ fontSize: bannalTextSize }">
                <div data-lang-text="FROM SCREENS TO STREETS"> {{ $t('services.banner_text_1') }}</div>
                <div data-lang-text="FROM ADS TO EXPERIENCES."> {{ $t('services.banner_text_2') }}</div>
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
