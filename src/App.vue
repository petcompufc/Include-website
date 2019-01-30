<style>
  @import url("./assets/css/default.css");
  #app {
    height: 100vh;
    max-width: 2000px;
  }

  #include-header {
    box-shadow: 2px 2px 5px rgb(214,214,214);
    height: 100px;
  }

  #include-main {
    min-height: 84vh;
  }

  #include-header, #include-footer {
    background-color: rgb(0,0,0);
    color: rgb(255,255,255);
  }

</style>

<template>
  <section id="app">
    <IncludeHeader id="include-header" />
    <main id="include-main">
      <router-view></router-view>
    </main>
    <IncludeFooter id="include-footer" />
  </section>
</template>

<script>
import IncludeHeader from '@/components/IncludeHeader.vue';
import IncludeFooter from '@/components/IncludeFooter.vue';

export default {
  components: {
    IncludeHeader,
    IncludeFooter,
  },

  methods: {
    changeBeginState() {
      this.isBegin = (this.isBegin) ? false : this.isBegin;
    },
  },
};

</script>
