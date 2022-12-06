class Ejercicio11 {
    constructor() {

    }

    
    initMap() {
        var gijon = { lat: 43.539807536406435, lng: -5.663337008921455 };
        var mapa= new google.maps.Map(document.getElementsByTagName('main')[0], { zoom: 8, center: gijon });
        var marcador = new google.maps.Marker({ position: gijon, map: mapa});

    }
}
var mapaDinamicoGoogle = new Ejercicio11();