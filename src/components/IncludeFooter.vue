<style scoped>

</style>

<template>
  <footer id="include-footer">

    <section id="contributing-container">
      <p>
        <img :src="contributing.src" alt="github logo" />
        <a :href="contributing.url" target="_blank">{{ contributing.text }}</a>
      </p>
    </section>

    <section id="address-container">
      <section class="adress-items">
        <img class="logos-container" src="../assets/imgs/logo-pet.png" alt="PET Computação logo" />
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
        <section>
          <a v-for="link in ufcLinks"
            :key="link.id"
            :href="link.url"
            target="_blank"
            class="ufc-links"
          >{{ link.name }}</a>
        </section>
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
