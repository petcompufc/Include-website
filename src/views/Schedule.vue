<style scoped>

</style>

<template>
  <section>
    <h1>Cronograma</h1>
    <section>
      <nav>
        <router-link to="/schedule/wednesday">Quarta-feira (20/02)</router-link>
        <router-link to="/schedule/thursday">Quinta-feira (21/02)</router-link>
        <router-link to="/schedule/friday">Sexta-feira (22/02)</router-link>
      </nav>
    </section>
    <IncludeSchedule :routine="routine"/>
  </section>

</template>
<script>

import IncludeSchedule from '../components/IncludeSchedule.vue';
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
