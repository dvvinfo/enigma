

$(document).ready(function(){
	$('.operations_btn').click(function(){
		$('.operations__table-wrapper').slideToggle(300);      
		return false;
	});
	$('.btn__click-mobi').click(function(){
		$('.operations-mobi__hidden').slideToggle(300);      
		return false;
	});
});