<style scoped>
  #schedule-container {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .list-course {
    font-size: 2em;
    text-align: center;
  }

  .list-course li {
    margin: 10px 0;
    padding: 20px 0;
    max-width: 300px;
    background-color: rgb(13,37,76);
    color: rgb(255,255,255);
    border-radius: 30px 0 30px 0;
    transition: background-color .8s ease;
  }

  .list-course li:nth-child(1):hover { background-color: rgb(161, 29, 27) }
  .list-course li:nth-child(2):hover { background-color: rgb(60, 77, 155) }
  .list-course li:nth-child(3):hover { background-color: rgb(244, 155, 69) }

  #schedule-container h1 {
    margin: 30px 0;
    font-size: 3em;
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

  #schedule-content button {
    margin: 10px 0;
    padding: 10px;
    border: none;
    background-color: rgb(13,37,76);
    border-radius: 30px;
    color: rgb(255,255,255);
    transition: background-color .3s ease;
  }

  #schedule-content button:hover { background-color: rgb(19, 52, 107) }

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
    <ul v-if="!isCourse" class="list-course">
      <li @click="chooseCourse('cc')">Ciência da Computação</li>
      <li @click="chooseCourse('ec')">Engenharia da Computação</li>
      <li @click="chooseCourse('et')">Engenharia de Telecomunicação</li>
    </ul>
    <section v-else id="schedule-content">
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
      <button @click="backToChooseCourse" >Escolher curso</button>
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
      course: '',
      isCourse: false,
    };
  },

  computed: {
    routine() {
      const { day } = this.$route.params;
      return schedule[day].filter(elem => elem.type === 'all' || elem.type === this.course);
    },
  },

  methods: {
    changeSelectedItem(item) {
      const selectedItem = this.navItems.find(elem => elem.selected === true);
      selectedItem.selected = false;
      const newSelectedItem = this.navItems.find(elem => elem.name === item.name);
      newSelectedItem.selected = true;
    },

    chooseCourse(type) {
      this.course = type;
      this.isCourse = true;
    },

    backToChooseCourse() {
      this.isCourse = false;
    },
  },
};
</script>
