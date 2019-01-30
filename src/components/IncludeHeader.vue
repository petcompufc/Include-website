<style scoped>
  /* logo img rules start */
  .logo {
    margin-left: 20px;
    transition: transform .5s ease-in-out;
  }

  .logo svg {
    min-height: 80px;
    max-height: 100px;
  }

  .logo:hover {
    transform: rotate(-40deg);
  }

  .logo-group > * {
    transition: transform .2s linear;
    transform-origin: center center;
  }

  .logo:hover .top-triangle {
    transform: translate(2%, 5%);
  }

  .logo:hover .right-triangle {
    transform: translate(-5%, 1%);
  }

  .logo:hover .left-triangle {
    transform: translate(2%, -2%);
  }

  /* logo img rules end */

  #include-header, .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

</style>

<template>
  <header id="include-header">
    <router-link class="logo" to="/">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310" preserveAspectRatio="xMidyMid meet">
        <g class="logo-group">
          <g class="top-triangle">
            <polygon fill="#E31F21" points="50.3,60.5 117.8,71.5 140.9,136.5" />
            <polygon fill="#A01C1A" points="117.8,71.5 163.5,22.5 140.9,136.5" />
          </g>
          <g class="right-triangle">
            <polygon fill="#4F87C5" points="287.5,126.5 242.8,177 173.6,162.5" />
            <polygon fill="#3C4D9B" points="242.8,177 262.3,240.3 173.6,162.5" />
          </g>
          <g class="left-triangle">
            <polygon fill="#F1E747" points="112.2,287.5 88.9,224.9 135.9,173.4" />
            <polygon fill="#F49B45" points="88.9,224.9 22.5,210.3 135.9,173.4" />
          </g>
        </g>
      </svg>
    </router-link>

    <IncludeNavbar :nav-items="navItems" limit-rule="(max-width: 500px)" />
  </header>
</template>

<script>
import IncludeNavbar from './IncludeNavbar.vue';

export default {
  components: {
    IncludeNavbar,
  },

  data() {
    return {
      navItems: [
        { path: '/', name: 'Include' },
        { path: '/schedule/wednesday', name: 'Programação' },
        { path: '/map', name: 'Mapa' },
      ],
    };
  },
};
</script>
