<template>
<div id="mapId" class="map-container"></div>
</template>

<script>
// import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoiMTY2MTk3ODQ4NDUiLCJhIjoiY2tydnI5bmZuMDliYTJvbjBnZDdlZHRkMiJ9.ayzPii_6fVacLh5Jjgh4uw'
export default {
  components: {
  },
  data() {
    return {
      map: null,
      xzqh: '',
      initZoom: 5,
      initCenter: [111.7768838733848, 37.19936862948937],
      filterTypeCity: ['==', ['get', 'type'], 'city'],
      filterTypeWg: ['==', ['get', 'type'], 'wg'],
    };
  },
  created() {
  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap () {
      const map = new mapboxgl.Map({
        container: 'mapId',
        center: this.initCenter,
        zoom: this.initZoom,
        maxZoom: 24,
        style: {
          version: 8,
          layers: [
            // 城市
            {
              'id': 'xzqh_source_city',
              'type': 'fill',
              'source': 'xzqh_source',
              'source-layer': 'data51',
              'layout': {
                'visibility': 'visible',
                'fill-sort-key': 3
              },
              'paint': {
                'fill-color': [
                  'match',
                  ['get', 'xzqh'],
                  '140900', '#ffea00',
                  '140700', '#87cefa',
                  '140800', '#b3fc94',
                  '141000', '#a5dabb',
                  '140100', '#94d3e0',
                  '141100', '#ffcf00',
                  'rgba(0,200,0,0.6)'
                ],
                'fill-outline-color': '#000'
              },
              'filter': this.filterTypeCity
            },
            // 城市名称
            {
              'id': 'xzqh_source_city_name',
              'type': 'symbol',
              'source': 'xzqh_source',
              'source-layer': 'data51',
              'layout': {
                'visibility': 'visible',
                'text-size': 5,
                'text-field': '{name}'
              },
              'paint': {
                'text-color': '#000000'
              },
              'filter': this.filterTypeCity
            },
            // 河流
            {
              'id': 'xzqh_source_hl',
              'type': 'fill',
              'source': 'xzqh_source',
              'source-layer': 'data51',
              'layout': {
                'visibility': 'visible',
                'fill-sort-key': 10
              },
              'paint': {
                'fill-color': '#0084ff'
              },
              'filter': ['==', ['get', 'type'], 'hl']
            },
            // 网格
            {
              'id': 'xzqh_source_wg',
              'type': 'line',
              'source': 'xzqh_source',
              'source-layer': 'data51',
              'layout': {
                'visibility': 'visible'
              },
              'paint': {
                'line-color': '#9E9E9E'
              },
              'filter': this.filterTypeWg
            },
            // 网格名称
            {
              'id': 'xzqh_source_wg_name',
              'type': 'symbol',
              'source': 'xzqh_source',
              'source-layer': 'data51',
              'layout': {
                'visibility': 'visible',
                'text-size': 5,
                'text-font': ['Microsoft YaHei Regular'],
                'text-field': '{name}'
              },
              'paint': {
                'text-color': '#000'
              },
              'filter': ['==', ['get', 'type'], 'wg']
            }
          ],
          sources: {
            'xzqh_source': {
              'type': 'vector',
              'tiles': [
                `http://192.168.0.181:60100/environment/map/vector-lcc/map/{z}/{x}/{y}/${this.xzqh}.mvt`
              ]
            }
          },
          glyphs: 'http://seemeewes.cn/mapbox-gl/fonts/{fontstack}/{range}.pbf'
        }
      })
      map.on('load', () => {
      })
      map.on('click', 'xzqh_source_city', (e) => {
        console.log(e.lngLat, e.features[0].properties)
      })
    }
  },
};
</script>

<style lang="scss" scoped>

.map-container {
  width: 100%;
  height: 100%;
}

</style>
