<template>
  <header class="header" id="header" style="background-image: url('/imgs/bg-header.jpg');">
    <div class="header-top">
      <div class="sm:container">
        <div class="textwidget">
          <a class="mail cursor-pointer" @click="updateLang('tm')">
            <img style="width: 16px; height: 13px"
              src="/imgs/tm.webp" />
          </a>
          <a class="mail cursor-pointer" @click="updateLang('ru')">
            <img style="width: 16px; height: 13px"
              src="/imgs/ru.webp" />
          </a>
          <a class="mail cursor-pointer" @click="updateLang('en')">
            <img style="width: 16px; height: 13px;"
              src="/imgs/en.webp" />
          </a>
          <a class="sm:text-sm text-xs mail" href="mailto:chaly.marketing@gmail.com">chaly.marketing@gmail.com</a>
          <a class="sm:text-sm text-xs tel" href="tel:+99365609009">+993 (65) 60-90-09</a>
          <a class="mt-[4px]">
            <Search />
          </a>
        </div>
      </div>
    </div>
    <!-- Sidebar -->
    <div ref="sidebarRef"
      class="fixed !z-50 inset-y-0 left-0 w-full bg-gray-300 transform transition-transform duration-300 ease-in-out"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
      <div class="nav-menu show p-5">
        <span class="close" @click="toggleSidebar"></span>
        <ul class="mt-4 space-y-2">
          <li v-for="item in nav_items" :key="item.id" class="p-2 hover:bg-gray-200 rounded cursor-pointer duration-300">
            <router-link :to="item.url" class="hover:text-current">{{ item.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="isOpen" @click="toggleSidebar" class="fixed inset-0 bg-black bg-opacity-50"></div>
    <div class="header-middle">
      <div class="container">
        <div @click="handleClickOutside" class="btn-menu cursor-pointer"><span></span></div>
        <div class="logo">
          <router-link to="/" rel="home" class="!h-[100px] md:w-full w-[120px] mx-auto">
            <img class="lazyload w-full h-full object-cover" src="/svgs/site-logo.svg" data-src="/svgs/site-logo.svg" />
          </router-link>
        </div>
        <slot></slot>
        <a href="tel:+99365609009" class="callback"><span class="icon-border"></span>
          {{ $t('title98') }}
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import navItems from '@/data/nav-items.js'
import Search from '@/components/base/Search.vue';
export default {
  name: 'Header',
  components: {
    Search
  },
  created() {
    this.nav_items = navItems[this.$i18n.locale]
  },
  data() {
    return {
      isOpen: false,
      nav_items: null
    }
  },
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
    },
    handleClickOutside(event) {
      if (!this.isOpen && this.$refs.sidebarRef && !this.$refs.sidebarRef.contains(event.target)) {
        this.isOpen = !this.isOpen;
      }
    },
    updateLang(name) {
      localStorage.setItem('site_lang', name)
      this.$i18n.locale = name
      window.location.reload()
    }
  },
}
</script>