<style scoped>

</style>

<template>
  <section id="home">

    <article class="what-is">
      <h1>{{ include.title }}</h1>
      <p>{{ include.text }}</p>
    </article>

    <article class="activities">
      <h1>{{ activities.mainTitle }}</h1>
      <section
        v-for="(act, index) in activities.activities"
        :key="index"
      >
        <img :src="act.sprite" :alt="act.alt" />
        <p>{{ act.text }}</p>
      </section>
    </article>

    <article class="participants">
      <h1>{{ participants.mainTitle }}</h1>
      <section>
        <IncludeEggs
          v-for="(team, index) in participants.teams"
          :key="index"
          :team="team"
        />
      </section>
    </article>

  </section>
</template>

<script>
import IncludeEggs from '@/components/IncludeEggs.vue';
import { include, activitiesReview, participants } from '../models/include';

export default {
  components: {
    IncludeEggs,
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
