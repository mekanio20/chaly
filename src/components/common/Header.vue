<template>
  <header class="header" id="header" style="background-image: url('/imgs/bg-header.jpg');">
    <div class="header-top">
      <div class="container">
        <div class="textwidget">
          <a class="mail cursor-pointer" @click="updateLang('tm')">
            <img style="width: 20px"
              src="/imgs/tm.webp" />
          </a>
          <a class="mail cursor-pointer" @click="updateLang('ru')">
            <img style="width: 20px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAB4ElEQVQ4jZ2VTY4TQQyFP7s8kxAGwoIfCbFGrJAQB+AeHIE915hdLsESiSULTsEJhgUaRUHqiImmy2bRqa7uTqREWGqVy3K9st+rqpaI4ByLCERkNAdGMRFB1uu17nY7SymhqogIEaHnbLLPdXfH3QFaa5rm42KxeK+qw8SzAAEXEVSVnLM3TfPNzOzzcrl8Oyz9f8zd2W63Tw24VFVUlSmf+5ZG/nAEpv5cpwBTO7awgE6FArAIiAD3Q7WnFR87ESVWcOz62lkuHVWh6CLSfd1GNXkMxAgowtlsAlutlNlMSUlIqYK5Q86HAKXDClRzcxYMuoCq9G2XxCpA4TKA4cjEh9Ik7kHbSl/VUIBaZfGHQsiIDquCCKq1Qoiex1rJuP0ecpBnn9KKq/TYVRVRURSXWr2Pl45jEUCgIe4Z50/euPx6efXz+YW9EVVQraxz6uYUmR088Jy5afMXS88SepkQVUKEco2P0T+E6mOx7zdDasH01SXMEyHagQ54ATkCGp1fEvvzk0i7jMUL83hogBLSIzHh/WBegx1ghBN34vZj61+fkH8LTtevTIU4YbG/1+63jX+XD+9eLx5dtPNkprP5A1JKnPccBu5Bzi27u79+f99yc7ttOjrO/A2cMhHhH9lUIJHhFUZiAAAAAElFTkSuQmCC" />
          </a>
          <a class="mail cursor-pointer" @click="updateLang('en')">
            <img style="width: 20px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAEIUlEQVQ4jY2VS2zURRzHP7/Z2d3/bvfZLgsUeVUItKIJPkBEA0J5C0KiB73pgXjwpOFsjAkHL2qiMYF4IcQD4qMQkyqYQjQqFlILQoEiIMujpQ/62Ee3/50ZD7ttIB7kl8wkM8nM7/v75fOdEeccDxPOOUTkgTXwwJ6IIJ8dPKn+6P5HJxMR4nWeUiIgQsujGdY9lmWkrR1bLAGgohFSu7Zy7M87XLo+VLvUMTY+YUfzJZIxr6Lf2Xvk9Xgi/oznBRERlKpm3LF2CesWxhn9rp3K8AgAuiFNast6fu7KqfZfrljnHM46nHPkC2VbyOeP6n0f7Nxz+mrpidOX71Io+QgCAulshkQyRX12NiYUrV6YTpFMJklnZ5BqLIBzOAexaJAnm9Is1GP1uvXZptDLG+s52XWT/W1n6bzYD84xWvRRgB0cxg7dA8AaiwJG85P0DRURgZUts3hjzQKWXejk5rFjnr731VHS2zfz0uomtqxqovPCbT491EUsrAHHdMulNhzEIkFan57L7qcaWHy9h7G9BzB1EUJzG9HDX35D3dnLpHZuJrFpDasen0PzggzjhTJUClgsDgsOrDMAvLWtGd15Btd2mMLdIVKvbiO+5UW0GHTToX3MnDkLJSBaIyKkEx7phMdkroCr+JjJMs5amIjgcCxcMAP3yAbY1VoVHwxijEFyOeTXra/1ZOOJpSoQAKWmy3K2gimWmOjpxfl+7aDGa1mChEJTMIK1OOewxnKnmD+kC2e6yXt1KB1AlMI5U1UzTXCtd4DzfUrd56uQ1+B21oE1WGMp+mU0zuGswRlHrUWgBMd/nYATnNQcM+WUWs6p0OKFqyUoQUSBAkSqopzDlScfsJkKe9OKpaZQrIWKQQVAz3l/D9lUGlECopD7OPGHhun/eD92PI8DVDzOrHd3o1MpoAp1bcIYiwwOoJOb1pHMZPBv9TNx8SrOGMLzGwk2zcMODTPwxdfYclWxStSTWL+GQDYzbVFb9ild6MXk+kBC6MrwGIPtpxg5eoLKyCjprc/TValjqC/HjqVxxEtDVFW59lIgisMdfzN/doKVLVlEB1CxKKWeawx830Fge/fk27p/PBNau5LeHTv56FaED9tzJGIeG5obuHf8HM4EIRRDJeup376az3/K8d6Bs/x1fZRYNMS8xbNJvbAcvX7FeR1+ZaPNLVrCwUslfv82x2jBRyIxCIaxCDbSgI2Gq+VFYlgnEAwjkRg/nBvh1LVzPNec4c3WecSVsfqTG7eP/HbixmBx0nI/IbnePn48eY2+kTuYYhmAgIxz5cRJbl0ZxNSetMFhaLvhON6hKssbXYcsWrYi6ovnaR1UnhcmEFCIKJLRANk6zeRAHqZAV4rQjDj9eZ+xksFZgzGW0kQZa3xbKY4Ua7g93DfwfyEi/AtgPeKLT+LVuwAAAABJRU5ErkJggg==" />
          </a>
          <a class="mail" href="mailto:chaly.marketing@gmail.com">chaly.marketing@gmail.com</a>
          <a class="tel" href="tel:+99365609009">+993 (65) 60-90-09</a>
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
        <a href="tel:+99365609009" class="callback"><span class="icon-border"></span>Обратный звонок</a>
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