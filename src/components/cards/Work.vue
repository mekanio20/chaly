<template>
    <li>
        <router-link :to="url" class="w-full h-full">
            <h2 class="title !pt-2">{{ title }}</h2>
            <img :src="bg_img" class="w-full h-full object-contain" />
            <div class="text">
                <span class="mark-link opacity-80">Подробнее</span>
            </div>
        </router-link>
    </li>
</template>

<script>
export default {
    name: 'WorkCard',
    props: {
        bg_img: String,
        title: String,
        url: String
    }
}
</script>