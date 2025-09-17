<script setup>
import BaseLayout from '@/layout/BaseLayout.vue'
import Banner from '@/views/about/components/Banner.vue'
</script>

<template>
    <BaseLayout>
        <div class="banner" style="height: 300px;overflow: hidden">
            <Banner></Banner>
        </div>
        <div>this is about {{ $t('hello')}}</div>
    </BaseLayout>
</template>

<style></style>
