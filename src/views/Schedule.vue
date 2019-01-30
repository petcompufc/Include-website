<style scoped>
  #schedule-container {
    margin: 20px 0;
  }

  #schedule-container h1 {
    margin: 20px 0;
  }

  .schedule-navbar {
    background-color: rgb(13,37,76);
    width: 95%;
    font-size: 1.8em;
    text-align: center;
  }

  .schedule-navbar ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

  }

  .schedule-navbar li {
    max-width: 300px;
  }

  .schedule-navbar li:nth-child(2) {
    border-right: 1px solid rgb(255,255,255);
    border-left: 1px solid rgb(255,255,255);
  }

  .schedule-navbar a {
    display: inline-block;
    color: rgb(255,255,255);
    width: 100%;
    padding: 10px 30px;
  }

  #schedule-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .selected {
    background-color: rgb(19, 52, 107);
  }

  @media (max-width: 788px) {
    .schedule-navbar ul {
      flex-direction: column;
    }

    .schedule-navbar li:nth-child(2) {
      border-right: none;
      border-left: none;
      border-top: 1px solid rgb(255,255,255);
      border-bottom: 1px solid rgb(255,255,255);
    }
  }
</style>

<template>
  <section id="schedule-container">
    <h1>Cronograma</h1>
    <section id="schedule-content">
      <nav class="schedule-navbar">
        <ul>
          <li
            v-for="(item, index) in navItems"
            :key="index"
            :class="{ selected: item.selected }"
            @click="changeSelectedItem(item)"
          >
            <router-link :to="item.path">{{ item.name }}</router-link>
          </li>
        </ul>
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

  data() {
    return {
      navItems: [
        { path: '/schedule/wednesday', name: 'Primeiro dia', selected: true },
        { path: '/schedule/thursday', name: 'Segundo dia', selected: false },
        { path: '/schedule/friday', name: 'Terceiro dia', selected: false },
      ],
    };
  },

  computed: {
    routine() {
      const { day } = this.$route.params;
      return schedule[day];
    },
  },

  methods: {
    changeSelectedItem(item) {
      const selectedItem = this.navItems.find(elem => elem.selected === true);
      selectedItem.selected = false;
      const newSelectedItem = this.navItems.find(elem => elem.name === item.name);
      newSelectedItem.selected = true;
    },
  },
};
</script>
