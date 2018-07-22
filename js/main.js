var botones, contacto, loadAnimation, menu_ppal, particles, preloader;

$(function() {
  botones();
  menu_ppal();
  preloader();
  contacto();
  loadAnimation();
  particles();
});

preloader = function() {
  return $('.preloader').delay(1000).fadeOut(function() {
    return $('.wrapper').delay(1200).fadeIn();
  });
};

botones = function() {
  return $('#crear-cuenta').click(function() {
    return $('.wrp-user-cont').animate({
      'left': '-410px'
    }, 300);
  });
};

function menu_ppal () {
  $('.menu__link, .ancla').click(function(e) {
    e.preventDefault();
    var strAncla = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(strAncla).offset().top - 50
    }, 1000, "swing");
  });
};

loadAnimation = function() {
  $('.investigacion').load('images/global/investigacion.svg');
  $('.desarrollo').load('images/global/desarrollo.svg');
  $('.validacion').load('images/global/validacion.svg');
  $('#servicio1').load('images/global/servicios.svg');
  $('#servicio2').load('images/global/servicios2.svg');
  $('#servicio3').load('images/global/servicios3.svg');
  $('#servicio4').load('images/global/servicios4.svg');
  $('#servicio10').load('images/global/ia.svg');
  $('#servicio5').load('images/global/block.svg');
  return $('#servicio5').load('images/global/servicios5.svg');
};

particles = function() {
  return particlesJS('particles-js', {
    'particles': {
      'number': {
        'value': 80,
        'density': {
          'enable': false,
          'value_area': 800
        }
      },
      'color': {
        'value': ['#5b9bd5', '#9d9fa2', '#000000']
      },
      'shape': {
        'type': 'circle',
        'stroke': {
          'width': 0,
          'color': '#000000'
        },
        'polygon': {
          'nb_sides': 5
        },
        'image': {
          'src': '',
          'width': 100,
          'height': 100
        }
      },
      'opacity': {
        'value': 0.9,
        'random': true,
        'anim': {
          'enable': true,
          'speed': 5,
          'opacity_min': 0.1,
          'sync': true
        }
      },
      'size': {
        'value': 10,
        'random': true,
        'anim': {
          'enable': false,
          'speed': 40,
          'size_min': 0.3,
          'sync': false
        }
      },
      'line_linked': {
        'enable': false,
        'distance': 150,
        'color': '#ffffff',
        'opacity': 0.4,
        'width': 1
      },
      'move': {
        'enable': true,
        'speed': 30,
        'direction': 'none',
        'random': true,
        'straight': false,
        'out_mode': 'out',
        'bounce': false,
        'attract': {
          'enable': false,
          'rotateX': 600,
          'rotateY': 1200
        }
      }
    },
    'interactivity': {
      'detect_on': 'canvas',
      'events': {
        'onhover': {
          'enable': false,
          'mode': 'repulse'
        },
        'onclick': {
          'enable': false,
          'mode': 'push'
        },
        'resize': true
      },
      'modes': {
        'grab': {
          'distance': 400,
          'line_linked': {
            'opacity': 1
          }
        },
        'bubble': {
          'distance': 400,
          'size': 40,
          'duration': 2,
          'opacity': 8,
          'speed': 3
        },
        'repulse': {
          'distance': 200,
          'duration': 0.4
        },
        'push': {
          'particles_nb': 4
        },
        'remove': {
          'particles_nb': 2
        }
      }
    },
    'retina_detect': true
  }, particlesJS('particles-js2', {
    'particles': {
      'number': {
        'value': 20,
        'density': {
          'enable': false,
          'value_area': 800
        }
      },
      'color': {
        'value': ['#5b9bd5', '#9d9fa2', '#000000']
      },
      'shape': {
        'type': 'circle',
        'stroke': {
          'width': 0,
          'color': '#000000'
        },
        'polygon': {
          'nb_sides': 5
        },
        'image': {
          'src': '',
          'width': 100,
          'height': 100
        }
      },
      'opacity': {
        'value': 0.9,
        'random': true,
        'anim': {
          'enable': true,
          'speed': 1,
          'opacity_min': 0.3,
          'sync': true
        }
      },
      'size': {
        'value': 3,
        'random': true,
        'anim': {
          'enable': false,
          'speed': 40,
          'size_min': 0.1,
          'sync': false
        }
      },
      'line_linked': {
        'enable': false,
        'distance': 150,
        'color': '#ffffff',
        'opacity': 0.4,
        'width': 1
      },
      'move': {
        'enable': true,
        'speed': 3,
        'direction': 'none',
        'random': true,
        'straight': false,
        'out_mode': 'out',
        'bounce': false,
        'attract': {
          'enable': false,
          'rotateX': 600,
          'rotateY': 1200
        }
      }
    },
    'interactivity': {
      'detect_on': 'canvas',
      'events': {
        'onhover': {
          'enable': false,
          'mode': 'repulse'
        },
        'onclick': {
          'enable': false,
          'mode': 'push'
        },
        'resize': true
      },
      'modes': {
        'grab': {
          'distance': 400,
          'line_linked': {
            'opacity': 1
          }
        },
        'bubble': {
          'distance': 400,
          'size': 40,
          'duration': 2,
          'opacity': 8,
          'speed': 3
        },
        'repulse': {
          'distance': 200,
          'duration': 0.4
        },
        'push': {
          'particles_nb': 4
        },
        'remove': {
          'particles_nb': 2
        }
      }
    },
    'retina_detect': true
  }));
};

contacto = function() {
  $('#submit').click(function() {
    var a = "php/bootesMail.php";
    $('#message').slideUp(750, function() {
      $('#message').hide();
      if ($('#text').val() == "") {
        $.post(a, {
          name: $('#name').val(),
          email: $('#email').val(),
          empresa: $('#empresa').val(),
          phone: $('#phone').val(),
          comments: $('#comments').val(),
          text: $('#text').val()
        }, function(a) {
          document.getElementById('message').innerHTML = a;
          $('#message').slideDown('slow');
          $('#submit').removeAttr('disabled');
          if (null !== a.match('success')) {
              $("input[type='text'], textarea").val('');
            $('#contactform').slideDown('slow');
          }
        });
      }else {
        console.log('es un robot');
      }

    });
    return false;
  });
  return $('#contactform input, #contactform textarea').keyup(function() {
    return $('#message').slideUp(1500);
  });
};
