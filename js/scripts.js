$(document).ready(function(){

    $('.btn-menu').on('click', function(e){
    	e.preventDefault();
    	$('.menu-wrap').toggleClass('closed');
    });

});