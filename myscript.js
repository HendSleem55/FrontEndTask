
//navigate to shop page
$("#shop").on("click",function(){
    window.location.href = 'Shop grid.html';
    return false ; 
})



//show the cart Window 
$("#cartShow").click(function(){
     $("#myCart").toggle();
}); 


//color the heart icon 
var hearts = document.getElementsByClassName("fa-heart");
for (var i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener('click', function() {

        this.classList.toggle("far");
        this.classList.toggle("fas");
    }) 
}


//show the drop down menue -categories-
$("#ProductCategories").on("click", function(){
    $("#nested").toggleClass("cat");
    $("#nested").toggleClass("deatails");
})


//the slider price range
$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  } );



  //Map API to display the location map
  function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
myMap()

