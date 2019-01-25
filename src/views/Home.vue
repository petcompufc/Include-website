<style scoped>
  .what-is-include, .what-include-have, .who-participates {padding: 50px 0;}

  /* what-is-include style rules start */

  .what-is-include p {
    max-width: 500px;
    margin: 30px auto;
    padding: 0 20px;
  }
  /* what-is-include style rules end */

  /* what-include-have style rules start */

  .what-include-have {
    background-color: rgb(227, 233, 218);
  }

  .what-include-have-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  .what-include-have-items {
    width: 250px;
    margin: 0 20px;
  }
  /* what-include-have style rules end */

  /* who-participates style rules start */
  .who-participates p {
    width: 450px;
    margin: 30px auto;
    padding:0 30px;
  }

  /* who-participates style rules end */

</style>

<template>
  <section id="home">

    <article class="what-is-include">
      <h1>Include</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor mollis lacus, vehicula euismod tellus gravida quis. Vivamus eu sodales odio. Fusce quis ligula id est ullamcorper euismod. Curabitur fermentum maximus faucibus. Donec ut ex hendrerit mauris pretium consequat. Mauris auctor, urna et viverra pulvinar, odio libero accumsan ex, eget faucibus eros lectus nec turpis. Pellentesque egestas scelerisque nibh, ut iaculis urna imperdiet a. Suspendisse vehicula non dui eget accumsan. Nullam posuere mi ac lacinia cursus. </p>
    </article>

    <article class="what-include-have">
      <h1>O que tem no include</h1>
      <section class="what-include-have-content">
        <section class="apresentation what-include-have-items">
          <h2>Apresentações</h2>
          <img src="../assets/imgs/talks.png" alt="Balão de conversa">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor mollis lacus, vehicula euismod tellus gravida quis. Vivamus eu sodales odio. Fusce quis ligula id est ullamcorper euismod. Curabitur fermentum maximus faucibus.</p>
        </section>
        <section class="dynamics what-include-have-items">
          <h2>Gincanas</h2>
          <img src="../assets/imgs/games.png" alt="video-game portátil">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor mollis lacus, vehicula euismod tellus gravida quis. Vivamus eu sodales odio. Fusce quis ligula id est ullamcorper euismod. Curabitur fermentum maximus faucibus.</p>
        </section>
        <section class="choice-jedi-master what-include-have-items">
          <h2>Adote</h2>
          <img src="../assets/imgs/adopt.png" alt="bebê">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor mollis lacus, vehicula euismod tellus gravida quis. Vivamus eu sodales odio. Fusce quis ligula id est ullamcorper euismod. Curabitur fermentum maximus faucibus.</p>
        </section>
      </section>
    </article>

    <article class="who-participates">
      <h1>Quem participa?</h1>
      <p>Nós, PET Computação em parceria coms o PET de engenharia da computação e engenharia de telecomunicação organizamos esse evento especialmente para você, calouro desses cursos.</p>
      <IncludeEggs />
    </article>

  </section>
</template>

<script>
import IncludeEggs from '@/components/IncludeEggs.vue';

export default {
  components: {
    IncludeEggs,
  },
};
</script>
