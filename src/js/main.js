

$(document).ready(function(){
	$('.operations_btn').click(function(){
		$('.operations__table-wrapper').slideToggle(300);      
		return false;
	});
	$('.btn__click-mobi').click(function(){
		$('.operations-mobi__hidden').slideToggle(300);      
		return false;
	});
	$('.deposit-block__btn').click(function(){
		$('.deposit-block__content').slideToggle(300);      
		return false;
	});
	$('.burger').click(function(event){
		$('.menu-header,.burger__line').toggleClass('active'); 
		$('.burger__line-1').toggleClass('active-1');   
		
	});

	$('#notifications').click(function(event){
		$('.notifications-overlay').toggleClass('notifications-active'); 
		return false;
		  
		
	});
	
});