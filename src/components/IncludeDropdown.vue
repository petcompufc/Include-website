<style>
  .dropdown-content {
    background-color: rgb(255,255,255);
    width: 100px;
    margin-top: 10px;

    position: absolute;
    box-shadow: 1px 1px 5px rgb(0,0,0);
  }

  .dropdown-title {
    cursor: pointer;
  }

  .dropdown-items {
    display: block;
    padding: 10px 0;
    color: rgb(0,0,0);

    font-size: .8em;
  }

  .dropdown-items:nth-child(2n) {
    background-color: rgba(128,128,128, .2);
  }
</style>

<template>
  <section class="dropdown-container nav-items">
    <section @click="showDropdownMenu" class="dropdown-title">
      <span>{{ dropdownTitle }}</span>
    </section>
    <section v-show="seen" class="dropdown-content">
      <router-link
        class="dropdown-items"
        v-for="link of dropdownLinks"
        :key="link.id"
        :to="link.path"
      >{{ link.name }}</router-link>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    dropdownTitle: {
      type: String,
      required: true,
    },
    dropdownLinks: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      seen: false,
    };
  },

  methods: {
    showDropdownMenu() {
      this.seen = !this.seen;
    },
  },
};
</script>
