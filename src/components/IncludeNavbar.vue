<style scoped>
  .nav-items {
    display: inline-block;
    margin: 10px;
    font-size: 1.2em;
  }

  .nav-items a { color: rgb(255,255,255) }

</style>

<template>
  <nav id="nav-container">
    <ul v-show="!isToBeResponsive">
      <li
        v-for="(item, index) in navItems"
        :key="index"
        class="nav-items"
      >
        <router-link :to="item.path">{{ item.name }}</router-link>
      </li>
    </ul>

    <section v-show="isToBeResponsive">
      <button @click="showMenu">Click</button>
      <IncludeModal v-show="isModalVisible" @close="closeMenu">
        <h1 slot="header">Menu</h1>
        <ul slot="body">
          <li
            v-for="(item, index) in navItems"
            :key="index"
            @click="closeMenu"
          >
            <router-link :to="item.path">{{ item.name }}</router-link>
          </li>
        </ul>
      </IncludeModal>
    </section>
  </nav>
</template>

<script>
import IncludeModal from './IncludeModal.vue';

export default {
  components: {
    IncludeModal,
  },

  props: {
    navItems: {
      type: Array,
      required: true,
    },

    isResponsive: {
      type: Boolean,
      default: true,
    },

    limitRule: {
      type: String,
      default: '(max-width: 350px)',
    },
  },

  data() {
    return {
      isToBeResponsive: undefined,
      isModalVisible: false,
    };
  },

  computed: {
    mediaQueryList() {
      return window.matchMedia(this.limitRule);
    },

    listClass() {
      return {
        'nav-list': !this.isToBeResponsive,
        'nav-list-responsive': this.isToBeResponsive,
        'show-menu': this.isModalVisible,
      };
    },
  },

  methods: {
    showMenu() {
      this.isModalVisible = true;
    },

    closeMenu() {
      this.isModalVisible = false;
    },
  },

  created() {
    if (this.isResponsive) {
      this.isToBeResponsive = this.mediaQueryList.matches;
      this.mediaQueryList.addListener((event) => {
        this.isToBeResponsive = event.matches;
      });
    } else {
      this.isToBeResponsive = false;
    }
  },
};
</script>
