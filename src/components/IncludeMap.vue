<style scoped>
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
          @click="flyToPoint(loc.latLong)"
        >{{ loc.name }}</li>
      </ul>
    </section>
    <section id="include-map"></section>
  </section>
</template>

<script>

import locations from '../utils/locations';
import {
  createMap,
  createIncludeIcon,
  createMarker,
  addMarkersInMap,
  addPopupInMarkers,
} from '../utils/map';

export default {
  data() {
    return {
      map: null,
      locations,
    };
  },

  methods: {
    flyToPoint(latLong) {
      if (this.map) {
        this.map.flyTo(latLong, 19);
      }
    },

    initMap() {
      this.map = createMap({
        mapId: 'include-map',
        latLong: [-3.741621, -38.574752],
        zoomMap: 16,
      });
    },

    initMarkers() {
      const markers = this.locations
        .map((elem) => {
          const { latLong, icon, description } = elem;
          return { mkr: createMarker(latLong, createIncludeIcon(icon)), description };
        });

      addPopupInMarkers(markers);
      addMarkersInMap(markers.map(elem => elem.mkr), this.map);
    },
  },

  mounted() {
    this.initMap();
    this.initMarkers();
  },
};
</script>
