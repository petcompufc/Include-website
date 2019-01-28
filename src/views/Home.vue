<style scoped>
  /* general rules */
  article, .activities-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* article rules */
  article {
    box-shadow: 1px 6px 5px rgb(214,214,214);
    flex-direction: column;
    padding: 100px 50px;
  }

  article:nth-child(2n) {
    background-color: rgb(13,37,76);
    color: rgb(214,214,214);
  }

  article h1 { margin: 50px 0 }

  /* what-is rules */
  .what-is-container { max-width: 400px }

  /* activities rules */
  .activities-content {
    flex-wrap: wrap;
  }

  .activities-items {
    background-color: rgb(255,255,255);
    color: rgb(0,0,0);
    max-width: 350px;
    min-height: 350px;
    margin: 20px;
    padding: 10px 30px;
    border-radius: 10px;
    text-align: center;
    transition: background-color .2s ease;
  }

  .activities-items:hover {
    background-color: rgb(223,227,238);
  }

  /* participants rules */
  .participants-container p {
    /* max-width: 400px; */
    /* margin: 20px auto; */
  }
</style>

<template>
  <section id="home-container">

    <article>
      <section class=" what-is-container">
        <IncludeTitle />
        <p>{{ include.text }}</p>
      </section>
    </article>

    <article>
      <section class="activities-container">
        <h1>{{ activities.mainTitle }}</h1>
        <section class="activities-content">
          <section
            v-for="(act, index) in activities.activities"
            :key="index"
            class="activities-items"
          >
            <img :src="act.sprite" :alt="act.alt" />
            <p>{{ act.text }}</p>
          </section>
        </section>
      </section>
    </article>

    <article>
      <section class="participants-container">
        <h1>{{ participants.mainTitle }}</h1>
        <p>{{ participants.description }}</p>
        <IncludeEggs :teams="participants.teams" />
      </section>
    </article>

  </section>
</template>

<script>
import IncludeEggs from '@/components/IncludeEggs.vue';
import IncludeTitle from '@/components/IncludeTitle.vue';
import { include, activitiesReview, participants } from '../models/include';

export default {
  components: {
    IncludeEggs,
    IncludeTitle,
  },
  data() {
    return {
      include,
      activities: activitiesReview,
      participants,
    };
  },
};
</script>
