<script setup>
import BaseLayout from '@/layout/BaseLayout.vue'
import HomeBanner from '@/views/home/components/HomeBanner.vue'
</script>

<template>
    <BaseLayout>
        <HomeBanner class="h-full"> </HomeBanner>
        <template v-slot:footer>
            <div></div>
        </template>
    </BaseLayout>
</template>
