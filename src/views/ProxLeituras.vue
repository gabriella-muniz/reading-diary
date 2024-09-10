<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center py-20 px-4">
    <!-- Botão para abrir o modal -->
    <div class="w-full max-w-md mb-6 flex justify-center">
      <button
        @click="openModal"
        class="bg-gradient-to-r from-teal-600 to-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:from-teal-500 hover:to-blue-300 transition-colors font-font2"
      >
        Adicionar Livro para Ler
      </button>
    </div>

    <!-- Seção de Próximas Leituras -->
    <section class="py-15 px-8">
      <h2 class="text-2xl font-semibold mb-4 font-font2 text-center">Próximas Leituras</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(book, index) in futureReads"
          :key="index"
          class="bg-white p-6 shadow-md rounded-md flex flex-col"
        >
          <img
            v-if="book.image"
            :src="book.image"
            alt="Capa do Livro"
            class="w-full h-64 object-cover rounded-md mb-4"
          />
          <div class="flex-1 text-left">
            <h3 class="text-xl font-semibold mb-2">{{ book.name }}</h3>
            <p class="text-gray-600 mb-2 break-words">{{ book.description }}</p>
          </div>
          <div class="mt-4 flex space-x-2">
            <button
              @click="editBook(index)"
              class="text-blue-500 hover:text-blue-700 transition-colors"
            >
              Editar
            </button>
            <button
              @click="removeBook(index)"
              class="text-red-500 hover:text-red-700 transition-colors"
            >
              Excluir
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal de Adicionar/Editar Livro para Ler -->
    <BookModal2
      :isOpen="isModalOpen"
      :book="currentBook"
      :editingIndex="editingIndex"
      @submit="handleBookSubmit"
      @close="closeModal"
    />
  </div>
</template>

<script>
import BookModal2 from '../components/BookModal2.vue';

export default {
  components: {
    BookModal2
  },
  data() {
    return {
      futureReads: [],
      isModalOpen: false,
      currentBook: {},
      editingIndex: null
    };
  },
  created() {
    this.loadBooksFromLocalStorage();
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
      this.currentBook = {};
      this.editingIndex = null;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    addBook(book) {
      this.futureReads.push(book);
      this.saveBooksToLocalStorage();
    },
    editBook(index) {
      this.editingIndex = index;
      this.currentBook = { ...this.futureReads[index] };
      this.isModalOpen = true;
    },
    handleBookSubmit(book, index) {
      if (index !== null) {
        this.futureReads.splice(index, 1, book);
      } else {
        this.addBook(book);
      }
      this.saveBooksToLocalStorage();
      this.closeModal();
    },
    removeBook(index) {
      this.futureReads.splice(index, 1);
      this.saveBooksToLocalStorage();
    },
    saveBooksToLocalStorage() {
      localStorage.setItem('futureReads', JSON.stringify(this.futureReads));
    },
    loadBooksFromLocalStorage() {
      const savedBooks = localStorage.getItem('futureReads');
      if (savedBooks) {
        this.futureReads = JSON.parse(savedBooks);
      }
    }
  }
};
</script>
