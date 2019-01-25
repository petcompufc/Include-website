<style scoped>
  @keyframes changeGreenEgg {
    0% {
      background-image: url("../assets/imgs/yoshi/red1.png");
    }
    15% {
      background-image: url("../assets/imgs/yoshi/red2.png");
    }
    30% {
      background-image: url("../assets/imgs/yoshi/red3.png");
    }
    45% {
      background-image: url("../assets/imgs/yoshi/red4.png");
    }
    60% {
      background-image: url("../assets/imgs/yoshi/red5.png");
    }
    75% {
      background-image: url("../assets/imgs/yoshi/red6.png");
    }
    100% {
      background-image: url("../assets/imgs/yoshi/red7.png");
    }
  }

  @keyframes changeBlueEgg {
    0% {
      background-image: url("../assets/imgs/yoshi/blue1.png");
    }
    15% {
      background-image: url("../assets/imgs/yoshi/blue2.png");
    }
    30% {
      background-image: url("../assets/imgs/yoshi/blue3.png");
    }
    45% {
      background-image: url("../assets/imgs/yoshi/blue4.png");
    }
    60% {
      background-image: url("../assets/imgs/yoshi/blue5.png");
    }
    75% {
      background-image: url("../assets/imgs/yoshi/blue6.png");
    }
    100% {
      background-image: url("../assets/imgs/yoshi/blue7.png");
    }
  }

  @keyframes changeYellowEgg {
    0% {
      background-image: url("../assets/imgs/yoshi/yellow1.png");
    }
    15% {
      background-image: url("../assets/imgs/yoshi/yellow2.png");
    }
    30% {
      background-image: url("../assets/imgs/yoshi/yellow3.png");
    }
    45% {
      background-image: url("../assets/imgs/yoshi/yellow4.png");
    }
    60% {
      background-image: url("../assets/imgs/yoshi/yellow5.png");
    }
    75% {
      background-image: url("../assets/imgs/yoshi/yellow6.png");
    }
    100% {
      background-image: url("../assets/imgs/yoshi/yellow7.png");
    }
  }

  #pets-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .pets-items {
    max-width: 200px;
    margin: 0 10px;
  }

  .pets-items h1 {
    margin: 0;
    font-size: .5em;
  }

  /* eggs stuffs start */

  .egg {
    width: 60px;
    height: 60px;
    display: inline-block;
  }

  .egg-ec {
    background-image: url("../assets/imgs/yoshi/blue1.png");
    animation: changeBlueEgg 2s linear forwards infinite;
  }

  .egg-cc {
    background-image: url("../assets/imgs/yoshi/red1.png");
    animation: changeGreenEgg 2s linear forwards infinite;
  }

  .egg-et {
    background-image: url("../assets/imgs/yoshi/yellow1.png");
    animation: changeYellowEgg 2s linear forwards infinite;
  }
  /* eggs stuffs end */

</style>

<template>
  <section id="pets-container">

    <section class="pets-items">
      <section class="egg egg-ec"></section>
      <h1>Engenharia da Computação</h1>
    </section>

    <section class="pets-items">
      <section class="egg egg-cc"></section>
      <h1>Ciência da Computação</h1>
    </section>

    <section class="pets-items">
      <section class="egg egg-et"></section>
      <h1>Engenharia de Telecomunicação</h1>
    </section>

  </section>
</template>

<script>
export default {

};

</script>
