<template>
    <div v-if="isOpen" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-2xl font-bold mb-4">{{ editingIndex !== null ? 'Editar Livro' : 'Adicionar Livro' }}</h2>
        <div class="flex flex-col space-y-4">
          <!-- Nome do livro -->
          <div>
            <label for="bookName" class="block text-sm font-medium text-gray-700">Nome do Livro:</label>
            <input
              id="bookName"
              v-model.trim="bookName"
              type="text"
              placeholder="Nome do livro"
              class="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1 w-full"
            />
          </div>
         
          <!-- Capa do Livro -->
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
              aria-label="Salvar ou adicionar livro"
            >
              {{ editingIndex !== null ? 'Salvar Alterações' : 'Adicionar Livro' }}
            </button>
            <button
              @click="closeModal"
              class="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 transition-colors"
              aria-label="Cancelar operação"
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
        bookImage: null
      };
    },
    watch: {
      isOpen(newValue) {
        if (newValue) {
          this.resetFields();
        }
      }
    },
    methods: {
      resetFields() {
        if (this.editingIndex === null) {
          // Limpar os campos para um novo livro
          this.bookName = '';
          this.bookImage = null;
        } else {
          // Preencher os campos com os dados do livro a ser editado
          this.bookName = this.book.name || '';
          this.bookImage = this.book.image || null;
        }
      },
      async handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
          this.bookImage = await this.readFileAsDataURL(file);
        }
      },
      readFileAsDataURL(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (e) => resolve(e.target.result);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      },
      submit() {
        this.$emit('submit', {
          name: this.bookName,
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
  
  
  