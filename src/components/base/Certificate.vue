<template>
    <div class="mb-20">
        <h2 class="global-title">
            {{ $t('title79') }}
        </h2>
        <swiper :modules="modules" :slidesPerView="slidesPerView" :breakpoints="breakpoints" spaceBetween="50" speed="1000"
            :autoplay="{ delay: 1000, disableOnInteraction: false, duration: 2000, }"
            class="w-full select-none flex items-center">
            <swiper-slide v-for="item in 14" :key="item">
                <a class="w-[300px] h-[300px]" :href="`/imgs/cert-${item}.jpg`">
                    <img class="lazyload w-full h-full object-contain" :src="`/imgs/cert-${item}.jpg`" />
                </a>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
export default {
    name: 'Certificate',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation, Autoplay],
            slidesPerView: 4,
            breakpoints: {
                200: { slidesPerView: 1 },
                500: { slidesPerView: 2 },
                950: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
            },
        };
    },
}
</script>