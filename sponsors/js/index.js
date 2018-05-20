document.addEventListener('DOMContentLoaded', function() {
  activateSmoothScroll();
  activateScrollReveal();
  setLinks();
});

function setLinks()
{
  var sponsors = document.getElementsByClassName('hover');
  for(var i = 0; i<sponsors.length; i++)
  {
    var sponsor = sponsors[i];
    sponsor.addEventListener('click', function (event) {
      if(event.target.dataset.link != '' && event.target.dataset.link !== undefined && event.target.dataset.link !== null)
      {
        window.open(event.target.dataset.link, '_blank');
      }
    });
  }
}


function activateScrollReveal()
{
  var scrollReveal = ScrollReveal();

  scrollReveal.reveal('#featured_sponsors', {
    viewFactor: 0,
    scale: 1,
    easing: 'linear',
    duration: 0,
    afterReveal: function (element) {
      document.getElementsByClassName('active')[0].classList.remove('active');
      document.getElementById('link_featured_sponsors').classList.add('active');
    },
    reset: true,
    mobile: true
  });


  scrollReveal.reveal('#previous_sponsors', {
    viewFactor: 0.2,
    afterReveal: function (element) {
      document.getElementsByClassName('active')[0].classList.remove('active');
      document.getElementById('link_previous_sponsors').classList.add('active');
    },
    reset: true,
    mobile: true
  });

  scrollReveal.reveal('.sponsor', {
    duration: 500,
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
