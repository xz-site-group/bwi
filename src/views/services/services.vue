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
                <div>FROM SCREENS TO STREETS.</div>
                <div>FROM ADS TO EXPERIENCES.</div>
            </div>
        </BasicAd>
        <!--   01  -->
        <ServicesSection>
            <template v-slot:decorative-number>01</template>
            <template v-slot:title>
                <div>
                    <div>Media Leasing</div>
                    <div>& Representation</div>
                </div>
            </template>
            <div>
                <p>Management and monetization of ACR Towers’, physical advertising spaces, including building façades, LED billboards, mall interiors, and outdoor signage.</p>
            </div>
        </ServicesSection>
        <!--   end 01 -->
        <!--   02  -->
        <ServicesSection>
            <template v-slot:decorative-number>02</template>
            <template v-slot:title>
                <div>
                    <div>Campaign Strategy </div>
                    <div>& Event Execution</div>
                </div>
            </template>
            <div>
                <p>Planning and executing marketing activations across online and offline channels — seasonal campaigns, mall events, product launches, and experiential marketing.</p>
            </div>
        </ServicesSection>
        <!--   end 02 -->

        <!--   03  -->
        <ServicesSection>
            <template v-slot:decorative-number>03</template>
            <template v-slot:title>
                <div>
                    <div>Creative Direction</div>
                    <div>& Production Oversight</div>
                </div>
            </template>
            <div>
                <p>Concept development, visual asset creation, and quality control via external production partners.</p>
            </div>
        </ServicesSection>
        <!--   end 03 -->

        <!--   04  -->
        <ServicesSection>
            <template v-slot:decorative-number>04</template>
            <template v-slot:title>
                <div>
                    <div>Digital Platform </div>
                    <div>Development & Support</div>
                </div>
            </template>
            <div>
                <p>Building and maintaining property apps, e-commerce, platforms, and campaign-specific microsites to enhance marketing reach and engagement.</p>
            </div>
        </ServicesSection>
        <!--   end 04 -->
    </BaseLayout>
</template>

<style scoped></style>
