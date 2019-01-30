<style scoped>
  /* general rules */

  footer a { text-decoration: underline; color: rgb(255,255,255) }

  footer h1 {
    text-align: justify;
    font-size: 1em;
    margin-bottom: 20px;
  }

  footer li, footer address { font-size: .8em; margin-bottom: 8px }
  @media (max-width: 699px) { footer li, footer h1 { text-align: center } }

  #contributing-container, #address-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* contributing rules */
  #contributing-container {
    background-color: rgb(177,69,68);
    color: rgb(255,255,255);
    padding: 10px;
  }

  #contributing-container a {
    text-decoration: none;
    color: inherit;
    margin: 5px 0 0 10px;
  }

  /* address rules */
  #address-container {
    flex-wrap: wrap;
    padding: 50px 0;
  }

  .address-items {
    min-height: 160px;
    margin: 15px 80px;
  }

  .logos-container {
    width: 200px;
    height: 61px;
  }

  .logos-container:first-child {
    margin-bottom: 20px;
  }

  /* copyright rules */
  #copyright-container p {
    text-align: center;
    background-color: rgb(13,37,76);
    color: rgb(255,255,255);
    padding: 10px;
  }
</style>

<template>
  <footer>
    <section id="contributing-container">
      <img :src="contributing.src" alt="github logo" />
      <a :href="contributing.url" target="_blank">{{ contributing.text }}</a>
    </section>

    <section id="address-container">
      <section class="address-items">
        <img class="logos-container" src="../assets/imgs/logo-pet.png" alt="PET Computação logo" /><br>
        <img class="logos-container" src="../assets/imgs/logo-ufc.png" alt="UFC logo">
      </section>

      <section class="address-items">
        <h1>{{ address.title }}</h1>
        <address v-html="addressInfo"></address>
        <section class="social-media-container">
          <a :href="website.url" target="_blank">{{ website.name }}</a><br/>
          <a v-for="sm in socialMedia"
            :key="sm.id"
            :href="sm.url"
            target="_blank"
          >
            <img :src="sm.src" :alt="sm.name" />
          </a>
        </section>
      </section>

      <section class="address-items">
        <h1>Links</h1>
        <ul>
          <li v-for="link in ufcLinks" :key="link.id">
            <a :href="link.url" target="_blank">{{ link.name }}</a>
          </li>
        </ul>
      </section>
    </section>

    <section id="copyright-container">
      <p><small>{{ copyright }}</small></p>
    </section>

  </footer>
</template>

<script>
import contactInfos from '../models/contacts';

export default {
  data() {
    return {
      address: contactInfos.address,
      links: contactInfos.links,
      copyright: contactInfos.copyright,
    };
  },

  computed: {
    contributing() {
      const gh = this.links
        .find(elem => elem.id === 'ghsite');

      return Object.assign(gh, { text: contactInfos.contributing });
    },

    addressInfo() {
      return this.address
        .text
        .replace(/\n/g, '<br/>');
    },

    socialMedia() {
      return this.links
        .filter(elem => elem.id !== 'ghsite' && elem.src !== '');
    },

    website() {
      return this.links
        .find(elem => elem.id === 'petsite');
    },

    ufcLinks() {
      return this.links
        .filter(elem => elem.src === '' && elem.id !== 'petsite');
    },
  },
};
</script>
