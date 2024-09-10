<template>
  <div>
    <!-- Cabeçalho -->
    <HeaderInicial />

    <!-- Área principal para conteúdo da rota -->
    <main class="  bg-white">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import HeaderInicial from './components/HeaderInicial.vue';
</script>

<style scoped>

</style>
