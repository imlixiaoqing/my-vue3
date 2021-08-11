<template>
  <div id="map"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
mapboxgl.accessToken =
  "pk.eyJ1IjoiMTY2MTk3ODQ4NDUiLCJhIjoiY2tydnI5bmZuMDliYTJvbjBnZDdlZHRkMiJ9.ayzPii_6fVacLh5Jjgh4uw";
export default {
  data() {
    return {};
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const map = new mapboxgl.Map({
        container: "map", // container ID
        style: 'mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y',
        zoom: 13.1,
        center: [-114.34411, 32.6141],
        pitch: 85,
        bearing: 80,
      });

      map.on('load', () => {
        map.addSource('mapbox-dem', {
          'type': 'raster-dem',
          'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
          'tileSize': 512,
          'maxzoom': 14
        });
        // add the DEM source as a terrain layer with exaggerated height
        map.setTerrain({
          'source': 'mapbox-dem',
          'exaggeration': 1.5
        });

        // add a sky layer that will show when the map is highly pitched
        map.addLayer({
          'id': 'sky',
          'type': 'sky',
          'paint': {
            'sky-type': 'atmosphere',
            'sky-atmosphere-sun': [0.0, 0.0],
            'sky-atmosphere-sun-intensity': 15
          }
        });
      })

      const coordinatesGeocoder = function(query) {
        // Match anything which looks like
        // decimal degrees coordinate pair.
        const matches = query.match(
          /^[ ]*(?:Lat: )?(-?\d+\.?\d*)[, ]+(?:Lng: )?(-?\d+\.?\d*)[ ]*$/i
        );
        console.log(matches)
        if (!matches) {
          return null;
        }

        function coordinateFeature(lng, lat) {
          return {
            center: [lng, lat],
            geometry: {
              type: "Point",
              coordinates: [lng, lat]
            },
            place_name: "Lat: " + lat + " Lng: " + lng,
            place_type: ["coordinate"],
            properties: {},
            type: "Feature"
          };
        }

        const coord1 = Number(matches[1]);
        const coord2 = Number(matches[2]);
        const geocodes = [];

        if (coord1 < -90 || coord1 > 90) {
          // must be lng, lat
          geocodes.push(coordinateFeature(coord1, coord2));
        }

        if (coord2 < -90 || coord2 > 90) {
          // must be lat, lng
          geocodes.push(coordinateFeature(coord2, coord1));
        }

        if (geocodes.length === 0) {
          // else could be either lng, lat or lat, lng
          geocodes.push(coordinateFeature(coord1, coord2));
          geocodes.push(coordinateFeature(coord2, coord1));
        }

        return geocodes;
      };

      map.addControl(
        new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          localGeocoder: coordinatesGeocoder,
          zoom: 4,
          placeholder: "Try: -40, 170",
          mapboxgl: mapboxgl,
          reverseGeocode: true
        })
      );
    }
  }
};
</script>

<style lang='scss' scoped>
</style>
