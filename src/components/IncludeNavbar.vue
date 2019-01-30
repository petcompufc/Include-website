<style scoped>
  @keyframes moveLineOne {
    to {
      transform: translate(5px,38px) rotate(-60deg);
    }
  }

  @keyframes moveLineTwo {
    to {
      transform: translate(-31px,53px) rotate(60deg);
    }
  }

  .nav-items {
    display: inline-block;
    margin: 10px;
    font-size: 1.2em;
  }

  .nav-items a { color: rgb(255,255,255) }

  .menu-icon {
    margin-right: 30px;
    cursor: pointer;
  }

  .menu-item:nth-child(1) { transform-origin: center left; }
  .menu-item:nth-child(2) { transform-origin: center right; }
  .menu-animated:nth-child(1) { animation: moveLineOne 2s forwards }
  .menu-animated:nth-child(2) { animation: moveLineTwo 2s forwards }

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
      <svg
        width="40"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        class="menu-icon"
        @click="showMenu"
      >
        <g fill="none" stroke-width="10" stroke-linecap="round">
          <line
            :class="{ 'menu-animated': isIconAnimated }"
            class="menu-item"
            stroke="#A11D1B"
            x1="10" y1="50" x2="90" y2="50"/>
          <line
            :class="{ 'menu-animated': isIconAnimated }"
            class="menu-item"
            stroke="#4F87C5"
            x1="10" y1="20" x2="90" y2="20"/>
          <line
            stroke="#F0E74A"
            x1="10" y1="80" x2="90" y2="80"/>
        </g>
      </svg>

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
      isIconAnimated: false,
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
      this.isIconAnimated = true;
      this.isModalVisible = true;
    },

    closeMenu() {
      this.isIconAnimated = false;
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
