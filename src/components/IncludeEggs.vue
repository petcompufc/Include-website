<style scoped>
  @keyframes changeGreenEgg {
    0% {
      background-image: url("../assets/imgs/green-1.png");
    }
    15% {
      background-image: url("../assets/imgs/green-2.png");
    }
    30% {
      background-image: url("../assets/imgs/green-3.png");
    }
    45% {
      background-image: url("../assets/imgs/green-4.png");
    }
    60% {
      background-image: url("../assets/imgs/green-5.png");
    }
    75% {
      background-image: url("../assets/imgs/green-6.png");
    }
    100% {
      background-image: url("../assets/imgs/green-7.png");
    }
  }

  @keyframes changeBlueEgg {
    0% {
      background-image: url("../assets/imgs/blue-1.png");
    }
    15% {
      background-image: url("../assets/imgs/blue-2.png");
    }
    30% {
      background-image: url("../assets/imgs/blue-3.png");
    }
    45% {
      background-image: url("../assets/imgs/blue-4.png");
    }
    60% {
      background-image: url("../assets/imgs/blue-5.png");
    }
    75% {
      background-image: url("../assets/imgs/blue-6.png");
    }
    100% {
      background-image: url("../assets/imgs/blue-7.png");
    }
  }

  @keyframes changeYellowEgg {
    0% {
      background-image: url("../assets/imgs/yellow-1.png");
    }
    15% {
      background-image: url("../assets/imgs/yellow-2.png");
    }
    30% {
      background-image: url("../assets/imgs/yellow-3.png");
    }
    45% {
      background-image: url("../assets/imgs/yellow-4.png");
    }
    60% {
      background-image: url("../assets/imgs/yellow-5.png");
    }
    75% {
      background-image: url("../assets/imgs/yellow-6.png");
    }
    100% {
      background-image: url("../assets/imgs/yellow-7.png");
    }
  }

  #pets-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .pets-items {
    width: 200px;
    height: 200px;
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

  .green-egg {
    background-image: url("../assets/imgs/green-1.png");
    animation: changeGreenEgg 2s linear forwards infinite;
  }

  .blue-egg {
    background-image: url("../assets/imgs/blue-1.png");
    animation: changeBlueEgg 2s linear forwards infinite;
  }

  .yellow-egg {
    background-image: url("../assets/imgs/yellow-1.png");
    animation: changeYellowEgg 2s linear forwards infinite;
  }

  /* eggs stuffs end */

</style>

<template>
  <section id="pets-container">

    <section class="pets-items cc">
      <section class="egg green-egg"></section>
      <h1>Ciência da Computação</h1>
    </section>

    <section class="pets-items ec">
      <section class="egg blue-egg"></section>
      <h1>Engenharia da Computação</h1>
    </section>

    <section class="pets-items et">
      <section class="egg yellow-egg"></section>
      <h1>Engenharia de Telecomunicação</h1>
    </section>

  </section>
</template>

<script>
export default {};
</script>
