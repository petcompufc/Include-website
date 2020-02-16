<style scoped>
  /* general rules */
  article,
  #what-is-container,
  #activities-container,
  #participants-container,
  #workshops-container,
  .activities-list,
  .workshops-list,
  .workshops-list li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #what-is-container, #participants-container p {
    max-width: 400px;
  }

  /* article rules */
  article {
    box-shadow: 1px 6px 5px rgb(214,214,214);
    flex-direction: column;
    padding: 100px 5px;
  }

  article:nth-child(2n) {
    background-color: rgb(13,37,76);
    color: rgb(214,214,214);
  }

  article h1 { margin: 50px 0; font-size: 3em }
  article p { text-align: left; }

  /* activities rules */

  .activities-list {
    flex-flow: row wrap;
  }

  .activities-list li {
    background-color: rgb(255,255,255);
    color: rgb(0,0,0);
    max-width: 300px;
    height: 320px;
    margin: 20px 10px;
    padding: 20px;
    border-radius: 5px;
    transition: background-color .4s ease;
    font-size: 1.2em;
    text-align: center;
  }

  .activities-list li h1 {
    font-size: 1.2em;
    margin: 0 0 10px;
  }

  .activities-list li p {
    margin-top: 10px;
  }

  .activities-list li:hover {
    background-color: rgb(214,214,214);
  }

  /* workshop rules */

  .workshops-list li {
    flex-direction: row;
    background-color: rgb(255,255,255);
    color: rgb(0,0,0);
    padding: 20px 10px;
    border-radius: 15px 0 15px 0;
    margin: 20px 0;
    box-shadow: 2px 2px 5px rgba(214,214,214, .2);
  }

  .workshops-list li h1 {
    font-size: 1em;
    margin: 10px 0;
  }

  .workshops-list h1, .workshops-list p { text-align: left }

  .workshops-list li section {
    max-width: 250px;
    margin: 0 0 0 20px;
  }

</style>

<template>
  <section id="home-container">

    <article>
      <section id="what-is-container">
        <IncludeTitle />
        <p>O Include é um evento feito para você que esta ingressando no curso de Ciência da Computação e gostaria de conhecer um pouco mais sobre o Campus e as atividades realizada pelo seu curso.</p>
      </section>
    </article>

    <article>
      <section id="activities-container">
        <h1>Atividades do Include</h1>
        <ul class="activities-list">
          <li>
            <h1>Apresentações</h1>
            <img src="../assets/imgs/talks.png" alt="Balão de Conversa">
            <p>Conheça seu curso, seus novos companheiros de turma, saiba quais as entidades acadêmica presentes e quais atividades elas desempenham.</p>
          </li>
          <li>
            <h1>Gincana</h1>
            <img src="../assets/imgs/games.png" alt="Video game">
            <p>Trabalhe em equipe com seus colegas de turma para resolver enigmas e conhecer o campus.</p>
          </li>
          <li>
            <h1>Adote</h1>
            <img src="../assets/imgs/adopt.png" alt="Bebê">
            <p>Sente-se preocupado com as cadeiras do primeiro semestre? Escolha um veterano para lhe ajudar nessa nova jornada acadêmica.</p>
          </li>
        </ul>
      </section>
    </article>

    <article>
      <section id="workshops-container">
        <h1>Workshops</h1>
        <ul class="workshops-list">
          <li>
            <img src="../assets/imgs/python.png" alt="Python logo">
            <section class="workshops-list-content">
              <h1>Fundamentos com Python</h1>
              <p>Aprenda conceitos básico da programação estruturada como o que é uma variável, estruturas de condições, estruturas de laço, funções e muito mais com Python.</p>
            </section>
          </li>
          <li>
            <img src="../assets/imgs/git+github.png" alt="git mais github logo">
            <section class="workshops-list-content">
              <h1>Git + Github</h1>
              <p>Aprenda a versionar e compartilhar suas aplicações com a comunidade com git e github.</p>
            </section>
          </li>
          <li>
            <img src="../assets/imgs/terminal.png" alt="Ícone de Terminal verde">
            <section class="workshops-list-content">
              <h1>Usando o terminal Linux</h1>
              <p>Aprenda os comandos básicos do terminal linux para otimizar seu tempo ao desenvolver aplicações sejam mobile, web ou front-end, back-end.</p>
            </section>
          </li>
        </ul>
      </section>
    </article>

  </section>
</template>

<script>
import IncludeTitle from '@/components/IncludeTitle.vue';

export default {
  components: {
    IncludeTitle,
  },
  data() {
    return {
      teams: [
        { name: 'Engenharia da Computação', type: 'blue' },
        { name: 'Ciência da Computação', type: 'red' },
        { name: 'Engenharia de Telecomunicações', type: 'yellow' },
      ],
    };
  },
};
</script>
