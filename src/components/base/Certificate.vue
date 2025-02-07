<template>
    <div>
        <h2 class="global-title">
            {{ $t('title79') }}
        </h2>
        <div class="w-full flex items-center justify-start overflow-x-auto mb-10">
            <div v-for="item in 9" class="flex items-center mr-4">
                <a class="w-[300px] h-[300px]" :href="`/imgs/cert-${item}.jpg`">
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