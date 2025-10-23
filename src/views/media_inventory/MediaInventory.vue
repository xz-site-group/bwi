<script setup>
import BaseLayout from '@/layout/BaseLayout.vue'
import BasicAd from '@/components/BasicAd.vue'
import MediaInventorySectionHeader from '@/views/media_inventory/components/MediaInventorySectionHeader.vue'
import MediaInventorySectionContent1 from '@/views/media_inventory/components/MediaInventorySectionContent1.vue'
import MediaInventorySectionContent2 from '@/views/media_inventory/components/MediaInventorySectionContent2.vue'
import MediaInventorySectionContent3 from '@/views/media_inventory/components/MediaInventorySectionContent3.vue'
import MediaInventoryFooter from '@/views/media_inventory/components/MediaInventoryFooter.vue'
import { useResponsiveFontSize } from '@/composables/useResponsiveFontSize.js'



import  baseAdImg375 from '@/assets/images/media_inventory/base_ad_375.png'
import  baseAdImg563 from '@/assets/images/media_inventory/base_ad_563.png'
import  baseAdImg750 from '@/assets/images/media_inventory/base_ad_750.png'
import  baseAdImg960 from '@/assets/images/media_inventory/base_ad_1125.png'
import  baseAdImg1125 from '@/assets/images/media_inventory/base_ad_1125.png'
import  baseAdImg1440 from '@/assets/images/media_inventory/base_ad_1500.png'
import  baseAdImg1500 from '@/assets/images/media_inventory/base_ad_1500.png'
import  baseAdImg1920 from '@/assets/images/media_inventory/base_ad_1920.webp'
import  baseAdImg3840 from '@/assets/images/media_inventory/base_ad_1920.webp'

const adSrcset = [
    {
        url: baseAdImg375,
        media: '(max-width: 375px)',
        type: 'image/jpeg'
    },
    {
        url: baseAdImg563,
        media: '(max-width: 563px)',
        type: 'image/jpeg'
    },
    {
        url: baseAdImg750,
        media: '(max-width: 750px)',
        type: 'image/jpeg'
    },
    {
        url: baseAdImg960,
        media: '(max-width: 960px)',
        type: 'image/jpeg'
    },
    {
        url: baseAdImg1125,
        media: '(max-width: 1125px)',
        type: 'image/jpeg'
    },
    {
        url: baseAdImg1440,
        media: '(max-width: 1440px)',
        type: 'image/jpeg'
    },
    {
        url: baseAdImg1500,
        media: '(max-width: 1500px)',
        type: 'image/jpeg'
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

const { fontSizeClamp: baseAdTextSize } = useResponsiveFontSize(20, 96)
</script>

<template>
    <BaseLayout>
        <BasicAd :src="baseAdImg1920" :srcset="adSrcset">
            <div class="" :style="{ fontSize: baseAdTextSize, textAlign: 'center' }">
                <div data-lang-text="PRIME MEDIA SPACES">{{ $t('mediaInventory.banner_text_1') }}</div>
                <div data-lang-text="@THE HEART OF ARC TOWERS.">@{{ $t('mediaInventory.banner_text_2') }}</div>
            </div>
        </BasicAd>
        <!--   01  -->
        <div class="w-full h-[4vw] max-h-[100px]"></div>
        <MediaInventorySectionHeader >
            <template v-slot:title>
                <div>
                    <div data-lang-text="Outdoor">
                        {{ $t("mediaInventory.outdoor.title") }}
                        <span>&nbsp;</span>
                    </div>
                    <div>{{ $t("mediaInventory.common.title") }}</div>
                </div>
            </template>
            <div>
                <p>
                    <span class="decoration">/</span>
                    {{ $t("mediaInventory.outdoor.desc[0]") }}
                </p>
                <p>
                    <span class="decoration">/</span>
                    {{ $t("mediaInventory.outdoor.desc[1]") }}
                </p>
                <p>
                    <span class="decoration">/</span>
                    {{ $t("mediaInventory.outdoor.desc[2]") }}
                </p>
            </div>
        </MediaInventorySectionHeader>
        <MediaInventorySectionContent1></MediaInventorySectionContent1>
        <!--   end 01 -->

        <!--    start 02    -->
        <div class="w-full h-[4vw] max-h-[100px]"></div>
        <MediaInventorySectionHeader >
            <template v-slot:title>
                <div>
                    <div data-lang-text="Outdoor">
                        {{ $t("mediaInventory.indoor.title") }}
                        <span>&nbsp;</span>
                    </div>
                    <div>{{ $t("mediaInventory.common.title") }}</div>
                </div>
            </template>
            <div>
                <p>
                    <span class="decoration">/</span>
                    {{ $t("mediaInventory.indoor.desc[0]") }}
                </p>
                <p>
                    <span class="decoration">/</span>
                    {{ $t("mediaInventory.indoor.desc[1]") }}
                </p>
                <p>
                    <span class="decoration">/</span>
                    {{ $t("mediaInventory.indoor.desc[2]") }}
                </p>
            </div>
        </MediaInventorySectionHeader>
        <MediaInventorySectionContent2></MediaInventorySectionContent2>
        <!--    end 02    -->

        <!--    start 03    -->
        <div class="w-full h-[4vw] max-h-[100px]"></div>
        <MediaInventorySectionHeader >
            <template v-slot:title>
                <div>
                    <div data-lang-text="Outdoor"> {{ $t("mediaInventory.digital.title") }} <span>&nbsp;</span></div>
                    <div>{{ $t("mediaInventory.common.title") }}</div>
                </div>
            </template>
            <div>
                <p>
                    <span class="decoration">/</span>
                    {{ $t("mediaInventory.digital.desc[0]") }}
                </p>
                <p>
                    <span class="decoration">/</span>
                    {{ $t("mediaInventory.digital.desc[1]") }}
                </p>
                <p>
                    <span class="decoration">/</span>
                    {{ $t("mediaInventory.digital.desc[2]") }}
                </p>
            </div>
        </MediaInventorySectionHeader>
        <MediaInventorySectionContent3></MediaInventorySectionContent3>
        <!--    end 03    -->
        <div class="w-full h-[4vw] max-h-[100px]"></div>
        <MediaInventoryFooter></MediaInventoryFooter>

    </BaseLayout>
</template>

<style scoped>
.decoration {
    color: #ff0000;
}
</style>
