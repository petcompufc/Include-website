<style scoped>
  #include-header {
    background-color: rgb(0,0,0);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* logo img rules start */
  .logo {
    margin-left: 50px;
  }

  .logo svg {
    max-height: 100px;
  }

  .logo-group {
    transition: transform 1s linear;
    transform-origin: center center;
  }

  .logo-group:hover {
    transform: rotate(25deg);
  }

  /* logo img rules end */

  .triangle-one {fill:#E3E9DA}
  .triangle-two {fill:#888C88}

  /* navbar rules start */
  .nav {
     margin-right: 50px;
   }

   .nav-items {
     margin: 0 10px;
     font-size: .7em;
     color: rgb(227,233,218);
   }
  /* navbar rules end */

</style>

<template>
  <header id="include-header">
    <router-link class="logo" to="/">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310">
        <g class="logo-group">
          <polygon class="triangle-one" points="50.3,60.5 117.8,71.5 140.9,136.5" />
          <polygon class="triangle-two" points="117.8,71.5 163.5,22.5 140.9,136.5" />
          <polygon class="triangle-one" points="112.2,287.5 88.9,224.9 135.9,173.4" />
          <polygon class="triangle-two" points="88.9,224.9 22.5,210.3 135.9,173.4" />
          <polygon class="triangle-one" points="287.5,126.5 242.8,177 173.6,162.5" />
          <polygon class="triangle-two" points="242.8,177 262.3,240.3 173.6,162.5" />
        </g>
      </svg>
    </router-link>

    <nav class="nav">
      <router-link class="nav-items" to="/">Include</router-link>
      <router-link class="nav-items" to="/programming">Programação</router-link>
      <router-link class="nav-items" to="support">Apoio</router-link>
      <router-link class="nav-items" to="/certificates">Certificados</router-link>
    </nav>
  </header>
</template>

<script>
export default {

};
</script>
