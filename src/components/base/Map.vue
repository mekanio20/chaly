<template>
    <div id="map"></div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
export default {
    name: "Map",
    mounted() {
        let map = L.map('map').setView([37.939980618987676, 58.4341151350645], 15)

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 14,
        }).addTo(map)

        L.icon({
            iconUrl: "/imgs/marker-icon-2x.png",
            iconAnchor: [16, 32],
        });

        L.marker([37.939980618987676, 58.4341151350645]).addTo(map)
    }
}

</script>

<style>
#map {
    min-height: auto;
}

.leaflet-control-attribution {
    display: none !important;
}
</style>