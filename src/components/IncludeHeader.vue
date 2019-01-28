<style scoped>
  /* logo img rules start */
  .logo {
    margin-left: 50px;
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

  .triangle-one {fill:#E3E9DA}
  .triangle-two {fill:#888C88}

  /* logo img rules end */

  #include-header {
    background-color: rgb(0,0,0);
    height: 120px;
    box-shadow: 5px 5px 5px rgb(214,214,214);
  }

  #include-header, .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-items {
    margin: 0 10px;
    color: rgb(214,214,214);
    text-decoration: none;
  }

</style>

<template>
  <header id="include-header">
    <router-link class="logo" to="/">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310" preserveAspectRatio="xMidyMid meet">
        <g class="logo-group">
          <g class="top-triangle">
            <polygon class="triangle-one" points="50.3,60.5 117.8,71.5 140.9,136.5" />
            <polygon class="triangle-two" points="117.8,71.5 163.5,22.5 140.9,136.5" />
          </g>
          <g class="right-triangle">
            <polygon class="triangle-one" points="287.5,126.5 242.8,177 173.6,162.5" />
            <polygon class="triangle-two" points="242.8,177 262.3,240.3 173.6,162.5" />
          </g>
          <g class="left-triangle">
            <polygon class="triangle-one" points="112.2,287.5 88.9,224.9 135.9,173.4" />
            <polygon class="triangle-two" points="88.9,224.9 22.5,210.3 135.9,173.4" />
          </g>
        </g>
      </svg>
    </router-link>

    <nav class="nav">
      <router-link class="nav-items" to="/">Include</router-link>
      <router-link class="nav-items" to="/schedule/wednesday">Programação</router-link>
      <router-link class="nav-items" to="/map">Mapa</router-link>
    </nav>
  </header>
</template>

<script>
