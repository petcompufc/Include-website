<style scoped>
  /* egg animation */
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

  /* egg rules */
  .egg-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 50px 0;
  }

  .egg-items {
    max-width: 180px;
    max-height: 180px;
    margin: 25px;
  }

  .egg-items section {
    width: 60px;
    height: 60px;
    margin: 0 auto;
  }

  .egg-items h1 {
    font-size: 1em;
  }
  /* egg options color rules */

  .blue {
    background-image: url("../assets/imgs/yoshi/blue1.png");
    animation: changeBlueEgg 2s linear forwards infinite;
  }

  .red {
    background-image: url("../assets/imgs/yoshi/red1.png");
    animation: changeGreenEgg 2s linear forwards infinite;
  }

  .yellow {
    background-image: url("../assets/imgs/yoshi/yellow1.png");
    animation: changeYellowEgg 2s linear forwards infinite;
  }

</style>

<template>
  <section class="egg-container">
    <section
      v-for="(team, index) in teams"
      :key="index"
      class="egg-items"
    >
      <section :class="team.type"></section>
      <h1>{{ team.name }}</h1>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    teams: {
      type: Array,
      required: true,
    },
  },
};

</script>
