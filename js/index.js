var about_quest_element;
var about_jntu_element;

var quest_indicator;
var jntu_indicator;

var about_quest_text;
var about_jntu_text;

var loaded = false;

var menu;

document.addEventListener('DOMContentLoaded', contentLoaded);


window.onload = function() {
  loaded = true;
};

function contentLoaded()
{
  document.getElementsByTagName('body')[0].style.overflowY = "hidden";

  setTimeout(function() {
    if(loaded == true)
    {
      document.getElementsByTagName('body')[0].style.overflowY = "auto";
      document.getElementById('page_load').style.display = "none";
    }
    else
    {
      setInterval(function() {
        if(loaded == true)
        {
          document.getElementsByTagName('body')[0].style.overflowY = "auto";
          document.getElementById('page_load').style.display = "none";
        }
      }, 4500);
    }
  }, 5000);

  activateSmoothScroll();

  activateScrollReveal();

  addEventListeners();

  menu = document.querySelectorAll('.header_container nav ul li a');


}

function addEventListeners()
{

  about_quest_element = document.getElementById('about_quest');
  about_jntu_element = document.getElementById('about_jntu');

  quest_indicator = document.getElementById('quest_indicator');
  jntu_indicator = document.getElementById('jntu_indicator');

  about_quest_text = document.getElementById('about_quest_text');
  about_jntu_text = document.getElementById('about_jntu_text');

  document.getElementById('play').addEventListener('click', playTrailer);
  document.getElementById('trailer_close_wrapper').addEventListener('click', closeTrailer);

  document.getElementById('hamburger_icon').addEventListener('click', openMenu);


  document.getElementById('about_jntu').addEventListener('click', showJntuModal);
  document.getElementById('about_quest').addEventListener('click', showQuestModal);
  document.getElementById('modal_container').addEventListener('click', closeModal);

}


function playTrailer(event)
{
  if(document.getElementById('trailer_mask').classList.contains('close_trailer'))
  {
    document.getElementById('trailer_mask').classList.remove('close_trailer');
  }
  document.getElementById('trailer_mask').classList.add('open_trailer');
  document.getElementById('trailer').style.border = "solid 7px #3E2723";
  document.getElementsByTagName('header')[0].style.transform="translateY(-200px)";
  document.getElementById('trailer_close_wrapper').style.display = "block";

  setTimeout(function(){
    document.getElementById('video_trailer').style.display = "block";
    document.getElementById('video_trailer').src = document.getElementById('video_trailer').dataset.src;
  }, 300);

}

function closeTrailer(event)
{
  document.getElementById('trailer_mask').classList.remove('open_trailer');
  document.getElementById('trailer_mask').classList.add('close_trailer');
  setTimeout(function() {
    document.getElementById('trailer').style.border = "none";
    document.getElementsByTagName('header')[0].style.transform="translateY(0)";
  }, 250);

  document.getElementById('trailer_close_wrapper').style.display = "none";

  document.getElementById('video_trailer').style.display = "none";
  document.getElementById('video_trailer').src = "";
}

function clamp(value)
{
  return Math.min(Math.max(0, value), 1);
}

function openMenu() {
  var hamburger_line = document.getElementById('hamburger_line');

  var menu_container_large = document.getElementById('menu_container_large');
  if(hamburger_line.parentElement.classList.contains('hamburger_icon'))
  {
    //In open state
    hamburger_line.classList.add('hamburger_open_line');
    hamburger_line.parentElement.classList.remove('hamburger_icon');
    menu_container_large.style.display = "block";
    document.getElementById('menu').style.transform="translateY(-200px)";
  }
  else
  {
    //In close state
    hamburger_line.classList.remove('hamburger_open_line');
    hamburger_line.parentElement.classList.add('hamburger_icon');
    menu_container_large.style.display = "none";
    document.getElementById('menu').style.transform="translateY(0)";
  }

}


function closeModal(event) {

  if(event.target.id != 'modal_container') {
    return;
  }

  document.getElementById('modal_jntu').style.transform = 'translateY(-1000px)';
  document.getElementById('modal_quest').style.transform = 'translateY(-1000px)';
  setTimeout(function(){
    event.target.style.display = 'none';
    document.getElementsByTagName('body')[0].style.overflowY = "auto";
    document.getElementById('modal_jntu').style.display = 'none';
    document.getElementById('modal_quest').style.display = 'none';

    // document.getElementById('modal_jntu').style.transform = 'translateY(-1000px)';
    // document.getElementById('modal_quest').style.transform = 'translateY(-1000px)';
  }, 400);
}


function showJntuModal() {
  document.getElementsByTagName('body')[0].style.overflowY = "hidden";
  document.getElementById('modal_container').style.display = 'block';
  document.getElementById('modal_jntu').style.display = 'block';

  document.getElementById('modal_jntu').style.transform = 'translateY(0)';
}

function showQuestModal() {
  document.getElementsByTagName('body')[0].style.overflowY = "hidden";
  document.getElementById('modal_container').style.display = 'block';
  document.getElementById('modal_quest').style.display = 'block';

  document.getElementById('modal_quest').style.transform = 'translateY(0)';
}

function setActive(id)
{
  var element = document.getElementById(id);
  var active_element = document.getElementsByClassName('active')[0];
  active_element.classList.remove('active');

  element.classList.add('active');

  if(id === 'a_spotlight')
  {
    for(var i = 0; i<menu.length; i++)
    {
      menu[i].style.color = "white";
    }
  }
  else
  {
    for(var i = 0; i<menu.length; i++)
    {
      menu[i].style.color = "#212121";
    }
  }
}


function activateScrollReveal()
{
  var scrollReveal = ScrollReveal();

    scrollReveal.reveal('#spotlight', {
      viewFactor: 0,
      scale: 1,
      easing: 'linear',
      duration: 0,
      afterReveal: function (element) {
        setActive("a_spotlight");
      },
      reset: true,
      mobile: true
    });


  scrollReveal.reveal('#about', {
    viewFactor: 0.5,
    afterReveal: function (element) {
      setActive("a_about");
    },
    reset: true,
    mobile: true
  });


  scrollReveal.reveal('.quest', {
    duration: 500,
    scale: 0.8,
    easing: 'ease-out',
    viewFactor: 0.4,
    mobile: true,
    reset: true
  });
  scrollReveal.reveal('.jntu', {
    duration: 500,
    delay: 300,
    scale: 0.8,
    easing: 'ease-out',
    viewFactor: 0.4,
    mobile: true,
    reset: true
  });

}

/* Stack overflow */
function activateSmoothScroll()
{$('a[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  document.getElementsByClassName('active')[0].classList.remove('active');
  event.target.classList.add('active');

  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    &&
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) {
          return false;
        } else {
          $target.attr('tabindex','-1');
          $target.focus();
        };
      });
    }
  }
});
}
