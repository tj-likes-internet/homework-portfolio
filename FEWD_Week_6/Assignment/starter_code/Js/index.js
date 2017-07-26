//change Backround Functions functions
var whatCity = ['NYC', 'SF', 'LA', 'ATX', 'SYD']
//image selection array
var imageOptions = [];
var mainDropDown;

// //Needs to be refactored
// eliminated with a pushed array?

// function showAustin(){
// 	$('body').css('background-image', 'url(images/austin.jpg)');
// }
// function showLa(){
// 	$('body').css('background-image', 'url(images/la.jpg)');
// }
// function showNyc(){
// 	$('body').css('background-image', 'url(images/nyc.jpg)');
// }
// function showSf(){
// 	$('body').css('background-image', 'url(images/sf.jpg)');
// }
// function showSydney(){
// 	$('body').css('background-image', 'url(images/sydney.jpg)');
// }

//Get input
function changeCity(){
mainDropDown = document.getElementById('city-type').selectedIndex;
$('body').css('background-image', 'url(images/'+imageOptions[mainDropDown]+')');
console.log('city-type');
}

//add this array [nyc,sf,syd,atx,la].foreach(function(city){
	//benifit to for vs For Reach?
	
$(document).ready(function(){
	for(i=0; i < whatCity.length; i++){
		$('city-type').append('option'+whatCity[i]+"</option>")c
	}

imageOptions.push(src = "citipix_skyline.jpg", "nyc.jpg", src = "sf.jpg", src = "la.jpg", src = "austin.jpg", src = "sydney.jpg");

document.getElementById('city-type').onchange = changeCity;

});