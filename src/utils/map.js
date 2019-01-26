import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';

import shadow from '../assets/imgs/points/shadow.png';

// init map

export function urlStyleMap(token) {
  const [user, mapId] = ['phqueiroz', 'cjraxr4jr2rok2ss1is4n357l'];
  return `https://api.mapbox.com/styles/v1/${user}/${mapId}/tiles/256/{z}/{x}/{y}?access_token=${token}`;
}

export function createMap({
  mapId,
  latLong,
  zoomMap = 13,
  minZoom = 4,
  maxZoom = 20,
}) {
  if (!mapId) return new Error('mapId argument is undefined');

  const myMap = L.map(mapId).setView(latLong, zoomMap);

  L.tileLayer(urlStyleMap(LEAFLET_TOKEN), {
    minZoom,
    maxZoom,
    id: 'mapbox.streets',
    accessToken: LEAFLET_TOKEN,
  }).addTo(myMap);

  return myMap;
}

// marker icon init and functions

export function DefaultIcon({
  shadowUrl,
  iconSize,
  shadowSize,
  iconAnchor,
  shadowAnchor,
  popupAnchor,
}) {
  return L.Icon.extend({
    options: {
      shadowUrl,
      iconSize,
      shadowSize,
      iconAnchor,
      shadowAnchor,
      popupAnchor,
    },
  });
}

export function createIncludeIcon(iconUrl) {
  const IncludeDefaultIcon = DefaultIcon({
    shadowUrl: shadow,
    iconSize: [40, 60],
    shadowSize: [60, 64],
    iconAnchor: [20, 59],
    shadowAnchor: [13, 62],
    popupAnchor: [-3, -76],
  });

  return new IncludeDefaultIcon({ iconUrl });
}

// think about this after
// function createBusIcon(iconUrl) {
// }

export function createMarker(latLong, icon) {
  return L.marker(latLong, { icon });
}

// export function createMarkers(arr) {
//   return arr.map(elem => L.marker(elem.latLong, { icon: elem.icon }));
// }

export function addMarkerInMap(marker, map) {
  if (marker.addTo(map)) {
    return true;
  }

  return false;
}

export function addMarkersInMap(markers, map) {
  if (!Array.isArray(markers)) return false;

  markers.forEach(elem => elem.addTo(map));
  return true;
}

export function addPopupInMarkers(markers) {
  if (!Array.isArray(markers)) return false;

  markers.forEach(elem => elem.mkr.bindPopup(elem.description));
  return true;
}
