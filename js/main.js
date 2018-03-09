/*---------------------------
 Projects : MyWebsite
 UI Developers : Mugeshkumar Devaraj
-----------------------------*/
$(document).ready(function()
{	
	/*-------/// main_container Height ///---------*/
	var actualHeight = $(window).height();
	var headerHeight = $('header').outerHeight();
	//alert(headerHeight);
	$('.main_container').css({
			"min-height" : actualHeight-headerHeight+13,
			"padding-top": headerHeight
	});

	/*-------/// menu_trigger humberger menu ///---------*/
	$('.menu_trigger').on('click', function() {
        $(this).toggleClass('active');
		$('.main_nav').toggleClass("main_nav_open");
		$('.main_nav_overlay').toggleClass('dispB');
    });

	$('.main_nav_overlay').click(function()
	{
		$('.main_nav').removeClass("main_nav_open");
		$(this).removeClass('dispB');
		$('.menu_trigger').removeClass('active');
	});
	/*-------/// slidedown_a ///---------*/
	$('.slidedown_a').click(function() {
		$("i", this).toggleClass("fa-angle-up fa-angle-down");
		$(this).next('.second_level').slideToggle('fast');
	});
});

/*---------------------------------------------------
		 loading
----------------------------------------------------*/
var $window = $(window);
$window.on('load', function(){
	$('.loading_area').fadeOut(1000, function() {
		$(this).hide();
	});
	$(".name li").each(function(){
        $(this).css({"opacity":"1","transform":"translateX(0px)", "-ms-transform":"translateX(0px)","-webkit-transform":"translateX(0px)"});
	});
});