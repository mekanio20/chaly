<template>
    <div v-if="isSearchPopupOpen" class="fixed top-0 left-0 w-full h-full z-50">
      <div class="absolute top-0 left-0 w-full h-full bg-white opacity-50"
           :style="{ backgroundImage: 'url(/imgs/bg-1.wenp)' }"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div class="bg-white rounded-lg p-8 shadow-lg">
          <input type="text"
                 class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                 placeholder="Arama...">
          <button @click="isSearchPopupOpen = false" class="absolute top-2 right-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <button @click="isSearchPopupOpen = true">Arama Yap</button>
  </template>
  
  <script>
  
  export default {
    name: "Search",
    data() {
      return {
        isSearchPopupOpen: false,
      };
    },
  };
  </script>