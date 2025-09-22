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
            <div class="" :style="{ fontSize: baseAdTextSize }">
                <div>FROM SCREENS TO STREETS.</div>
                <div>FROM ADS TO EXPERIENCES.</div>
            </div>
        </BasicAd>
        <!--   01  -->
        <div class="w-full h-[4vw] max-h-[100px]"></div>
        <MediaInventorySectionHeader >
            <template v-slot:title>
                <div>
                    <div>Outdoor</div>
                    <div>Media</div>
                </div>
            </template>
            <div>
                <p>
                    <span class="decoration">/</span>
                    Building Façade LED Wall (high-impact, visible across the district)
                </p>
                <p>
                    <span class="decoration">/</span>
                    Large-format outdoor billboards along main entry routes
                </p>
                <p>
                    <span class="decoration">/</span>
                    Illuminated signage in high-traffic public spaces
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
                    <div>Indoor</div>
                    <div>Media</div>
                </div>
            </template>
            <div>
                <p>
                    <span class="decoration">/</span>
                    Mall atrium banners and hanging displays
                </p>
                <p>
                    <span class="decoration">/</span>
                    Elevator and corridor lightboxes
                </p>
                <p>
                    <span class="decoration">/</span>
                    In-mall digital screens and interactive kiosks
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
                    <div>Digital</div>
                    <div>Media</div>
                </div>
            </template>
            <div>
                <p>
                    <span class="decoration">/</span>
                    Property app: push notifications, splash screens, in-app banners
                </p>
                <p>
                    <span class="decoration">/</span>
                    Online mall: homepage banners, promotional zones
                </p>
                <p>
                    <span class="decoration">/</span>
                    In-mall digital screens and interactive kiosks
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
