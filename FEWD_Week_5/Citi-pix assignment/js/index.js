//on document ready
//limit form resubmission "(event.preventDefault()"


// on click store the input as var = city
//if else process to compare input against load options
//
//

//////////////////////////

//variables
var city = document.getElementById("city-type").value;
//Not working?

//Functions:

//Get the first element from an attribute name using ```$.attr()```

//lower case restrictor//////////////
function toLowercase(city){
	return city.toLowercase();
}
// can I write this inline somewhere?

//show image functions://////////////

//write showAustin
function showAustin(){
	$('body').css('background-image', 'url(images/austin.jpg)');
}
//write showLa
function showLa(){
	$('body').css('background-image', 'url(images/la.jpg)');
}
//write showNyc
function showNyc(){
	$('body').css('background-image', 'url(images/nyc.jpg)');
}
//write showSf
function showSf(){
	$('body').css('background-image', 'url(images/sf.jpg)');
}
//write showSydney
function showSydney(){
	$('body').css('background-image', 'url(images/sydney.jpg)');
}
//write resetbackround


//onSubmit: store input, recognize as a string, turn lowercase, store as var = city.

	//on document ready
	$(document).ready(function(){
	//prevent form submission on submit button.
	$('form').submit(function(event){
		event.preventDefault();
	// set value of form input to city
	var city = $('#city-type').val();
	city = city.toLowerCase();
	console.log(city);

	if (city === "los angeles" || city === "la" ) {
		showLa();
	} else if (city === "austin" || city === "atx" ) {
		showAustin();
	} else if (city === "sydney" || city === "syd" ) {
		showSydney();
	} else if (city === "new york" || city === "ny" ) {
		showLa();
	} else if (city === "san francisco" || city === "sf" ) {
		showLa();
	} 

	$('#city-type').val('');
})

});



