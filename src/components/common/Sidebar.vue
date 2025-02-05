<!-- src/components/Sidebar.vue -->
<template>
    <div class="flex">
      <!-- Sidebar -->
      <div class="w-64 h-screen bg-gray-800 text-white">
        <div class="p-4 text-2xl font-bold">
          Logo
        </div>
        <ul>
          <li v-for="item in menuItems" :key="item.name" class="p-4 hover:bg-gray-700">
            <a :href="item.link">{{ item.name }}</a>
          </li>
        </ul>
      </div>
      <!-- Main Content -->
      <div class="flex-1 p-10">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuItems: [
          { name: 'Anasayfa', link: '#' },
          { name: 'Hakkında', link: '#' },
          { name: 'İletişim', link: '#' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* İsteğe bağlı ek stiller */
  </style>  