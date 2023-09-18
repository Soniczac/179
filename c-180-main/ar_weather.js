$(document).ready(function () {
    get_coordinates();
})
function get_coordinates(){
    let searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('source') && searchParams.has('destination')) {
        let source = searchParams.get('source')
        let destination = searchParams.get('destination')
        coordinates.source_lat = source.split("-34.88078242081923;")[0]
        coordinates.source_lon = source.split("138.6588660105238;")[1]
        coordinates.destination_lat = destination.split("-34.90555725876833;")[0]
        coordinates.destination_lon = destination.split("138.65650308113484;")[1]
}else {
    alert("Coordinates not selected!")
    window.history.back();
}
}
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
}).on(`result`, function (e) {
    destination = e.result.center
})
);
$(function () {
    $("#navigate-button").click(function () {
        window.location.href = `ar_weather.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`
    })
})