$(document).ready(function(){


    var winPage = $(document); 
    var menuTop = $('.menu-wrap');
    var blueBtn = $('.blue-btn');
    var orangeBtn = $('.orange-btn');
    var redBtn = $('.red-btn');
    var greenBtn = $('.green-btn');
    var blueCl = '#1BBDDB';
    var redCl  = '#EF0F0F';
    var orangeCl = '#F5A623';
    var greenCl = '#7ED321';


// MENU SLIDING WINDOW


    winPage.click(function(event){      
      if ( 
        menuTop.has(event.target).length == 0 
        &&
        !menuTop.is(event.target) 
      ){
        menuTop.addClass('moveOut'),
        $('.menuArrow').removeClass('rotateLeft'),
        menuTop.css('opacity', '1')
      } else {
        menuTop.toggleClass('moveIn moveOut'),
        $('.menuArrow').toggleClass('rotateLeft'),
        menuTop.css('opacity', '0.93')
      }
    });

// MENU SLIDING WINDOW    

    blueBtn.click(function(){
        $(this).addClass('activeBlue'),
        $(redBtn).removeClass('activeRed'),
        $(greenBtn).removeClass('activeGreen'),
        $(orangeBtn).removeClass('activeOrange'),
        $('span.redCol, .nav li a').removeClass('startCol orangeCol greenCol').addClass('blueCol'),
        $('g#color').css('fill', blueCl),
        $('span.arrowCta').css('color', blueCl),
        $('.menu-wrap .items1').removeClass('redBackg greenBackg orangeBackg').addClass('blueBackg'),
        $('.nav li').removeClass('redBor greenBor orangeBor').addClass('blueBor')

    });

    orangeBtn.click(function(){
        $(this).addClass('activeOrange'),
        $(redBtn).removeClass('activeRed'),
        $(greenBtn).removeClass('activeGreen'),
        $(blueBtn).removeClass('activeBlue'),
        $('span.redCol, .nav li a').removeClass('startCol blueCol greenCol').addClass('orangeCol'),
        $('g#color').css('fill', orangeCl),
        $('span.arrowCta').css('color', orangeCl),
        $('.menu-wrap .items1').removeClass('redBackg greenBackg blueBackg').addClass('orangeBackg'),
        $('.nav li').removeClass('redBor greenBor blueBor').addClass('orangeBor')
    });

    redBtn.click(function(){
        $(this).addClass('activeRed'),
        $(blueBtn).removeClass('activeBlue'),
        $(greenBtn).removeClass('activeGreen'),
        $(orangeBtn).removeClass('activeOrange'),
        $('span.redCol, .nav li a').removeClass('blueCol orangeCol greenCol').addClass('startCol'),
        $('g#color').css('fill', redCl),
        $('span.arrowCta').css('color', redCl),
        $('.menu-wrap .items1').removeClass('blueBackg greenBackg orangeBackg').addClass('redBackg'),
        $('.nav li').removeClass('blueBor greenBor orangeBor').addClass('redBor')
    });


    greenBtn.click(function(){
        $(this).addClass('activeGreen'),
        $(redBtn).removeClass('activeRed'),
        $(blueBtn).removeClass('activeBlue'),
        $(orangeBtn).removeClass('activeOrange'),
        $('span.redCol, .nav li a').removeClass('startCol orangeCol blueCol').addClass('greenCol'),
        $('g#color').css('fill', greenCl),
        $('span.arrowCta').css('color', greenCl),
        $('.menu-wrap .items1').removeClass('redBackg blueBackg orangeBackg').addClass('greenBackg'),
        $('.nav li').removeClass('redBor blueBor orangeBor').addClass('greenBor')
    });


// SCROLL TOP
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    
    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });



// IMGAGES CLICK TO MODAL

   $('.web-main-img').click(function(){
    $('#webModal').modal('show');
   });

   $('.app-main-img').click(function(){
    $('#appModal').modal('show');
   });

   $('.prototype-main-img').click(function(){
    $('#wireframeModal').modal('show');
   });

   $('.animation-main-img').click(function(){
    $('#animationModal').modal('show');
   });

   $('.branding-main-img').click(function(){
    $('#brandingModal').modal('show');
   });

   $('.print-main-img').click(function(){
    $('#printModal').modal('show');
   });

   $('.packaging-main-img').click(function(){
    $('#packagingModal').modal('show');
   });


    //Timelines

    var tl = new TimelineMax();
    // tl.timeScale(3); Makes spee of animation 3 times faster
    tl.from('.dba-logo', .5, {opacity: 0, scale:0, ease: Bounce.easeOut});
    tl.from('.hero-text h1', .5, {opacity:0, x: -50});
    tl.from('.chicho-home-mobile, .chicho-home', .5, {opacity:0, x: 50, drawSVG:"0 100%"});
    
    var tl2 = new TimelineMax({repeat:-1});
    tl2.to("g#ball", .8, {transformOrigin: "center center", y: 145, yoyo:true, repeat:1, rotation: 270, ease:Circ.easeIn});
    


    //StaggerFrom
    TweenMax.staggerFrom('.hero-text p', .3, {opacity:0, x: 20, ease: Sine.easeOut}, .2);
    TweenMax.staggerFrom('#color-list li', .5, {opacity:0, scale:0}, .2);


    


      

});




