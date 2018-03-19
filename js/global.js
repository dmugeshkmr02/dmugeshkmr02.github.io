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


        /*-------/// skills_tabs active ///---------*/
        if($('#'+shape_tabId).hasClass('active'))
        {   
            var current_id = $('#'+shape_tabId).attr('id');
            if(current_id == 'technologies')
            {
                $('.fram,.plug,.appl').removeClass('active');
                $('.tech').addClass('active');
            }
            if(current_id == 'frameworks')
            {
                $('.tech,.plug,.appl').removeClass('active');
                $('.fram').addClass('active');
            }
            if(current_id == 'plugins')
            {
                $('.tech,.fram,.appl').removeClass('active');
                $('.plug').addClass('active');
            }
            if(current_id == 'applications')
            {
                $('.tech,.fram,.plug').removeClass('active');
                $('.appl').addClass('active');
            }
        }
    });
});

function prev(){
    $('#works_tab1').show();
    var worktab_width = $('.works_tab').outerWidth();
    $('.works_xwidth').css("margin-left", (worktab_width+100)+'px');
}

function next(){
    $('#works_tab1').hide();
    var worktab_width = $('.works_tab').outerWidth();
    $('.works_xwidth').css("margin-left", worktab_width+'px');
}

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
