<template>
  <div class="w-5">
    <!-- Search Icon -->
    <button @click="openSearch" class="w-5">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5" fill="none" viewBox="0 0 24 24" stroke="red">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>
    <transition enter-active-class="duration-500 ease-out" enter-from-class="-translate-y-full opacity-0"
      enter-to-class="translate-y-0 opacity-100" leave-active-class="duration-500 ease-in"
      leave-from-class="translate-y-0 opacity-100" leave-to-class="-translate-y-full opacity-0">
      <div v-if="isOpen" class="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-50">
        <div class="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style="background-image: url('/imgs/bg-1.webp')">
        </div>
        <div class="absolute inset-0 bg-gray-400 bg-opacity-50"></div>
        <div class="relative w-full h-full flex flex-col items-center justify-center px-6">
          <button @click="closeSearch" class="absolute top-6 right-6 text-m_red-100 hover:text-red-600">
            <!-- cloese svg -->
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 cursor-pointer" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <input type="text"
            v-model="searchQuery"
            class="sm:w-4/5 md:w-1/4 w-full px-4 py-3 text-lg font-fira_sans text-m_gray-100 border-t-0 border-l-0 border-r-0 border-b-1 border-m_blue-100 focus:outline-none focus:ring-0 focus:border-m_blue-100 bg-transparent uppercase" />
          <button @click="search"
            class="mt-6 px-10 py-3 bg-m_blue-100 text-white text-lg font-medium rounded-lg shadow-md hover:opacity-80 transition duration-300">
            {{ $t('title88') }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isOpen: false,
      searchQuery: "",
    };
  },
  methods: {
    openSearch() {
      this.isOpen = true;
    },
    closeSearch() {
      this.isOpen = false;
    },
    search() {
      if (this.searchQuery.trim() !== "") {
        this.$router.push({ name: "Work", query: { q: this.searchQuery } });
      }
      this.closeSearch();
    },
  },
}
</script>