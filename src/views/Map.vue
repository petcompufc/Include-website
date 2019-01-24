<style>
  #include-map {
    width: 500px;
    height: 300px;
  }
</style>

<template>
  <section>
    <div id="include-map"></div>
  </section>
</template>

<script>

import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';

const mapToken = 'https://api.mapbox.com/styles/v1/phqueiroz/cjraxr4jr2rok2ss1is4n357l/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGhxdWVpcm96IiwiYSI6ImNpeTUybWw5ZjAwNWQzMnAyczh5bXh3Z3oifQ.3LEj4_da9KlKXCESvTvXKA';
let map;

export default {
  mounted() {
    map = L.map('include-map').setView([-3.746020, -38.574175], 13);
    
    L.tileLayer(mapToken, {
    maxZoom: 18,
    id: 'mapbox.streets',
    }).addTo(map);
  },
};
</script>
