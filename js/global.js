/*-----------------------------------------------------
 Projects : My Website  URL : dmugeshkmr02.github.io
 UI Developers : Mugeshkumar Devaraj
------------------------------------------------------*/
$(document).ready(function(){
    /*-------/// actualHeight ///---------*/
    var actualHeight = $(window).height();
    var headerHeight = $('header').outerHeight();
    $('.home_section').css({
        'min-height': actualHeight,
        'padding-top': headerHeight
    });
    $('.about_section,.skills_section,.works_section,.contact_section').css({
        'min-height' : actualHeight - headerHeight,
        'padding-top': headerHeight
    });
    /*-------/// menu_trigger humberger menu ///---------*/
	$('.menu_trigger').on('click', function() {
        $(this).toggleClass('active');
		$('.main_nav').toggleClass("main_nav_open");
    });
    $('.main_nav ul li a').click(function(){
        $('.menu_trigger').removeClass('active');
        $('.main_nav').removeClass("main_nav_open");
    });
    /*-------/// shape_tab ///---------*/
    $('.shape_tab li').click(function(){
        var shape_tabId = $(this).attr('data-tab');
        $('.shape_tab li').removeClass('active');
        $('.brain_ram').removeClass('active');
        $(this).addClass('active');
        $('#'+shape_tabId).addClass('active');
    });
});

/*--------------// loading //-------------*/
$(window).on('load', function(){
	setTimeout(function(){
		$('.loading_wrapper').css('opacity','0');
	},1500);
});
/*--------------// moveTO Scroll //-------------*/
function moveTO(e) {
	$('html, body').animate({
		scrollTop: $("#" + e).offset().top
    }, 1000);
    
    var headerHeight = $('header').outerHeight();
    if(e == 'about_section')
    {
        $('#about_section').css("padding-top", headerHeight);
    }

}  
/*--------------// Header change Scroll //-------------*/
$(window).scroll(function(){
    var myScroll = $(this).scrollTop();
    if (myScroll > 0) {
        $('header').addClass('myheader');
        $('.logo img').attr('src', 'images/logo_color.png');
    } else {
        $('header').removeClass('myheader');
        $('.logo img').attr('src', 'images/logo.png');
    }
});

/*$(document).ready(function(){
	var colorLookup = {
		aqua : "0, 255, 255",
        azure : "240, 255, 255",
        beige : "245, 245, 220",
        black : "0, 0, 0",
        blue : "0, 0, 255",
        brown : "165, 42, 42",
        cyan : "0, 255, 255",
        darkblue : "0, 0, 139",
        darkcyan : "0, 139, 139",
        darkgrey : "169, 169, 169",
        darkgreen : "0, 100, 0",
        darkkhaki : "189, 183, 107",
        darkmagenta : "139, 0, 139",
        darkolivegreen : "85, 107, 47",
        darkorange : "255, 140, 0",
        darkorchid : "153, 50, 204",
        darkred : "139, 0, 0",
        darksalmon : "233, 150, 122",
        darkviolet : "148, 0, 211",
        fuchsia : "255, 0, 255",
        gold : "255, 215, 0",
        green : "0, 128, 0",
        indigo : "75, 0, 130",
        khaki : "240, 230, 140",
        lightblue : "173, 216, 230",
        lightcyan : "224, 255, 255",
        lightgreen : "144, 238, 144",
        lightgrey : "211, 211, 211",
        lightpink : "255, 182, 193",
        lightyellow : "255, 255, 224",
        lime : "0, 255, 0",
        magenta : "255, 0, 255",
        maroon : "128, 0, 0",
        navy : "0, 0, 128",
        olive : "128, 128, 0",
        orange : "255, 165, 0",
        pink : "255, 192, 203",
        purple : "128, 0, 128",
        violet : "128, 0, 128",
        red : "255, 0, 0",
        silver : "192, 192, 192",
        white : "255, 255, 255",
        yellow : "255, 255, 0" ,
		transparent: "255, 255, 255, 0"
    };    
    var colorLookup = {
		aqua: [0, 255, 255],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        black: [0, 0, 0],
        blue: [0, 0, 255],
        brown: [165, 42, 42],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgrey: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkviolet: [148, 0, 211],
        fuchsia: [255, 0, 255],
        gold: [255, 215, 0],
        green: [0, 128, 0],
        indigo: [75, 0, 130],
        khaki: [240, 230, 140],
        lightblue: [173, 216, 230],
        lightcyan: [224, 255, 255],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        navy: [0, 0, 128],
        olive: [128, 128, 0],
        orange: [255, 165, 0],
        pink: [255, 192, 203],
        purple: [128, 0, 128],
        violet: [128, 0, 128],
        red: [255, 0, 0],
        silver: [192, 192, 192],
        white: [255, 255, 255],
        yellow: [255, 255, 0],
		transparent: [255, 255, 255]
		
	};
	
	$.each(colorLookup, function(i,val){
		var bgCi = i;	
		var bgColor = '('+ val + ')';

		$('.w100 > div').each(function(index,value){
			setInterval(function(){
				$(value).animate({
					fontSize: "18px"
				},2000);
				//$(value).css("background", 'rgb'+ bgColor); 
			},3000);
		});
		//$('.w100 .w50').css("background", 'rgb'+ bgColor); 
	});
});*/

/*
$(window).load(function(){
    setImageSlider();
});  
function setImageSlider(){
    $('.image-slider').each(function(index, element) {
        var imgContainerHt=[],
            imgContainerHtVal;	
        $(this).find('.slider-img-container img').each(function(index, element) {
            imgContainerHt.push($(this).height());
        });
        imgContainerHtVal=Math.max.apply(Math,imgContainerHt);		
        $(this).find('.slider-img-container').height(imgContainerHtVal);
    });
}
$(document).ready(function(){
    var silderDescHt=[];
    $('.slider-img-desc').each(function(index, element) {
        $(this).find('p').each(function(index, element) {
            silderDescHt.push($(this).height());
        });
        silderDescHtVal=Math.max.apply(Math,silderDescHt);
        $('.slider-img-desc').height(silderDescHtVal);
    });	

    $('.slider-nav-desc span').click(function(e){
		imgContainer = $(this).parent().siblings('.slider-img-container');
		imgDesc = $(this).parent().siblings('.slider-img-desc');
		indexVal = $(this).index();

		if($(this).hasClass('active')==false) {
			$(imgContainer).find('img').removeClass('active');
			$(imgContainer).find('img').eq(indexVal).addClass('active');
			
			$(imgDesc).find('p').removeClass('active').hide();
			$(imgDesc).find('p').eq(indexVal).show().addClass('active');
			
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
			
			if((indexVal+1)==$(imgContainer).find('img').length){
				$(imgContainer).find('.zright-nav').hide();
				$(imgContainer).find('.zleft-nav').show();
			}
			else if(indexVal==0){
				$(imgContainer).find('.zleft-nav').hide();
				$(imgContainer).find('.zright-nav').show();
			}
			else{
				$(imgContainer).find('.zleft-nav').show();
				$(imgContainer).find('.zright-nav').show();	
			}
			
		};
	});


	$('.zright-nav').click(function(){
		imgSlider = $(this).parentsUntil('.image-slider').parent();
		sliderNav = imgSlider.find('.slider-nav-desc');
		imgDesc = imgSlider.find('.slider-img-desc');
		imgContainer = imgSlider.find('.slider-img-container');
		
		indexVal = $(imgContainer).find('img.active').index();

		$(imgContainer).find('img').removeClass('active');
		$(imgContainer).find('img').eq(indexVal+1).addClass('active');
		
		$(imgDesc).find('p').removeClass('active').hide();
		$(imgDesc).find('p').eq(indexVal+1).show().addClass('active');
		
		$(sliderNav).find('span').removeClass("active");
		if($('.image-slider .slider-nav-desc span').hasClass('slider-icons')){
			$('.image-slider .slider-nav-desc .slider-icons').eq(indexVal+1).addClass('active');
		}else{
			$(sliderNav).find('span').eq(indexVal+1).addClass('active');
		}
		
		if((indexVal+2) == $(imgContainer).find('img').length)
		$(this).hide();
		$(this).siblings('.zleft-nav').show();
	});

	$('.zleft-nav').click(function(){
		imgSlider = $(this).parentsUntil('.image-slider').parent();
		sliderNav = imgSlider.find('.slider-nav-desc');
		imgDesc = imgSlider.find('.slider-img-desc');
		imgContainer = imgSlider.find('.slider-img-container');
		
		indexVal = $(imgContainer).find('img.active').index();
		
		$(imgContainer).find('img').removeClass('active');
		$(imgContainer).find('img').eq(indexVal-1).addClass('active');
		
		$(imgDesc).find('p').removeClass('active').hide();
		$(imgDesc).find('p').eq(indexVal-1).show().addClass('active');
		
		$(sliderNav).find('span').removeClass("active");
		if($('.image-slider .slider-nav-desc span').hasClass('slider-icons')){
			$('.image-slider .slider-nav-desc .slider-icons').eq(indexVal-1).addClass('active');
		}else{
			$(sliderNav).find('span').eq(indexVal-1).addClass('active');
		}
		
		if((indexVal-1)==0)
		$(this).hide();
		$(this).siblings('.zright-nav').show();
	});
});
*/

 

