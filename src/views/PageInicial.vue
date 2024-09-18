<template>
  <div>
    <!-- Seção de apresentação da página inicial -->
    <section
      id="home"
      class="bg-[#8DD9BF] grid grid-cols-1 md:grid-cols-2 items-center py-[8%] px-[8%] min-h-[60vh]"
    >
      <!-- Texto à esquerda -->
      <div class="h-full flex flex-col justify-center text-center md:text-left pt-16 md:pt-0">
        <!-- Cabeçalho principal da página, onde apresento o projeto -->
        <h1
          class="text-black text-[2rem] sm:text-[2.8rem] uppercase tracking-widest font-bold leading-tight font-font"
        >
          CONHEÇA SEU NOVO DIÁRIO DE LEITURA
        </h1>
        <!-- Parágrafo explicando o que é o projeto e suas funcionalidades principais -->
        <p
          class="text-black text-[1.2rem] sm:text-[1.4rem] leading-relaxed my-[20px] sm:my-[30px] font-font2 font-medium"
        >
          Um espaço digital onde você pode registrar todos os livros que já leu, compartilhar suas
          opiniões e planejar suas próximas leituras. Com o Diário de Leitura, você pode definir
          metas de leitura, acompanhar seu progresso e criar uma lista de desejos literária!
        </p>
        <!-- Botão que leva para a próxima seção -->
        <div class="flex justify-center md:justify-start">
          <router-link
            class="bg-black text-[#F4F6F9] py-[1rem] sm:py-[1.2rem] px-[2.5rem] sm:px-[3.5rem] text-[0.9rem] sm:text-[1rem] uppercase tracking-wider font-bold rounded-lg shadow-md transition-transform transform hover:translate-y-[-5px] font-font"
            to="/MinhaRede"
          >
           Sua rede
          </router-link>
        </div>
      </div>
      <!-- Imagem à direita -->
      <div class="h-full flex justify-center items-center mt-8 md:mt-0 pt-2 md:pt-0">
        <img
          src="../assets/logo-leitura.png"
          alt="Gabriella Muniz"
          class="rounded-lg w-full max-w-[300px] sm:max-w-[400px] md:max-w-[600px]"
        />
      </div>
    </section>

    <footer class="bg-[#222831] text-white px-[8%] py-0 mx-auto w-[100%] text-center">
      <p class="font-font2 pt-4"> Redes para contatar a Desenvolvedora: </p>
      <!-- Ícones Sociais Centralizados -->
      <div class="flex justify-center py-[2rem]">
        <div class="flex space-x-3">
          <a href="https://www.linkedin.com/in/gabriellamaria081199/" target="_blank">
            <i class="bi bi-linkedin text-[1.6rem] hover:text-[#8DD9BF]" aria-hidden="true"></i>
          </a>
          <a href="https://github.com/gabriella-muniz" target="_blank">
            <i class="bi bi-github text-[1.6rem] hover:text-[#8DD9BF]" aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com/gaabimunizz/" target="_blank">
            <i class="bi bi-instagram text-[1.6rem] hover:text-[#8DD9BF]" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      <!-- Linha e Texto de Copyright Centralizado -->
      <div
        class="border-t border-[#F4F6F9] flex justify-center py-[2.6rem] text-[0.7rem] font-font2"
      >
        <span> © Copyright 2024. Made by Gabriella Muniz </span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'PageInicial'
}
</script>
