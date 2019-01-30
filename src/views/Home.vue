<style scoped>
  /* general rules */
  article,
  #what-is-container,
  #activities-container,
  #participants-container,
  #activities-list {
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
    padding: 100px 15px;
  }

  article:nth-child(2n) {
    background-color: rgb(13,37,76);
    color: rgb(214,214,214);
  }

  article h1 { margin: 50px 0; font-size: 3em }
  article p { text-align: justify; }

  /* activities rules */

  #activities-list {
    flex-flow: row wrap;
  }

  .activities-list-items {
    background-color: rgb(255,255,255);
    color: rgb(0,0,0);
    max-width: 300px;
    height: 320px;
    margin: 20px;
    padding: 20px;
    border-radius: 5px;
    transition: background-color .4s ease;
    font-size: 1.2em;
    text-align: center;
  }

  .activities-list-items h1 {
    font-size: 1.2em;
    margin: 0 0 10px;
  }

  .activities-list-items p {
    margin-top: 10px;
  }

  .activities-list-items:hover {
    background-color: rgb(214,214,214);
  }

</style>

<template>
  <section id="home-container">

    <article>
      <section id="what-is-container">
        <IncludeTitle />
        <p>{{ include.text }}</p>
      </section>
    </article>

    <article>
      <section id="activities-container">
        <h1>{{ activities.mainTitle }}</h1>
        <ul id="activities-list">
          <li
            v-for="(act, index) in activities.activities"
            :key="index"
            class="activities-list-items"
          >
            <h1>{{ act.title }}</h1>
            <img :src="act.sprite" :alt="act.alt" />
            <p>{{ act.text }}</p>
          </li>
        </ul>
      </section>
    </article>

    <article>
      <section id="participants-container">
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
