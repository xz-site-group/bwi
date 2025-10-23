<script setup>
import BaseLayout from '@/layout/BaseLayout.vue'
import BasicAd from '@/components/BasicAd.vue'
import MediaInventorySectionHeader from '@/views/media_inventory/components/MediaInventorySectionHeader.vue'
import MediaInventorySectionContent1 from '@/views/media_inventory/components/MediaInventorySectionContent1.vue'
import MediaInventorySectionContent2 from '@/views/media_inventory/components/MediaInventorySectionContent2.vue'
import MediaInventorySectionContent3 from '@/views/media_inventory/components/MediaInventorySectionContent3.vue'
import MediaInventoryFooter from '@/views/media_inventory/components/MediaInventoryFooter.vue'
import MediaInventoryTopImg from '@/assets/images/media_inventory/top_ad_img_1920.png'
import { useResponsiveFontSize } from '@/composables/useResponsiveFontSize.js'

const { fontSizeClamp: baseAdTextSize } = useResponsiveFontSize(20, 96)
</script>

<template>
    <BaseLayout>
        <BasicAd :src="MediaInventoryTopImg">
            <div class="" :style="{ fontSize: baseAdTextSize, textAlign: 'center' }">
                <div data-lang-text="PRIME MEDIA SPACES">{{ $t('mediaInventory.banner_text_1') }}</div>
                <div data-lang-text="@THE HEART OF ARC TOWERS.">{{ $t('mediaInventory.banner_text_2') }}</div>
            </div>
        </BasicAd>
        <!--   01  -->
        <div class="w-full h-[4vw] max-h-[100px]"></div>
        <MediaInventorySectionHeader >
            <template v-slot:title>
                <div>
                    <div data-lang-text="Outdoor"> {{ $t("mediaInventory.outdoor.title") }}</div>
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
                    <div data-lang-text="Outdoor"> {{ $t("mediaInventory.indoor.title") }}</div>
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
                    <div data-lang-text="Outdoor"> {{ $t("mediaInventory.digital.title") }}</div>
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
