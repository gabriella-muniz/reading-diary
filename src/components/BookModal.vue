<template>
    <div v-if="isOpen" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-2xl font-bold mb-4">{{ editingIndex !== null ? 'Editar Livro' : 'Adicionar Livro' }}</h2>
        <div class="flex flex-col space-y-4">
          <div>
            <label for="bookName" class="block text-sm font-medium text-gray-700">Nome do Livro:</label>
            <input
              id="bookName"
              v-model="bookName"
              type="text"
              placeholder="Nome do livro"
              class="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1 w-full"
            />
          </div>
          <div>
            <label for="bookReview" class="block text-sm font-medium text-gray-700">O que você achou do livro:</label>
            <input
              id="bookReview"
              v-model="bookReview"
              type="text"
              placeholder="O que você achou do livro"
              class="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1 w-full"
            />
          </div>
          <div>
            <label for="bookRating" class="block text-sm font-medium text-gray-700">Nota (1 a 5):</label>
            <input
              id="bookRating"
              v-model="bookRating"
              type="number"
              min="1"
              max="5"
              placeholder="Nota (1 a 5)"
              class="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1 w-full"
            />
          </div>
          <div>
            <label for="bookImage" class="block text-sm font-medium text-gray-700">Capa do Livro:</label>
            <input
              id="bookImage"
              type="file"
              @change="handleFileUpload"
              class="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1 w-full"
            />
          </div>
          <div class="flex justify-end space-x-2 mt-4">
            <button
              @click="submit"
              class="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-colors"
            >
              {{ editingIndex !== null ? 'Salvar Alterações' : 'Adicionar Livro' }}
            </button>
            <button
              @click="closeModal"
              class="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 transition-colors"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isOpen: {
        type: Boolean,
        required: true
      },
      book: {
        type: Object,
        default: () => ({})
      },
      editingIndex: {
        type: Number,
        default: null
      }
    },
    data() {
      return {
        bookName: '',
        bookReview: '',
        bookRating: '',
        bookImage: null
      };
    },
    watch: {
      isOpen(newValue) {
        if (newValue) {
          // Limpar os campos quando o modal for aberto para adicionar um novo livro
          if (this.editingIndex === null) {
            this.bookName = '';
            this.bookReview = '';
            this.bookRating = '';
            this.bookImage = null;
          } else {
            // Preencher os campos com as informações do livro quando estiver editando
            this.bookName = this.book.name || '';
            this.bookReview = this.book.review || '';
            this.bookRating = this.book.rating || '';
            this.bookImage = this.book.image || null;
          }
        }
      }
    },
    methods: {
      handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.bookImage = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      },
      submit() {
        this.$emit('submit', {
          name: this.bookName,
          review: this.bookReview,
          rating: this.bookRating,
          image: this.bookImage
        }, this.editingIndex);
        this.closeModal();
      },
      closeModal() {
        this.$emit('close');
      }
    }
  };
  </script>
  
 
  