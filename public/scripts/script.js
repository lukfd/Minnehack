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
    var centermap = L.latLng(44.949642,-93.093124);
    var mymap = L.map('map', {
        center : centermap,
        zoom: 12
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mymap);
    
    var marker1 = L.marker([44.956758, -93.015139]).addTo(mymap).bindPopup('Information of the shelter').openPopup();

};