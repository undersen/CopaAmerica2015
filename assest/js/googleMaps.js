
            // When the window has finished loading create our google map below
          
        
            function init() {

            	var locations = [
      ['<div><h2>Estadio Nacional</h2><table class="table"><td><img class="thumb" src="assest/media/CHI.png"/><h4>2</h4></td> <td><img class="thumb" src="assest/media/ECU.png"/><h4>0</h4></td>fwefrgerg<tr><td><img class="thumb" src="assest/media/CHI.png"/><h4>3</h4></td><td><img class="thumb" src="assest/media/MEX.png"/><h4>3</h4></td><tr><td><img class="thumb" src="assest/media/CHI.png"/><h4>6</h4></td><td><img class="thumb" src="assest/media/BOL.png"/><h4>0</h4></td><tr><td><img class="thumb" src="assest/media/CHI.png"/><h4>1</h4></td><td><img class="thumb" src="assest/media/URU.png"/><h4>0</h4></td><tr><td><img class="thumb" src="assest/media/CHI.png"/><h4>2</h4></td><td><img class="thumb" src="assest/media/PER.png"/><h4>1</h4></td><tr><td><img class="thumb" src="assest/media/CHI.png"/><h3>0</h3><p><i class="glyphicon glyphicon-ok"><i class="glyphicon glyphicon-ok"><i class="glyphicon glyphicon-ok"><i class="glyphicon glyphicon-ok"></td><td><img class="thumb" src="assest/media/ARG.png"/><h3>0</h3><p><i class="glyphicon glyphicon-ok"><i class="glyphicon glyphicon-remove"><i class="glyphicon glyphicon-remove"></td>', -33.4661619, -70.6106321],
      ['<div> <h2>La portada</h2><img class="thumb" src="assest/media/CHI.png"/> <img class="thumb" src="assest/media/ARG.png"/>', -29.9113599, -71.2520006],
      ['Cronulla Beach', -34.028249, -151.157507],
      ['Manly Beach', -33.80010128657071, -151.28747820854187],
      ['Maroubra Beach', -33.950198, -151.259302]
    ];


    
               var map = new google.maps.Map(document.getElementById('map'), { 
                zoom: 7,
      			center: new google.maps.LatLng(-33.4661619, -70.6106321),
                    styles: [{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]}]
                });

var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
                 google.maps.event.addDomListener(window, 'load', init);
                };


              
            
      