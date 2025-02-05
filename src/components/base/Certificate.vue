<template>
    <div class="reviews-container">
        <h2 class="global-title">
            Сертификаты
        </h2>
        <div class="grid grid-cols-4 gap-x-10 pb-20">
            <div v-for="item in 3" class="w-[300px] h-[300px]">
                <a :href="`/imgs/cert-${item}.jpg`">
                    <img class="lazyload w-full h-full object-contain" :src="`/imgs/cert-${item}.jpg`" />
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Certificate'
}
</script>