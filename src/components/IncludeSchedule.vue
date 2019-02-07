<style scoped>
  /* general rules */
  .schedule-table {
    font-size: 1.8em;
    table-layout: fixed;
    width: 95%;
    margin: 0 auto;
    border-collapse: collapse;
    border: 1px solid rgb(13,37,76);
  }

  #first-column {
    width: 100px;
  }

  .schedule-table-body tr {
    transition: all .2s ease-in;
    cursor: pointer;
    height: 80px;
  }

  .schedule-table-body tr:nth-child(2n+1) {
    background-color: rgb(214,214,214);
  }

  .schedule-table-body tr:hover {
    background-color: rgb(13,37,76);
    color: rgb(255,255,255);
  }

  .schedule-table-body td {
    padding: 10px;
  }
</style>

<template>
  <section>
    <table class="schedule-table">
      <colgroup>
        <col id="first-column">
        <col id="second-column">
      </colgroup>
      <tbody class="schedule-table-body">
        <tr
          v-for="(rout, index) in routine"
          :key="index"
          @click="showInfo(rout)"
        >
          <td>{{ rout.hour }}</td>
          <td>{{ rout.activity }}</td>
        </tr>
      </tbody>
    </table>

    <IncludeModal v-if="isModalVisible" @close="closeInfo">
      <h1 slot="header">{{ modalInfo.activity }}</h1>
      <template slot="body">
        <h1>{{ modalInfo.hour }}</h1>
        <p>{{ modalInfo.description }}</p>
      </template>
    </IncludeModal>
  </section>
</template>

<script>

import IncludeModal from './IncludeModal.vue';

export default {
  components: {
    IncludeModal,
  },

  props: {
    routine: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      isModalVisible: false,
      modalInfo: null,
    };
  },

  methods: {
    showInfo(item) {
      this.modalInfo = item;
      this.isModalVisible = true;
    },

    closeInfo() {
      this.modalInfo = null;
      this.isModalVisible = false;
    },
  },
};
</script>
