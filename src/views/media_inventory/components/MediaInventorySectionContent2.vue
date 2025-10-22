<script setup>
import MediaInventorySectionContentItem from '@/views/media_inventory/components/MediaInventorySectionContentItem.vue'
import adImg01 from '@/assets/images/media_inventory/ad_img_04.webp'
import adImg02 from '@/assets/images/media_inventory/ad_img_05.webp'
import adImg03 from '@/assets/images/media_inventory/ad_img_06.webp'
</script>

<template>
    <section class="relative">
        <div class="md:flex gap-x-0.5">
            <!--   start 1         -->
            <MediaInventorySectionContentItem>
                <template v-slot:img>
                    <img :src="adImg01" alt="" />
                </template>
                <template v-slot:title>Photo Frame</template>
                <template v-slot:sub-title> @ Driveway and Parking</template>
                <template v-slot:desc>Strategic Eye-Level Ads for Captive Parking Audience</template>
                <template v-slot:sub-desc>
                    <div>Location: Driveway and Parking</div>
                    <div>Installation Size: 1.1m (H) x 0.8m (W)</div>
                    <div>Screen Size: 1.08m (H) x 0.78m (W)</div>
                </template>
            </MediaInventorySectionContentItem>
            <!--     end 1       -->
            <!--     start 2 -->
            <MediaInventorySectionContentItem>
                <template v-slot:img>
                    <img :src="adImg02" alt="" />
                </template>
                <template v-slot:title> Light Box</template>
                <template v-slot:sub-title>@ Project Main Entrance</template>
                <template v-slot:desc>Close-Range Engagement for Pedestrian Traffic</template>
                <template v-slot:sub-desc>
                    <div>Location: Project Main Entrance</div>
                    <div>Device Size: 1.8m (H) x 1.2m (W)</div>
                    <div>Screen Size: 1.6m (H) x 1m (W)</div>
                    <div>*2 devices with 4 display surfaces total</div>
                </template>
            </MediaInventorySectionContentItem>
            <!--  end 2 -->
            <!--  start 3 -->
            <MediaInventorySectionContentItem>
                <template v-slot:img>
                    <img :src="adImg03" alt="" />
                </template>
                <template v-slot:title> Light Box </template>
                <template v-slot:sub-title>@ Main Entrance & Exit </template>
                <template v-slot:desc>360° Visibility for Inbound & Outbound Traffic</template>
                <template v-slot:sub-desc>
                    <div>Location: Main Entrance & Exit of ARC Towers</div>
                    <div>Installation Size: 0.8m (H) x 1.766m (W)</div>
                    <div>Display Area: 0.79m (H) x 1.756m (W) </div>
                    <div>Total Panels: 4 sides</div>
                </template>
            </MediaInventorySectionContentItem>
            <!--  end 3   -->
        </div>
    </section>
</template>

<style scoped>
img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: cover; /* 保证图片覆盖整个容器 */
}
</style>
