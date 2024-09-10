<template>
  <div class="bg-gray-300 min-h-screen text-gray-100 py-10">
    <!-- Banner de Boas-Vindas -->
    <section class="bg-gradient-to-r from-teal-600 to-blue-500 text-white py-16 px-8 text-center shadow-lg">
      <h1 class="text-5xl font-extrabold mb-6 font-font">Bem-vindo ao Seu Diário de Leituras</h1>
      <p class="text-lg font-light">Registre suas leituras, metas e descubra novas histórias inspiradoras!</p>
    </section>

    <!-- Livros Lidos Recentemente -->
    <section class="py-16 px-8">
      <h2 class="text-3xl font-bold mb-8 text-center font-font2 text-black">Livros Recentemente Lidos</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="book in recentBooks" :key="book.id" class="bg-gray-200 p-6 rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 ease-in-out">
          <img :src="book.image" alt="Capa do Livro" class="w-full h-64 object-cover mb-4 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105" />
          <h3 class="text-2xl font-semibold mb-2 text-black">{{ book.name }}</h3>
          <p class="text-gray-400">Nota: {{ book.rating }}/5</p>
        </div>
      </div>
    </section>

    <!-- Meta de Leitura -->
    <section class="py-16 px-8 bg-gray-800  shadow-lg">
      <h2 class="text-3xl font-bold mb-8 text-center">Minha Meta de Leitura</h2>
      <div class="text-center">
        <p class="text-xl mb-4">Meta de leitura de 2024: 50 livros</p>
        <div class="w-3/4 md:w-1/2 mx-auto bg-gray-700 rounded-full h-8 relative">
          <div class="bg-blue-600 h-full rounded-full" :style="{ width: progress + '%' }"></div>
          <span class="absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-100">{{ booksRead }} livros lidos</span>
        </div>
        <p class="mt-2 text-gray-400">{{ booksRead }} livros lidos até agora!</p>
      </div>
    </section>

    <!-- Citação Inspiradora -->
    <section class="py-16 px-8">
      <blockquote class="text-center italic text-black text-lg">
        "Um livro é um sonho que você segura em suas mãos." - Neil Gaiman
      </blockquote>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recentBooks: [],
      booksRead: 0,
      progress: 0,
    };
  },
  created() {
    this.loadBooksFromLocalStorage();
  },
  methods: {
    loadBooksFromLocalStorage() {
      const savedBooks = localStorage.getItem('books');
      if (savedBooks) {
        this.recentBooks = JSON.parse(savedBooks);
        this.booksRead = this.recentBooks.length; // Atualiza o contador de livros lidos
        this.progress = (this.booksRead / 50) * 100; // Atualiza o progresso
      }
    },
  },
};
</script>
