<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center py-20 px-4">
    <!-- Botão para abrir o modal -->
    <div class="w-full max-w-md mb-2 flex justify-center">
      <button
        @click="openModal"
        class="bg-black text-[#8DD9BF] py-3 px-6 text-lg uppercase tracking-wider font-bold rounded-lg shadow-md font-font"
      >
        Adicionar Livro
      </button>
    </div>

    <!-- Mensagem de Sucesso -->
    <div v-if="showSuccessMessage" class="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-md">
      Livro salvo com sucesso!
    </div>

    <!-- Lista de Livros Lidos -->
    <section class="py-4 px-8">
      <h2 class="text-2xl font-semibold font-font2 text-center mb-8">Seus Livros Lidos</h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
       
        <div
          v-for="(book, index) in books"
          :key="index"
          class="bg-white p-6 shadow-md rounded-md flex flex-col">
        
          <img
            v-if="book.image"
            :src="book.image"
            alt="Capa do Livro"
            class="w-full h-64 object-cover rounded-md mb-4"
          />
          <div class="flex-1 text-left">
            <h3 class="text-2xl font-semibold mb-2 text-black">{{ book.name }}</h3>
            <p class="text-gray-600 mb-2 break-words">{{ book.review }}</p>
            <p class="text-gray-500 font-medium">Nota: {{ book.rating }}/5</p>
          </div>
          <div class="mt-4 flex space-x-2">
            <button
              @click="editBook(index)"
              class="text-[#8DD9BF] hover:text-blue-500 transition-colors"
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

    <!-- Modal de Adicionar/Editar Livro -->
    <section>
      <BookModal
        :isOpen="isModalOpen"
        :book="currentBook"
        :editingIndex="editingIndex"
        @submit="handleBookSubmit"
        @close="closeModal"
      />
    </section>
  </div>
</template>

<script>
import BookModal from '../components/BookModal.vue';

export default {
  components: {
    BookModal,
  },
  data() {
    return {
      books: [],
      isModalOpen: false,
      currentBook: {},
      editingIndex: null,
      showSuccessMessage: false,
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
      this.books.unshift(book); // Adiciona o livro no início da lista
      this.showSuccessMessage = true; // Exibe a mensagem de sucesso
      setTimeout(() => {
        this.showSuccessMessage = false; // Oculta a mensagem após 3 segundos
      }, 3000);
      this.saveBooksToLocalStorage();
    },
    editBook(index) {
      this.editingIndex = index;
      this.currentBook = { ...this.books[index] };
      this.isModalOpen = true;
    },
    handleBookSubmit(book, index) {
      if (index !== null) {
        this.books.splice(index, 1, book); // Atualiza o livro existente
      } else {
        this.addBook(book); // Adiciona o novo livro no início
      }
      this.saveBooksToLocalStorage();
      this.closeModal();
    },
    removeBook(index) {
      this.books.splice(index, 1);
      this.saveBooksToLocalStorage();
    },
    saveBooksToLocalStorage() {
      localStorage.setItem('books', JSON.stringify(this.books));
    },
    loadBooksFromLocalStorage() {
      const savedBooks = localStorage.getItem('books');
      if (savedBooks) {
        this.books = JSON.parse(savedBooks);
      }
    },
  },
};
</script>






