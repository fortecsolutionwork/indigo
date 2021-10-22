




// prelaoder
$(window).on('load', function () { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('.preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({ 'overflow': 'visible' });
})


// header

$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
  });
});


$('.handipicked-slider').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1500,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        arrows: true,
        centerMode: false,
        slidesToShow: 4
      }
    },
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]

});




// top rated product slider
$('.top-rated-products-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1500,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        arrows: true,
        centerMode: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]

});


// banner slider

$('.banner-slider').slick({


  slidesToShow: 1,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 4000,
  accessibility: false,
  infinite: true,
  cssEase: 'linear',
  prevArrow: '<span class="prev"><i class="fal fa-long-arrow-alt-left"></i></span>',
  nextArrow: '<span class="next"><i class="fal fa-long-arrow-alt-right"></i></span>',
  dots: true,
  arrows: false
});



// 2
$('.banner-slider2').slick({


  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 25000,
  accessibility: false,
  infinite: true,
  cssEase: 'linear',
  prevArrow: '<span class="prev"><i class="fal fa-long-arrow-alt-left"></i></span>',
  nextArrow: '<span class="next"><i class="fal fa-long-arrow-alt-right"></i></span>',
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToScroll: 1,

      }

    }
  ]
});



$('.banner-slider3').slick({


  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  accessibility: false,
  infinite: true,
  cssEase: 'linear',
  prevArrow: '<span class="prev"><i class="fal fa-long-arrow-alt-left"></i></span>',
  nextArrow: '<span class="next"><i class="fal fa-long-arrow-alt-right"></i></span>',
  dots: true,
  arrows: false
});



$('.banner-slider4').slick({


  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  accessibility: false,
  infinite: true,
  cssEase: 'linear',
  prevArrow: '<span class="prev"><i class="fal fa-long-arrow-alt-left"></i></span>',
  nextArrow: '<span class="next"><i class="fal fa-long-arrow-alt-right"></i></span>',
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        autoplay: false,
        dots: false
      }
    }
  ]
});



//   slider 2

$('.feature-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true,
  accessibility: false,
  dots: true,
  cssEase: 'linear',
  arrows: false,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});



// slider 3
$('.products-slider').slick({
  autoplaySpeed: 3000,
  centerMode: false,
  cssEase: 'linear',
  centerPadding: '60px',
  accessibility: false,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        arrows: true,
        centerMode: false,
        centerPadding: '30px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        centerMode: false,
        centerPadding: '30px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 1
      }
    }
  ]
});





// brand
$('.trustBrand-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  accessibility: false,
  autoplay: true,
  cssEase: 'linear',
  autoplaySpeed: 1000,
  infinite: true,
  prevArrow: '<span class="prev"><i class="fal fa-long-arrow-alt-left"></i></span>',
  nextArrow: '<span class="next"><i class="fal fa-long-arrow-alt-right"></i></span>',
  dots: true,
  arrows: false,

  responsive: [
    {
      breakpoint: 1440,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '0',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1
      }
    }
  ]
});



// gallery
$('.gallery-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  accessibility: false,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: 'linear',
  infinite: true,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    }

  ]
});



// gallery2
$('.gallery-slider2').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  accessibility: false,
  autoplay: true,
  cssEase: 'linear',
  speed: 1000,
  infinite: true,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    }

  ]
});




// artisnal-details_gallery_new_slider
$('.artisnal-details_gallery_new_slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: 'linear',
  accessibility: false,
  infinite: true,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: '20px'
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }
  ]
});





// Artisanal-slider_second_view_all
$('.Artisanal-slider_second_view_all').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: 'linear',
  accessibility: false,
  infinite: true,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: '20px'
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: '5px'
      }
    }
  ]
});


// Artisanal-slider
$('.Artisanal-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  accessibility: false,
  infinite: true,
  dots: false,
  cssEase: 'linear',
  arrows: false,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: '20px'
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


// Artisanal-slider_second
$('.Artisanal-slider_second').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  accessibility: false,
  infinite: true,
  cssEase: 'linear',
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: '20px'
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});












// brand-logo
$('.brand-logo').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  accessibility: false,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  speed: 2500,
  infinite: true,
  dots: false,
  arrows: false,

  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ]

});



//  eco slider
$('.eco-slider').slick({


  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 4000,
  accessibility: false,
  infinite: true,
  prevArrow: '<span class="prev"><i class="fal fa-long-arrow-alt-left"></i></span>',
  nextArrow: '<span class="next"><i class="fal fa-long-arrow-alt-right"></i></span>',
  dots: true,
  arrows: false
});

//  eco slider
$('.project_indigo_slider').slick({


  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  accessibility: false,
  infinite: true,
  cssEase: 'linear',
  prevArrow: '<span class="prev"><i class="fal fa-long-arrow-alt-left"></i></span>',
  nextArrow: '<span class="next"><i class="fal fa-long-arrow-alt-right"></i></span>',
  dots: true,
  arrows: false
});








//   smoth dropdown

$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    // Evento
    links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
  }

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el;
    $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    };
  }

  var accordion = new Accordion($('#accordion'), false);
});


//   dropdown 2
$(function () {
  $('.js-dropdown-footer-menu').hide();
  $('.js-dropdown-footer').click(function () {
    $('i').removeClass('is-rotate');
    $('.js-dropdown-footer-menu').slideUp(200);
    if ($('+.js-dropdown-footer-menu', this).css('display') == 'none') {
      $('i', this).addClass('is-rotate');
      $('+.js-dropdown-footer-menu', this).slideDown(200);
    }
  });
});


$(".humburger-menu").click(function () {
  $(".Nav").toggleClass("active");
});

$(".humburger-menu").click(function () {
  $(".Navbar").toggleClass("active");
  $(this).toggleClass("active");
});

$(".humburger-menu img").click(function () {
  $(".banner_min_height").toggleClass("show");
});

$(".humburger-menu img").click(function () {
  $(".user-info").toggleClass("active");
});

$(".humburger-menu img").click(function () {
  $(".logo_text-span").toggleClass("active");
});




$("#productBtn").click(function () {
  $(this).toggleClass("active");
});

$('#search_btn').click(function () {
  event.preventDefault();
  $('.search_input_wrapper').addClass('active');
  $('#search_btn').hide();


});
$('.search_input_wrapper i').click(function () {
  $('.search_input_wrapper').removeClass('active');
  $('#search_btn').show();
});






// var toggle_img = $('.humburger-menu img').attr('src');

// $('.humburger-menu').click(function(){

//   var current_icon = $('.humburger-menu img').attr("src");

//   if (toggle_img == current_icon){
//   $('.humburger-menu img').attr("src", "images/nav_close.svg");
//   }
//   else{
//     $('.humburger-menu img').attr("src", "images/nav_open.svg");
//   }
// });






// for sign popup

//  sign in

// $('#signIn').click(function(){
//   event.preventDefault();
//   $('.signin-popup-open').addClass('active');
//   $(this).parents('.modal-bg').addClass('active');
// });

// $('.modal_close').click(function(){
//   event.preventDefault();
//   $(this).parents('.modal-bg').removeClass('active');		
//     $(this).parents('.signin-popup').removeClass('active');
// });


// $('#forSignUp').click(function(){
//   event.preventDefault();
//   $('.signUp-popup-open').addClass('active');
//   $('.modal-bg').addClass('active');
// });

// $('.brand_open').click(function(){
//   event.preventDefault();
//   $('.registar-popup_new').addClass('active');
//   $('.modal-bg').addClass('active');
// });
// $('.manufactur_open').click(function(){
//   event.preventDefault();
//   $('.uploadFile').addClass('active');
//   $('.modal-bg').addClass('active');
// });



// new
// $(document).ready(function(){
//   $(".signin-popup").click(function(){
//    // $(".signin-popup").css("display", "none");
//   });
// });





// latest search
$('.latest-search-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1500,
  dots: false,
  prevArrow: '<span class="prev"><i class="fas fa-chevron-left"></i></span>',
  nextArrow: '<span class="next"><i class="fas fa-chevron-right"></i></span>',
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        centerPadding: '30px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1024,
      settings: {
        centerPadding: '30px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        centerPadding: '15px',
        dots: false,
        arrows: false,
        slidesToShow: 2
      }
    }
  ]
});


// Artisanal-slider_new
$('.Artisanal-slider_new').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 0,
  centerPadding: '10px',
  speed: 2000,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        centerPadding: '15px',
        autoplay: true,
        slidesToShow: 1
      }
    }
  ]
});




// latest_search_slider
$('.latest_search_slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 0,
  centerPadding: '10px',
  speed: 2000,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        centerPadding: '15px',
        autoplay: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        centerPadding: '15px',
        autoplay: true,
        slidesToShow: 2
      }
    }
  ]
});




// dashboard_pr_slider
$('.dashboard_pr_slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 0,
  centerPadding: '10px',
  speed: 2000,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        centerPadding: '15px',
        autoplay: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        centerPadding: '15px',
        autoplay: true,
        slidesToShow: 1
      }
    }
  ]
});


// dashboard_pr_slider2

$('.dashboard_pr_slider2').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 0,
  centerPadding: '10px',
  speed: 2000,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        centerPadding: '15px',
        autoplay: true,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 767,
      settings: {
        centerPadding: '15px',
        autoplay: true,
        slidesToShow: 1
      }
    }
  ]
});



//#rusult_count_toggle

$("#rusult_count_toggle").click(function () {
  $("#results_outer").toggleClass("active");
});
$("#rusult_count_toggle").click(function () {
  $(".search_result_for_mobile").toggleClass("active");
});

// filter
$("#filter_mobile").click(function () {
  $(".more_filters").toggleClass("active");
});


$(".verified").click(function () {
  $("#scope_verified").toggleClass("active");
});

//our_service_explore_slider
$('.our_service_explore_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  speed: 1500,
  centerMode: true,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        centerPadding: '30px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1200,
      settings: {
        centerPadding: '30px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 800,
      settings: {
        centerPadding: '15px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});


// handipicked-slide

// quote-slider
$('.quote-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1500,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1024,
      settings: {
        centerPadding: '30px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});






// quote-slider2
$('.quote-slider2').slick({
  rows: 2,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  speed: 1500,
  dots: true,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1050,
      settings: {
        centerPadding: '30px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        rows: 4
      }
    }
  ]
});


// quote-slider3
$('.quote-slider3').slick({
  rows: 2,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  speed: 1500,
  dots: true,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 1050,
      settings: {
        centerPadding: '30px',
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        rows: 4,
      }
    }
  ]
});


// quote-slider4
$('.quote-slider4').slick({
  rows: 4,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  speed: 1500,
  dots: true,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 1050,
      settings: {
        centerPadding: '30px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});



// suppliers-slider
$('.suppliers-slider').slick({
  rows: 2,
  centerMode: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  speed: 1500,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 500,
      settings: "unslick"
    }
  ]
});




// supplier_gallery_slide
$('.supplier_gallery_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 2560,
      settings: "unslick"
    },
    {
      breakpoint: 767,
      slick: true,
    }
  ]
});






// cloth-slider

$('.cloth-slider').slick({
  centerMode: true,
  slidesToShow: 8,
  slidesToScroll: 0,
  autoplay: false,
  centerPadding: '10px',
  autoplaySpeed: 500,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 4,
        autoplay: false,
        centerMode: true,
      }
    }
  ]
});



// chose-cloth-slider
$('.chose-cloth-slider').slick({
  rows: 2,
  centerMode: true,
  slidesToShow: 6,
  slidesToScroll: 0,
  autoplay: false,
  autoplaySpeed: 0,
  speed: 1500,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 0,
        autoplay: false,
        autoplaySpeed: 0,
        speed: 1500,
        dots: false,
        arrows: false,
      }
    }
  ]
});



// feature-patola-slider
$('.feature-patola-slider').slick({
  centerMode: true,
  slidesToShow: 6,
  slidesToScroll: 0,
  autoplay: false,
  centerPadding: '10px',
  autoplaySpeed: 0,
  speed: 1500,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        autoplay: false,
        centerMode: true,
      }
    }
  ]
});


// scope_verified-slider
// $('.scope_verified-slider').slick({
//   centerMode: true,
//   slidesToShow: 4,
//   slidesToScroll: 0,
//   autoplay: false,
//   centerPadding: '10px',
//   autoplaySpeed: 0,
//   speed:1500,
//   dots: false,
//   arrows:false,
//   responsive: [
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 2,
//         autoplay: false,
//         centerMode: true,
//       }
//     }
//   ]
// });


$('.cross_btn_mobile img').click(function () {
  $(this).parents('.more_filters').removeClass('active');
});


// .mobile_slider_banner
$('.mobile_slider_banner').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3500,
  centerPadding: '10px',
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        centerPadding: '15px',
        autoplay: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        centerPadding: '15px',
        autoplay: true,
        slidesToShow: 1
      }
    }
  ]
});

// message_slider
$('.message_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3500,
  centerPadding: '10px',
  dots: false,
  arrows: true,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        centerPadding: '15px',
        autoplay: true,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        centerPadding: '15px',
        autoplay: true,
        slidesToShow: 1
      }
    }
  ]
});




// approved_slider
$('.approved_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1500,
  dots: false,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    }
  ]
});









// .message_input_group



$(".message_input_group").click(function () {
  $(".message_middle_chatbar").toggleClass("active");
});

$('#close_chat_message').click(function () {
  $(".message_middle_chatbar").removeClass("active");
});



$(".message_input_group").click(function () {
  $("#hide_plus").toggleClass("active");
});
$(".message_input_group").click(function () {
  $("#hide_back_arrow").toggleClass("active");
});


$('#close_chat_message').click(function () {
  $("#hide_plus").removeClass("active");
});

$('#close_chat_message').click(function () {
  $("#hide_back_arrow").removeClass("active");
});



$(".message_input_group").click(function () {
  $("#message_bottom_sticky_option").toggleClass("active");
});

$('#close_chat_message').click(function () {
  $("#message_bottom_sticky_option").removeClass("active");
});


$(".message_input_group").click(function () {
  $("#hide_hamburger").toggleClass("active");
});

$('#close_chat_message').click(function () {
  $("#hide_hamburger").removeClass("active");
});



$("#open_right_message_bar").click(function () {
  $(".message_right_sidebar").toggleClass("active");
});



$("#open_right_message_bar").click(function () {
  $(".message_middle_chatbar .user-profile").toggleClass("active");
});
$("#open_right_message_bar").click(function () {
  $(".message_middle_chatbar").toggleClass("show");
});

$(".message_input_group").click(function () {
  $(".header").toggleClass("deactive");
});

$('#close_chat_message').click(function () {
  $(".header").removeClass("deactive");
});


$(".message_input_group").click(function () {
  $(".message_left_sidebar").toggleClass("active");
});


//  .message_middle_chatbar .search_chat
$("#open_right_message_bar").click(function () {
  $(".message_middle_chatbar .search_chat").toggleClass("hide");
});



$('#close_chat_message').click(function () {
  $(".message_right_sidebar").removeClass("active");
});

$('#close_chat_message').click(function () {
  $(".message_middle_chatbar").removeClass("show");
});
$('#close_chat_message').click(function () {
  $(".search_chat").removeClass("hide");
});



$(".open_payment").click(function () {
  $("#payment_form").toggleClass("active");
});



$('#hide_back_arrow').click(function () {
  $("#payment_form").removeClass("active");
});


$(".show_replay").click(function () {
  $("#replay_wrraper").addClass("active");
});


// $('.close_replay_wrapper').click(function () {
//   $(".main_chat_group ").removeClass("show");
// });

$('.show_replay').click(function () {
  $(this).parents('.main_chat_group').siblings().removeClass('show');
  $(this).parents('.main_chat_group').addClass('show');
});



$('.close_replay_wrapper').each(function () {
  $(this).click(function () {
    $(this).parents('.main_chat_group').removeClass("show");
    $("#replay_wrraper").removeClass("active");
  });

});



if (screen.width < 767) {
  $(".show_replay").click(function () {
    $(".replay_text").removeClass("active");
    $(this).siblings().addClass("active");

  });
}
$(".humburger-menu").click(function () {
  $("#Supplier_page .nav-tabs ").toggleClass("deactive");
});



$(".open_sidebar_mobile").click(function () {
  $(".main_left_sidebar ").toggleClass("show");
});


$('.close_slidebar_mobile').click(function () {
  $(".main_left_sidebar").removeClass("show");
});

$(".open_sidebar_mobile").click(function () {
  $("#Supplier_page .nav-tabs ").addClass("deactive");
});





$(" .main_chat_group .message_input_group").click(function () {
  $(".header ").addClass("overite");
});




$('.show_replay').click(function () {
  $(".main_left_sidebar").removeClass("show");
});

// //For Firefox we have to handle it in JavaScript 
// var vids = $("video");
// $.each(vids, function () {
//   this.controls = false;
// });
// //Loop though all Video tags and set Controls as false

// $("video").click(function () {
//   //console.log(this); 
//   if (this.paused) {
//     this.play();
//   } else {
//     this.pause();
//   }
// });


$(".open_wishlist_card").click(function () {
  $(".form_open_new ").toggleClass("active");
});



// badges_wrapper

$(" #bages_page .badges_wrapper").click(function () {
  $(".right_side ").addClass("active");
});


$('#hide_back_arrow').click(function () {
  $(".right_side").removeClass("active");
});


$(" #bages_page .badges_wrapper").click(function () {
  $(".badges_main_banner ").addClass("active");
});
$('#hide_back_arrow').click(function () {
  $(".badges_main_banner").removeClass("active");
});

// body
$(" #bages_page .badges_wrapper").click(function () {
  $(".main_banner_new.about_us_banner").addClass("active");
});

$('#hide_back_arrow').click(function () {
  $(".main_banner_new.about_us_banner").removeClass("active");
});

// .container-fluid
$(" #bages_page .badges_wrapper").click(function () {
  $("#bages_page .container-fluid").addClass("active");
});
$('#hide_back_arrow').click(function () {
  $("#bages_page .container-fluid").removeClass("active");
});

// left side
$(" #bages_page .badges_wrapper").click(function () {
  $(".badges_cerifications_section .badges_middle").addClass("active");
});
$('#hide_back_arrow').click(function () {
  $(".badges_cerifications_section .badges_middle").removeClass("active");
});


// left side
$(" #bages_page .badges_wrapper").click(function () {
  $(".badges_cerifications_section .left_side").addClass("active");
});
$('#hide_back_arrow').click(function () {
  $(".badges_cerifications_section .left_side").removeClass("active");
});



// 
$(" #bages_page .badges_wrapper").click(function () {
  $(".badges_cerifications_section .head").addClass("active");
});
$('#hide_back_arrow').click(function () {
  $(".badges_cerifications_section .head").removeClass("active");
});

$(" #bages_page .badges_wrapper").click(function () {
  $(".badges_cerifications_section").addClass("active");
});
$('#hide_back_arrow').click(function () {
  $(".badges_cerifications_section").removeClass("active");
});

// 

// 
$(" #bages_page .badges_wrapper").click(function () {
  $(".badges_cerifications_section .for_mobile").addClass("active");
});
$('#hide_back_arrow').click(function () {
  $(".badges_cerifications_section .for_mobile").removeClass("active");
});

// open_more_filter
$(".open_more_filter").click(function () {
  $("#nav-home").toggleClass("active show");
  $("#nav-profile").toggleClass("active show");
});




$("#nav-profile-tab3").click(function () {
  $(".unchagned_checkBox_group").addClass("active");
  $(".changed_checkBox_group").addClass("active");
});

// nav-home-tab
$("#nav-home-tab").click(function () {
  $(".unchagned_checkBox_group").removeClass("active");
  $(".changed_checkBox_group").removeClass("active");
});

// open_more_filter_new
$(".open_more_filter_new").click(function () {
  $(".open_more_filter_new .dropdown-custom").toggleClass("active show");
});

// open_more_filter_new_second
$(".open_more_filter_new_second").click(function () {
  $(".open_more_filter_new_second .second").toggleClass("active show");
});


$(".for_mobile_more_filter").click(function () {
  $(".header").toggleClass("hide");
  $(".nav_and_filter").toggleClass("hide");
  $(".hide_on_click").toggleClass("hide");
});

// for_mobile_more_filter_hide
$(".for_mobile_more_filter_hide").click(function () {
  $(".header").removeClass("hide");
  $(".nav_and_filter").removeClass("hide");
  $("#nav-profile").removeClass("active show");
  $("#nav-home").addClass("active show");
  $(".hide_on_click").removeClass("hide");
});


// nav-profile-tab3
$("#nav-profile-tab3").click(function () {
  $("#nav-home").addClass("overite");
});
$("#nav-home-tab").click(function () {
  $("#nav-home").removeClass("overite");
  $("#nav-profile3").removeClass("active show");


});

//nav-home-tab

$("#nav-profile-tab3").click(function () {
  $(".open_techpark").addClass("active");
});
$("#nav-home-tab").click(function () {
  $(".open_techpark").removeClass("active");
});


//open_techpark
$(".open_techpark .open_card").click(function () {
  $(".hide_on_click").addClass("deactive");
  $(".show_on_click").addClass("active");
  $(".supplier_page").addClass("deactive");
  $(".nav_and_filter").addClass("deactive");


});


// close_slidebar_mobile
$(".close_slidebar_mobile").click(function () {
  $(".hide_on_click").removeClass("deactive");
  $(".show_on_click").removeClass("active");
  $(".supplier_page").removeClass("deactive");
  $(".nav_and_filter").removeClass("deactive");


});



// humburger-menu
$(".humburger-menu").click(function () {
  $("#dashboard .footer").toggleClass("overite");
});


// .rfq_page .nav_and_filter
// humburger-menu
$(".humburger-menu").click(function () {
  $(".rfq_page .nav_and_filter").toggleClass("overite");
});




//open_signIn
$(".open_signIn").click(function () {
  $(".signin-popup-open").addClass("openSingUp");
});

$(".close_signIn").click(function () {
  $(".signin-popup-open").removeClass("openSingUp");
});


//for_mobile_more_filter
$(".for_mobile_more_filter").click(function () {
  $(".footer.formobile").addClass("dnone");
});

$(".for_mobile_more_filter_hide").click(function () {
  $(".footer.formobile").removeClass("dnone");
});




$(document).on('change', 'label.multi-select-menuitem', function () {
  $(this).toggleClass('active');

});

// $(document).on('click', '.multi-select-menu', function () {
//   $('label.multi-select-menuitem').append("<span>Test</span>");
// });




$(".open_sort_credit").click(function () {
  $(".dropdown-custom").toggleClass("active");
});

$(".allInvoice_section .progres_group").click(function () {
  $(".allInvoice_section .wrapper").toggleClass("active");
});




