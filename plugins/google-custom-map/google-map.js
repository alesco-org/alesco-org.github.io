var map;

function initMap() {

    var latlng = new google.maps.LatLng(41.8837625, 12.4872503);

    var styles = [
        {
            featureType: "landscape",
            stylers: [
                { color: '#eeddee' }
            ]
        },{
            featureType: "natural",
            stylers: [
                { hue: '#ff0000' }
            ]
        },{
            featureType: "road",
            stylers: [
                { hue: '#5500aa' },
                { saturation: -70 }
            ]
        },{
            featureType: "building",
            elementType: "labels",
            stylers: [
                { hue: '#000066' }
            ]
        },{
            featureType: "poi", //points of interest
            stylers: [
                { hue: '#0044ff' }
            ]
        }
    ];

    var myOptions = {
        zoom: 16,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: false,
        styles: styles,
        scrollwheel:  false
    };

    map = new google.maps.Map(document.getElementById('map'), myOptions);

    var beachMarker = new google.maps.Marker({
        position: latlng,
        map: map,
        title: "Asilo Nido",
        animation: google.maps.Animation.BOUNCE
    });





}




