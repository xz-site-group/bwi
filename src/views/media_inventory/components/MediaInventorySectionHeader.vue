<script setup>
import { useResponsiveFontSize } from '@/composables/useResponsiveFontSize.js'
import SectionTitle from '@/components/SectionTitle.vue'
const { fontSizeClamp: firstTextSize } = useResponsiveFontSize(42, 90)

const { fontSizeClamp: TwoTextSize } = useResponsiveFontSize(84, 180)
const { fontSizeClamp: contentTextSize } = useResponsiveFontSize(11, 32)
</script>

<template>
    <section class="">
        <div class="  m-auto">
            <div class="content flex flex-col md:items-center md:justify-between md:flex-row">
                <!--      start         title-->
                <div class="services-section--title px-4 font-bold w-full md:w-[33%] relative flex flex-row items-center " >
                    <div
                        class="pr-2 leading-[1]"
                        :style="{
                            fontSize: firstTextSize,
                        }"
                    >
                        <slot name="title">
                            <div>Media Leasing</div>
                            <div>& Representation &nbsp;</div>
                        </slot>

                    </div>
                    <div class="decoration flex justify-center items-center leading-[1] " :style="{
                            fontSize: TwoTextSize,
                            'color': '#ff0000'

                        }">
                    </div>
                </div>
                <!--       end title         -->
                <!--   content -->
                <div class="services-section--content font-bold w-full   md:w-[67%] bg-[#EBEBEB] p-4 mt-2 md:m-0" :style="{
                            fontSize: contentTextSize,
                        }">
                    <slot></slot>
                </div>
                <!--  end  content -->
            </div>
        </div>
    </section>
</template>

<style scoped>


.decoration:after {
    content: '\002F';
    position:  absolute;
    top: -4px;
    color: #ff0000;
}
</style>
