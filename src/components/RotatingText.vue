<template>
  <div class="relative w-full overflow-hidden">
    <div
      class="flex whitespace-normal transition-transform duration-1000"
      :style="wrapperStyle"
    >
      <p
        v-for="(phrase, index) in phrases"
        :key="index"
        class="flex-shrink-0 w-full text-lg font-light text-center px-4 sm:px-6 md:px-8 lg:px-12 py-5"
      >
        {{ phrase }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phrases: [
        'Veja detalhes no seu menu "Meus Lidos".',
        'Adicione novos livros e acompanhe sua leitura.',
        'Descubra novas histórias inspiradoras!',
        'Registre suas leituras e defina metas para 2024.',
      ],
      currentIndex: 0,
      interval: null,
    };
  },
  computed: {
    wrapperStyle() {
      return {
        transform: `translateX(-${this.currentIndex * 100}%)`,
      };
    },
  },
  mounted() {
    this.startRotation();
  },
  beforeUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  },
  methods: {
    startRotation() {
      this.interval = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.phrases.length;
      }, 5000);
    },
  },
};
</script>


