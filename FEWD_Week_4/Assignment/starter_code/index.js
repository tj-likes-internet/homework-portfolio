$(document).ready(function(){


	function showReadmore(){
		$('#show-this-on-click').slideToggle();
		$('.readmore').hide();
		$('.readless').show();
	}
	function hideReadmore(){
		$('#show-this-on-click').slideToggle();
		$('.readless').hide();
		$('.readmore').show();
	}

	function showLearnmore(){
		$('#learnmoretext').slideToggle();
		$('.learnmore').hide();
		$('.learnless').show();
	}
	function hideLearnmore(){
		$('#learnmoretext').slideToggle();
		$('.learnless').hide();
		$('.learnmore').show();
	}

	$('.readmore').click(showReadmore);
	$('.readless').click(hideReadmore);
	$('.learnmore').click(showLearnmore);
	$('.learnless').click(hideLearnmore);

})
