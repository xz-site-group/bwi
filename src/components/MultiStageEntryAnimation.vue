<script lang="ts" setup>
import Logo from '@/assets/images/common/bwi_white_bg.png'
import { ref,onMounted } from 'vue'

const stage1Show = ref(true); // 初始时，应该为 true
const stage2Show = ref(false) // 初始时，应该为 false

// 获取当前时间戳
const now = Date.now();

// 获取保存的时间戳
const lastLoaded = sessionStorage.getItem('lastLoaded');

const oneDay = 24 * 60 * 60 * 1000;


onMounted(() => {
    // 如果已经加载过，直接设置 stage1Show 和 stage2Show 的值
    // 如果没有保存时间戳，或者时间差超过一天
    if (!lastLoaded || now - parseInt(lastLoaded, 10) > oneDay) {
        // 设置定时器来控制动画
        setTimeout(() => {
            stage1Show.value = false;
            stage2Show.value = true;
        }, 1600);

        setTimeout(() => {
            stage1Show.value = false;
            stage2Show.value = false;
        }, 4100);

        // 更新时间戳
        sessionStorage.setItem('lastLoaded', now.toString());
    } else {
        // 如果时间差没有超过一天，跳过动画
        stage1Show.value = false;
        stage2Show.value = false;
    }
});

</script>

<template>
    <div>
        <!--    start 第一阶段    -->
        <div class="stage1" id="stage1" v-if="stage1Show">
            <div class="inner">
            </div>
        </div>
        <!--    end 第一阶段      -->

        <!--    start 第二阶段    -->
        <div class="stage2" id="stage2" v-if="stage2Show">
            <div class="mask"></div>
            <div class="content">
                <div class=" logo-wrap">
                    <a
                        class="text-white no-underline hover:no-underline  text-xl lg:text-2xl flex items-center"
                        href="/"
                    >
                        <img
                            :src="Logo"
                            class="w-[125px] sm:w-[200px] xl:w-[250px]"
                            alt="logo"
                            decoding="async"
                        />
                    </a>
                </div>
            </div>
        </div>
        <!--    end 第二阶段      -->


        <!--    start 第一阶段    -->
        <!--    end 第一阶段      -->


        <!--    start 第一阶段    -->
        <!--    end 第一阶段      -->
    </div>
</template>

<style scoped lang="less">

.stage1 {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100dvh;
    background-color: #fff;
    z-index: 1001;

    .inner {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 20px;
        height: 20vh;
        background-color: #ff0000;
        transform: skewX(-15deg);
        animation:
            expand 1.6s 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) forwards

    }

}


.stage2 {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100dvh;
    z-index: 1001;
    .mask {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #ff0000;
        z-index: 1002;
        animation: fade-out 1s 1.2s forwards;
    }

    .content {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: transparent;
        //display: flex;
        //justify-content: center;
        //align-items: center;
        //animation: grow 0.6s forwards, unskew 0.6s 0.5s forwards, fade-out 1s 2.3s forwards;
        z-index: 1003;
    }

    .content:after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: skewX(-15deg) translate(-50%, -50%);
        width: 0;
        height: 0;
        background-color: #ffffff;
        //display: flex;
        //justify-content: center;
        //align-items: center;
        animation: grow 1.6s forwards, fade-out 1s 2s forwards;
        z-index: 1004;
    }
    .logo-wrap {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 1005;
        animation: moveLogo 1.2s 1.6s forwards;
    }
}

@keyframes expand {
    to {
        transform: skewX(-15deg) scale(100);
    }
}
@keyframes fade {
    to { opacity: 0; visibility: hidden; }
}

@keyframes grow {
    to {
        width: 500%;
        height: 500%;
        transform: skewX(-15deg) translate(-50%, -50%);
    }
}
@keyframes unskew {
    to {
        transform: skewX(0deg) translate(-50%, -50%);
    }
}
@keyframes fade-out {
    to {
        opacity: 0;
    }
}
@keyframes moveLogo {
    to {
        left: 20px;
        top: 20px;
        transform: translate(0);
    }
}
</style>
