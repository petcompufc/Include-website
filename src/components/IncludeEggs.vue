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

  .egg-items {
    width: 120px;
    height: 120px;
  }

  .egg-subitems section {
    width: 60px;
    height: 60px;
    margin: 0 auto;
  }

  .egg-subitems h1 {
    font-size: 12px;
  }

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
  <section class="egg-items">
    <section class="egg-subitems">
      <section :class="team.type"></section>
      <h1>{{ team.name }}</h1>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    team: {
      type: Object,
      required: true,
    },
  },
};

</script>
