<style scoped>
  #include-map {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    margin: 50px 10px;
  }

  .include-places h1 {
    font-size: 1.2em;
    padding: 20px 0;
    background-color: rgb(19, 52, 107);
    color: rgb(255,255,255);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .place-list {
    text-align: left;
    max-height: 439px;
    overflow-y: scroll;
    border-bottom: 1px solid rgb(214,214,214);
  }

  .place-list li {
    padding: 10px 10px;
    border: 1px solid rgb(214,214,214);
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .place-icons {
    width: 25px;
    height: 40px;
    margin-right: 10px;
  }

  .map-container p {
    display: none;
    font-size: 1em;
    text-align: center;
    font-weight: bold;
    color: rgb(19, 52, 107);
  }

  #my-map {
    width: 60vw;
    min-height: 500px;
    margin-left: 20px;
    border-radius: 5px;
  }

  @media (max-width: 650px) {
    .include-places {
      display: none;
    }

    .map-container p {
      display: block;
    }

    #my-map {
      width: 95vw;
      margin-left: 0;
      overflow-x: hidden;
    }
  }
</style>

<template>
  <section id="include-map">
    <section class="include-places">
      <h1>Pontos principais</h1>
      <ul class="place-list">
        <li
          v-for="loc in locations"
          :key="loc.id"
          @click="flyToPoint(loc)"
        >
          <img :src="loc.icon" :alt="loc.name" class="place-icons">
          <span>{{ loc.name }}</span>
        </li>
      </ul>
    </section>
    <section class="map-container">
      <p>Clique nos pontos do mapa para saber o que significam</p>
      <section id="my-map"></section>
    </section>
  </section>
</template>

<script>

import locations from '../models/locations';
import {
  createMap,
  createIncludeIcon,
  createMarker,
  addMarkersInMap,
  addPopupInMarkers,
  flyToPos,
  isPopupOn,
  showPopup,
  finishPopup,
} from '../utils/map';

export default {
  data() {
    return {
      map: null,
      markers: null,
      locations,
    };
  },

  methods: {
    flyToPoint(location) {
      const point = this.markers.find(elem => elem.id === location.id);
      const oldPoint = this.markers.find(elem => isPopupOn(elem.mkr));

      if (oldPoint) finishPopup(oldPoint.mkr);

      flyToPos(this.map, location.latLong);
      showPopup(point.mkr);
    },

    initMap() {
      this.map = createMap({
        mapId: 'my-map',
        latLong: [-3.741621, -38.574752],
        zoomMap: 15,
      });
    },

    initMarkers() {
      const markers = this.locations
        .map((elem) => {
          const {
            latLong,
            icon,
            description, id,
          } = elem;
          return { mkr: createMarker(latLong, createIncludeIcon(icon)), description, id };
        });

      addPopupInMarkers(markers);
      addMarkersInMap(markers.map(elem => elem.mkr), this.map);
      markers[0].mkr.openPopup();
      this.markers = markers.map(elem => ({ mkr: elem.mkr, id: elem.id }));
    },
  },

  mounted() {
    this.initMap();
    this.initMarkers();
  },
};
</script>
