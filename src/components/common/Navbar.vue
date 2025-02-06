<template>
    <nav class="nav-menu">
        <span class="close"></span>
        <div class="menu-menu-container">
            <ul id="menu-menu" class="">
                <li v-for="item in items" :key="item.id"
                    :id="item.id" class="px-2 mb-2 bg-m_red-100 hover:opacity-80 duration-300"
                    :class="item.id">
                    <router-link :to="item.url" class="!text-white">{{ item.title }}</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import navData from '@/data/nav-items.js'
export default {
    name: 'Navbar',

    data() {
        return {
            items: navData
        }
    }
}
</script>