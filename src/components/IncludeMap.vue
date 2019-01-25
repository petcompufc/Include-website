<style>
  #include-map {
    width: 800px;
    height: 500px;
  }
</style>

<template>
  <section>
    <section id="include-places">
      <ul>
        <li>Principais Pontos da UFC</li>
        <li>Parada de Ônibus</li>
        <li
          v-for="loc in locations"
          :key="loc.id"
          @click="moveToPoint(loc.latLong)"
        >{{ loc.name }}</li>
      </ul>
    </section>
    <section id="include-map"></section>
  </section>
</template>

<script>
import createMap from '../utils/map';

let myMap;

export default {
  data() {
    return {
      locations: [
        { id: 0, name: 'Entrada Humberto Monte', latLong: [-3.738757, -38.569726] },
        { id: 1, name: 'Entrada Mister Hull', latLong: [-3.737227, -38.571584] },
        { id: 2, name: 'Biblioteca Central', latLong: [-3.742523, -38.574298] },
        { id: 3, name: 'Biblioteca da Matemática', latLong: [-3.746536, -38.573873] },
        { id: 4, name: 'Biblioteca da Física', latLong: [-3.747051, -38.575384] },
        { id: 5, name: 'Restaurante Universitário Novo', latLong: [-3.747110, -38.577976] },
        { id: 6, name: 'Restaurante Universitário Velho', latLong: [-3.744898, -38.572963] },
        { id: 7, name: 'Cantina da Química', latLong: [-3.746480, -38.576817] },
        { id: 8, name: 'Cantina da Geologia', latLong: [-3.746632, -38.573017] },
        { id: 9, name: 'Departamento de Computação', latLong: [-3.745978, -38.574143] },
        { id: 10, name: 'Bloco 707', latLong: [-3.743457, -38.575821] },
        { id: 11, name: 'Bloco 725', latLong: [-3.744924, -38.578122] },
        { id: 12, name: 'Bioxerox', latLong: [-3.745160, -38.573727] },
      ],
    };
  },

  methods: {
    moveToPoint(latLong) {
      if (myMap) {
        myMap.flyTo(latLong, 19);
      }
    },
  },

  mounted() {
    console.log(this.locations);
    myMap = createMap({
      id: 'include-map',
      lat: -3.742015,
      long: -38.574721,
      zoom: 16,
    });
  },
};
</script>
