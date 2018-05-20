document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded()
{
  activateScrollReveal();

  loadImages();
}

function loadImages()
{
  var event_backgrounds = document.getElementsByClassName('event_background');
  for(var i = 0; i<event_backgrounds.length; i++)
  {

    event_backgrounds[i].style.backgroundImage = "url(" + event_backgrounds[i].dataset.src + ")";

    event_backgrounds[i].addEventListener('click', function(event) {
      if(event.target.classList.contains('event_background'))
      {
        window.open(event.target.dataset.link, '_self');
      }
    });

  }
}

function activateScrollReveal()
{
  var scrollReveal = ScrollReveal();

  scrollReveal.reveal('.event_wrapper', {
    duration: 500,
    scale: 0.6,
    easing: 'ease-out',
    viewFactor: 0.2,
    mobile: true,
    reset: true
  });

}
