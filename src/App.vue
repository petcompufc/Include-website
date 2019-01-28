<style>
  @import url("./assets/css/default.css");
  #start, #app {
    height: 100vh;
  }

</style>

<template>
  <section v-if="isBegin" id="start">
    <IncludeTitle />
    <p>O evento feito para você, calouro!</p>
    <a @click="changeBeginState">Iniciar</a>
  </section>

  <section v-else id="app">
    <IncludeHeader />
    <router-view></router-view>
    <IncludeFooter />
  </section>
</template>

<script>
import IncludeTitle from '@/components/IncludeTitle.vue';
import IncludeHeader from '@/components/IncludeHeader.vue';
import IncludeFooter from '@/components/IncludeFooter.vue';

export default {
  components: {
    IncludeTitle,
    IncludeHeader,
    IncludeFooter,
  },

  data() {
    return {
      isBegin: false,
    };
  },

  methods: {
    changeBeginState() {
      this.isBegin = (this.isBegin) ? false : this.isBegin;
    },
  },
};

</script>
