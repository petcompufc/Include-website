<style scoped>
 
</style>

<template>
  <section id="schedule-container">
    <h1>Cronograma</h1>
    <section id="schedule-content">
      <nav id="schedule-nav">
        <router-link class="schedule-nav-items" to="/schedule/wednesday">Quarta-feira (20/02)</router-link>
        <router-link class="schedule-nav-items" to="/schedule/thursday">Quinta-feira (21/02)</router-link>
        <router-link class="schedule-nav-items" to="/schedule/friday">Sexta-feira (22/02)</router-link>
      </nav>
      <IncludeSchedule :routine="routine"/>
    </section>
  </section>

</template>
<script>

import IncludeSchedule from '@/components/IncludeSchedule.vue';
import schedule from '../models/schedule';

export default {
  components: {
    IncludeSchedule,
  },

  computed: {
    routine() {
      const { day } = this.$route.params;
      return schedule[day];
    },
  },
};
</script>
