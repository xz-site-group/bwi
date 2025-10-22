<script setup>
import MediaInventorySectionContentItem from '@/views/media_inventory/components/MediaInventorySectionContentItem.vue'
import adImg01 from '@/assets/images/media_inventory/ad_img_01.webp'
import adImg02 from '@/assets/images/media_inventory/ad_img_02.webp'
import adImg03 from '@/assets/images/media_inventory/ad_img_03.webp'
</script>

<template>
    <section class="relative">
        <div class="md:flex gap-x-0.5">
            <!--   start 1         -->
            <MediaInventorySectionContentItem>
                <template v-slot:img>
                    <img :src="adImg01" alt="" />
                </template>
                <template v-slot:title> LED Screen</template>
                <template v-slot:sub-title> @ Natalio B. Bacalso Ave</template>
                <template v-slot:desc> Landmark-Scale LED for Maximum Citywide Reach</template>
                <template v-slot:sub-desc>
                    <div>Location: Natalio B. Bacalso Avenue</div>
                    <div>Screen Size: 6.72m (H) X 5.12m (W)</div>
                    <div>Screen Resolution: 1680px X 1280px</div>
                </template>
            </MediaInventorySectionContentItem>
            <!--     end 1       -->
            <!--     start 2 -->
            <MediaInventorySectionContentItem>
                <template v-slot:img>
                    <img :src="adImg02" alt="" />
                </template>
                <template v-slot:title> Light Box</template>
                <template v-slot:sub-title> @ V. Rama Avenue Entrance</template>
                <template v-slot:desc> Flagship-Scale, High-Visibility LED Billboard</template>
                <template v-slot:sub-desc>
                    <div>Location: V. Rama Avenue – Main Entrance</div>
                    <div>Device & Screen Size: 4.5m (H) x 4.5m (W)</div>
                </template>
            </MediaInventorySectionContentItem>
            <!--  end 2 -->
            <!--  start 3 -->
            <MediaInventorySectionContentItem>
                <template v-slot:img>
                    <img :src="adImg03" alt="" />
                </template>
                <template v-slot:title> Light Box </template>
                <template v-slot:sub-title> @ 1F Main Entrance Driving Lane</template>
                <template v-slot:desc>Dual-Sided Gateway Display for Maximum Impressions</template>
                <template v-slot:sub-desc>
                    <div>Location: 1F Driving Lane – Main Entrance</div>
                    <div>Device: 1.8m (H) x 4m (W); 1.8m (H) x 5m (W)</div>
                    <div>Screen: 1.6m (H) x 3.8m (W); 1.6m (H) x 4.8m (W) </div>
                    <div>*2 devices with 4 display surfaces</div>
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
