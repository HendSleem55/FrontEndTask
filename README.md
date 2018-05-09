
# Create Studio 
is an online products shope website, that enable users to 
* Display List of products.
* Adding product to the cart.
* Favorite products.
* Filter them by diffrent ways (ex: color, price, catigories ,...etc).

Main page is ### index.html 

This version includes
*Home page
*Shop page
and you can navigate betwen them throw the navigation menu


## CSS selectors : 

the website includes many diffrent types of selectors:
* selecting by class, ex: .Shop{..}
* selecting by id, ex : #nested {..}
* selecting by Tag name, ex : nav {..}
* nested selecting (parent child ), ex : ul li p {}




## javascript and jQuery functions : 



	$("#shop").on("click",function(){
	    window.location.href = 'Shop grid.html';
	    return false ; 
	})
jQuery event handler, that takes two inputs:-
	- the event itself (click)
	- anonymous function that will be execute onclick.
Output:-
         - navigate to the shop page.



---


	$("#ProductCategories").on("click", function(){
	    $("#nested").toggleClass("cat");
	})

jQuery event handler, that takes two inputs:-
	- the event itself (click)
	- anonymous function that will be execute onclick.

Output:- 
	- show and hide the dropdown list.



----

	$("#cartShow").click(function(){
	     $("#myCart").toggle();
	}); 


jQuery event handler, that takes two inputs:-
	- the event itself (click)
	- anonymous function that will be execute onclick.

Output:- 
	- show and hide the cart menu.



---

	var hearts = document.getElementsByClassName("fa-heart");
	for (var i = 0; i < hearts.length; i++) {
	    hearts[i].addEventListener('click', function() {

		this.classList.toggle("far");
		this.classList.toggle("fas");
	    } , false) 
	}


Javascript event handler, that takes three inputs:-
	- the event itself (click)
	- anonymous function that will be execute onclick.
	- false the default value for event bubbling. 

Output:
	- fill the stroke heart icon by converting it into a colored solid heart and return it back to an enpty solid heart if it has 		clicked on again .

---


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


jQuery function that will control the price range values and display the minmuim and maxmuim values .


---

	function myMap() {
	    var mapOptions = {
		center: new google.maps.LatLng(51.5, -0.12),
		zoom: 10,
		mapTypeId: google.maps.MapTypeId.HYBRID
	    }
	    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	}


a HTML MAP API that will display the map of a plcae with a LatLng(51.5, -0.12)

