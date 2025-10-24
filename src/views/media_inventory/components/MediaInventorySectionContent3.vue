<script setup>
import MediaInventorySectionContentItem from '@/views/media_inventory/components/MediaInventorySectionContentItem.vue'
import adImg01 from '@/assets/images/media_inventory/ad_img_07.webp'
import adImg02 from '@/assets/images/media_inventory/ad_img_08.webp'
import adImg03 from '@/assets/images/media_inventory/ad_img_09.webp'
</script>

<template>
    <section class="relative">
        <div class="md:flex gap-x-0.5">
            <!--   start 1         -->
            <MediaInventorySectionContentItem>
                <template v-slot:img>
                    <img :src="adImg01" alt="" />
                </template>
                <template v-slot:title> {{ $t("mediaInventory.digital.section_1_title") }}</template>
                <template v-slot:sub-title> {{ $t("mediaInventory.digital.section_1_sub_title") }}</template>
                <template v-slot:desc> {{ $t("mediaInventory.digital.section_1_desc") }}</template>
                <template v-slot:sub-desc>
                    <div>{{ $t("mediaInventory.digital.section_1_sub_desc[0]") }}</div>
                    <div>{{ $t("mediaInventory.digital.section_1_sub_desc[1]") }}</div>
                    <div>{{ $t("mediaInventory.digital.section_1_sub_desc[2]") }}</div>
                    <div>{{ $t("mediaInventory.digital.section_1_sub_desc[3]") }}</div>
                </template>
            </MediaInventorySectionContentItem>
            <!--     end 1       -->
            <!--     start 2 -->
            <MediaInventorySectionContentItem>
                <template v-slot:img>
                    <img :src="adImg02" alt="" />
                </template>
                <template v-slot:title> {{ $t("mediaInventory.digital.section_2_title") }}</template>
                <template v-slot:sub-title> {{ $t("mediaInventory.digital.section_2_sub_title") }}</template>
                <template v-slot:desc> {{ $t("mediaInventory.digital.section_2_desc") }}</template>
                <template v-slot:sub-desc>
                    <div>{{ $t("mediaInventory.digital.section_2_sub_desc[0]") }}</div>
                    <div>{{ $t("mediaInventory.digital.section_2_sub_desc[1]") }}</div>
                </template>
            </MediaInventorySectionContentItem>
            <!--  end 2 -->
            <!--  start 3 -->
            <MediaInventorySectionContentItem>
                <template v-slot:img>
                    <img :src="adImg03" alt="" />
                </template>
                <template v-slot:title> {{ $t("mediaInventory.digital.section_3_title") }}</template>
                <template v-slot:sub-title> {{ $t("mediaInventory.digital.section_3_sub_title") }}</template>
                <template v-slot:desc> {{ $t("mediaInventory.digital.section_3_desc") }}</template>
                <template v-slot:sub-desc>
                    <div>{{ $t("mediaInventory.digital.section_3_sub_desc[0]") }}</div>
                    <div>{{ $t("mediaInventory.digital.section_3_sub_desc[1]") }}</div>
                    <div>{{ $t("mediaInventory.digital.section_3_sub_desc[2]") }}</div>
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
