function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 20,
        center: { lat: 144.9735273, lng: -37.8079335 },
    });
    const ctaLayer = new google.maps.KmlLayer({
        url: "https://stamimy.github.io/test_zone_map.kml",
        map: map,
    });
}

window.initMap = initMap;