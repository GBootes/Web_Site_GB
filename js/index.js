$(function() {
  imagen_intro();
  menu_fixed();
  modales();
  loadmore();

  $('#contactform').ebcaptcha();
  // $('.jprt-container').jportilio({ 'ratio': '0.85', 'ws_lg': '2' });
  

  $('#esp-button').click(function () {
    $("[data-translate]").jqTranslate('json/index', { defaultLang: 'en', forceLang: 'es', asyncLangLoad: false });
  });

  $('#ingl-button').click(function () {
    $("[data-translate]").jqTranslate('json/index', { defaultLang: 'es', forceLang: 'en', asyncLangLoad: false });
  });

  $('#slider').bxSlider({
    slideWidth: 340,
    minSlides: 1,
    maxSlides: 3,
    slideMargin: 10
  });

});


function imagen_intro() {



    $('.introsvg').load('images/global/home.svg', function () {
      resize_image();
      $( window ).resize(function() {
        resize_image();
      });

    });

    function resize_image() {
      var wwidth = $(window).width();
      if (wwidth < 990) {
        var h = $(window).height();
        $('.introsvg').height(h)
      }



    }

}


function menu_fixed() {

  var lastScrollTop = 0;
  $(window).scroll(function(event){
     var st = $(this).scrollTop();
     if (st > lastScrollTop){
          $('.menu').removeClass('nav-down').addClass('nav-up');
     } else {
        $('.menu').removeClass('nav-up').addClass('nav-down');
     }
     if (st >= 500) {
       $('.menu').css({'opacity':'1'});

     }else {
        $('.menu').css({'opacity': '0'});

     }

    if ($(this).scrollTop() < $('section[data-anchor="nosotros"]').offset().top - 100) {
        $('.menu__link').removeClass('menu__link--active');
        $('.menu__link:eq(0)').addClass('menu__link--active');
    }
    if ($(this).scrollTop() >= $('section[data-anchor="nosotros"]').offset().top - 100) {
        $('.menu__link').removeClass('menu__link--active');
        $('.menu__link:eq(1)').addClass('menu__link--active');
    }
    if ($(this).scrollTop() >= $('section[data-anchor="servicios"]').offset().top - 100) {
        $('.menu__link').removeClass('menu__link--active');
        $('.menu__link:eq(2)').addClass('menu__link--active');
    }
    // if ($(this).scrollTop() >= $('section[data-anchor="proyectos"]').offset().top - 100) {
    //     $('.menu__link').removeClass('menu__link--active');
    //     $('.menu__link:eq(4)').addClass('menu__link--active');
    // }
    if ($(this).scrollTop() >= $('section[data-anchor="contacto"]').offset().top - 100) {
        $('.menu__link').removeClass('menu__link--active');
        $('.menu__link:eq(5)').addClass('menu__link--active');
    }

     lastScrollTop = st;
  });



}


function modales() {
  loadUrl();
  $('.close-modal').click(closeModal);

  $('.proyects__item').click(function () {
    var proyect = $(this).attr('data-p');
    OpenModal(proyect);
  });

  // combrobar si cambia la url
  window.onhashchange = function() {
    loadUrl();
  }

  function loadUrl() {
    var hash = window.location.hash;
    var url = hash.split("#")[1];
    if (url != "undefined" && url != null) {
      OpenModal(url);
    }else{
      closeModal()
    }
  }

  function OpenModal(proyect) {
    $('body').css({"overflow": "hidden"});
    $(".contenido-modales").html('');
    $(".contenido-modales").load( "proyectos/"+ proyect +".json", function() {
      $('.modales').fadeIn();
      window.location.hash = proyect;
    });
  }

  function closeModal() {
    $('body').css({"overflow": "auto"});
    $('.modales').fadeOut(function () {
      $(".contenido-modales").html('');

    });
  }


}


function loadmore() {

  $(".proyects__item").slice(0, 4).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".proyects__item:hidden").slice(0, 2).slideDown();
        if ($(".proyects__item:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1000);
    });


}
