var shelterapi = 'http://localhost:8080';

window.onload = function(){ 
    // VUE
    var app = new Vue({
        el: '#vue',
        data: {
            searchbox: "",
            eventlits: {},
            food: false,
            home: false,
            domestic: false,
            result: {}
        }, 
        methods: {
            search: function() {
                $.getJSON(shelterapi + '/name?' + searchbox, (data)=> {
                    this.result = data;
                });
            }
        }
    });
    
    // $.getJSON(shelterapi + '/shelter?name'+app.searchbox, (data)=> {

    // });
    /*
    var centermap = L.latLng(44.949642,-93.093124);
    var mymap = L.map('map', {
        center : centermap,
        zoom: 12
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mymap);*/
    
    navigator.geolocation.getCurrentPosition(function(location) {
        var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
      
        var mymap = L.map('map').setView(latlng, 13)
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
          attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox.streets',
          accessToken: 'pk.eyJ1IjoiYmJyb29rMTU0IiwiYSI6ImNpcXN3dnJrdDAwMGNmd250bjhvZXpnbWsifQ.Nf9Zkfchos577IanoKMoYQ'
        }).addTo(mymap);
      
        var marker = L.marker(latlng).addTo(mymap).bindPopup('YOU ARE HERE').openPopup();;

        var marker1 = L.marker([44.960232, -93.262482]).addTo(mymap).bindPopup('Our Saviours Housing Elca').openPopup();
        var marker2 = L.marker([44.951235, -93.140184]).addTo(mymap).bindPopup('Jeremiah Program Saint Paul').openPopup();
        var marker3 = L.marker([44.918415, -93.258739]).addTo(mymap).bindPopup('Hope Street Shelter').openPopup();

    });

 };   