<template>
  <div>
    <header class="bg-[#8DD9BF] text-white p-4 shadow-md font-font fixed top-0 left-0 right-0 z-50">
      <div class="container mx-auto flex justify-between items-center">
        <router-link to="/">
          <span class="text-black text-3xl font-font">Reading Diary</span>
        </router-link>
        <nav>
          <ul class="hidden md:flex space-x-6 font-font">
            <li @click="closeMenu">
              <router-link to="/">
                <a class="text-black hover:text-gray-700 transition-colors duration-300">Início</a>
              </router-link>
            </li>

            <li @click="closeMenu">
              <router-link to="/MinhaRede">
                <a class="text-black hover:text-gray-700 transition-colors duration-300">Sua Rede</a>
              </router-link>
            </li>

            <li @click="closeMenu">
              <router-link to="/MeusLidos">
                <a class="text-black hover:text-gray-700 transition-colors duration-300">Meus Lidos</a>
              </router-link>
            </li>


            <li @click="closeMenu">
              <router-link to="/Prox">
                <a class="text-black hover:text-gray-700 transition-colors duration-300">Próximas Leituras</a>
              </router-link>
            </li>

           
          </ul>
          <!-- Menu responsivo -->
          <div class="md:hidden">
            <button
              @click="menuOpen = !menuOpen"
              class="text-black focus:outline-none"
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
        class="md:hidden bg-[#8DD9BF] text-white p-4 space-y-2 mt-2 font-font"
      >
        <router-link
          v-for="(item, index) in menuItems"
          :key="index"
          :to="item.href"
        >
          <div
            @click="closeMenu"
            class="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            <span class="block text-black text-lg">
              {{ item.text }}
            </span>
          </div>
        </router-link>
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
        { text: 'Sua Rede', href: '/MinhaRede' },
        { text: 'Meus Lidos', href: '/MeusLidos' },
        { text: 'Próximas Leituras', href: '/Prox' }
      ],
    };
  },
  methods: {
    closeMenu() {
      this.menuOpen = false;  // Fecha o menu ao clicar em um item
    }
  }
};
</script>
