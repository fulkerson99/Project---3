function initMap() {
	var loc = {lat: 41.835612, lng: -87.624339};
	var map = new google.maps.Map(document.getElementById('map'), {center: loc, zoom: 8});

	var infowindow = new google.maps.InfoWindow({content: 'McCormick Student Village'});

	var marker = new google.maps.Marker({position: loc,map: map,icon: 'media/location.jpg'});
	
	marker.addListener('click', function() {
		infowindow.open(map, marker);
	});
}