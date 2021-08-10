<template>
<div id="mapId" class="map-container"></div>
</template>

<script lang="ts">
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoiMTY2MTk3ODQ4NDUiLCJhIjoiY2tydnI5bmZuMDliYTJvbjBnZDdlZHRkMiJ9.ayzPii_6fVacLh5Jjgh4uw'
export default {
  components: {
  },
  data() {
    return {
    };
  },

  created() {
  }
};
</script>

<style lang="sass" scoped>

.map-container {
  width: 100%;
  height: 100%;
  background: red;
}

</style>
