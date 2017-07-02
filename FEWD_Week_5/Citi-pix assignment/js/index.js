//on document ready
//limit form resubmission "(event.preventDefault()"


// on click store the input as var = city
//if else process to compare input against load options
//
//

//////////////////////////

//Functions:


// - pull from #submit-btn

//Get the first element from an attribute name using ```$.attr()```

//lower case restrictor
function toLowercase(city){
	return city.toLowercase();
}
	
//show image functions:
//write showAustin
function showAustin(){
	$('body').css('background-image', 'url(images/austin.jpg)');

}
//write showLa
//write showNyc
//write showSf
//write showSydney
//write resetbackround

//onSubmit: store input, recognize as a string, turn lowercase, store as var = city.

	//on document ready
$(document).ready(function(){
	//prevent form submission on submit button.
	$('#submit-btn').submit(function(event){
	event.preventDefault();
	// set value of form input to city
	var city = ('#city-type').val();
	//set city to string


});
	
	//on document ready

//event handlers?

//Conditionals:

// (ifString) if text is string run conditional; if false do nothing (findImage)
// (findImage) 
// use || or indicator
// if text is === to a-u-s-t run showAustin
// else if city is === to a-t-x run showAustin || 
// else if city is === to l-o-s-a run showLa
// else if city is === to l-a run showLa
// else if city is === to n-e-w-y run showNyc
// else if city is === to n-y run showNyc
// else if city is === to s-a-n-f run showSf
// else if city is === to s-f run showSf
// else if city is === to s-y-d run showSydney
// else if city is === to s-y run showSydney

////////////////////////////

});
//limit form resubmission "(event.preventDefault()"


//Conditionals:

// (ifString) if text is string run conditional; if false do nothing (findImage)
// (findImage) 
// use || or indicator
// if text is === to a-u-s-t run showAustin
// else if city is === to a-t-x run showAustin || 
// else if city is === to l-o-s-a run showLa
// else if city is === to l-a run showLa
// else if city is === to n-e-w-y run showNyc
// else if city is === to n-y run showNyc
// else if city is === to s-a-n-f run showSf
// else if city is === to s-f run showSf
// else if city is === to s-y-d run showSydney
// else if city is === to s-y run showSydney

////////////////////////////


