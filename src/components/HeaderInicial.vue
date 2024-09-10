<template>
  <div>
    <header class="bg-gradient-to-r from-teal-600 to-blue-500 text-white p-4 shadow-md font-font fixed top-0 left-0 right-0 z-50">
      <div class="container mx-auto flex justify-between items-center">
        <span class="text-white text-3xl font-font">Book Diary</span>
        <nav>
          <ul class="hidden md:flex space-x-6 font-font">
           
            <router-link to="/">
              <li>
                <a
                  class="text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer"
                >Início</a>
              </li>
            </router-link>

            <router-link to="/MeusLidos">
              <li>
                <a
                  class="text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer"
                >Meus Lidos</a>
              </li>
            </router-link>

            <router-link to="/Prox">
              <li>
                <a
                  class="text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer"
                >Próximas Leituras</a>
              </li>
            </router-link>
           
           
          </ul>
          <!-- Menu responsivo -->
          <div class="md:hidden">
            <button
              @click="menuOpen = !menuOpen"
              class="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
      <!-- Menu mobile -->
      <div
        v-if="menuOpen"
        class="md:hidden bg-gradient-to-r from-teal-500 to-blue-400 text-white p-4 space-y-2 mt-2 font-font"
      >
        <div
          v-for="(item, index) in menuItems"
          :key="index"
          class="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
        >
          <a
            :href="item.href"
            class="block text-gray-600 text-lg cursor-pointer"
          >
            {{ item.text }}
          </a>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderInicial',
  data() {
    return {
      menuOpen: false,
      menuItems: [
        { text: 'Início', href: '/' },
        { text: 'Meus Lidos', href: '/MeusLidos' },
        { text: 'Próximas Leituras', href: '/Prox' }
        
      ],
    };
  },
};
</script>

