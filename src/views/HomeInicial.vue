<template>
  <div class="bg-gray-100 min-h-screen text-black py-12 relative">
    <!-- Banner de Boas-Vindas -->
    <section class="bg-gradient-to-r from-teal-600 to-blue-500 text-white py-24 px-12 text-center shadow-lg">
      <h1 class="text-6xl font-extrabold mb-8 font-font">Bem-vindo ao Seu Diário de Leituras</h1>
      <RotatingText />
    </section>

    <!-- Botão para adicionar livro -->
    <section class="py-5 text-center">
      <button @click="openModal" class="bg-gradient-to-r from-teal-600 to-blue-500 text-white px-8 py-4 rounded-md shadow-md hover:bg-green-700 transition-colors">
        Adicionar Livro
      </button>
    </section>

    <!-- Modal de Adicionar Livro -->
    <BookModal
      :isOpen="isModalOpen"
      @close="closeModal"
      @submit="addBook"
    />

    <!-- Mensagem de Sucesso -->
    <div v-if="showSuccessMessage" class="fixed top-4 left-1/2 transform -translate-x-1/2 p-6 bg-green-600 text-white rounded-md shadow-lg z-50">
      Livro adicionado com sucesso!
    </div>

    <!-- Livros Lidos Recentemente -->
    <section class="py-5 px-5">
      <h2 class="text-4xl font-bold mb-10 text-center font-font">Livros Recentemente Lidos</h2>
      <div v-if="recentBooks.length === 0" class="text-center text-gray-600 mb-5">
        <p class="font-font2">Você ainda não adicionou nenhum livro.</p>
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div v-for="book in recentBooksToShow" :key="book.id" class="bg-gray-200 p-8 rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 ease-in-out">
          <img :src="book.image" alt="Capa do Livro" class="w-full h-72 object-cover mb-6 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105" />
          <h3 class="text-3xl font-semibold mb-3 text-black">{{ book.name }}</h3>
          <p class="text-gray-500">Nota: {{ book.rating }}/5</p>
        </div>
      </div>
    </section>

    <!-- Meta de Leitura -->
    <section class="py-20 px-12 bg-gray-800 shadow-lg">
      <h2 class="text-4xl font-bold mb-12 text-center text-white font-font">Minha Meta de Leitura</h2>
      <div class="text-center">
        <p class="text-2xl mb-6 text-white font-font2">Meta de leitura de 2024: 50 livros</p>
        <div class="w-4/5 md:w-3/5 mx-auto bg-gray-700 rounded-full h-12 relative">
          <div class="bg-blue-600 h-full rounded-full font-font2" :style="{ width: progress + '%' }"></div>
          <span class="absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-100">{{ booksRead }} livros lidos</span>
        </div>
        <p class="mt-4 text-gray-400 font-font2">{{ booksRead }} livros lidos até agora!</p>
      </div>
    </section>

    <!-- Citação Inspiradora -->
    <section class="py-20 px-12">
      <blockquote class="text-center italic text-2xl text-black">
        "Um livro é um sonho que você segura em suas mãos." - Neil Gaiman
      </blockquote>
    </section>
  </div>
</template>

<script>
import RotatingText from '../components/RotatingText.vue';
import BookModal from '../components/BookModal.vue';

export default {
  components: {
    RotatingText,
    BookModal,
  },
  data() {
    return {
      recentBooks: [],
      booksRead: 0,
      progress: 0,
      isModalOpen: false,
      showSuccessMessage: false,
    };
  },
  computed: {
    recentBooksToShow() {
      return this.recentBooks.slice(-3).reverse();
    },
  },
  created() {
    this.loadBooksFromLocalStorage();
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    addBook(newBook) {
      this.recentBooks.push(newBook);
      this.booksRead = this.recentBooks.length;
      this.progress = (this.booksRead / 50) * 100;
      this.saveBooksToLocalStorage();
      this.closeModal();
      this.showSuccess();
    },
    showSuccess() {
      this.showSuccessMessage = true;
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 3000);
    },
    loadBooksFromLocalStorage() {
      const savedBooks = localStorage.getItem('books');
      if (savedBooks) {
        this.recentBooks = JSON.parse(savedBooks);
        this.booksRead = this.recentBooks.length;
        this.progress = (this.booksRead / 50) * 100;
      }
    },
    saveBooksToLocalStorage() {
      localStorage.setItem('books', JSON.stringify(this.recentBooks));
    },
  },
};
</script>
