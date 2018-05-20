document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded()
{
  activateScrollReveal();

  loadImages();
}

function loadImages()
{
  var workshop_backgrounds = document.getElementsByClassName('workshop_background');
  for(var i = 0; i<workshop_backgrounds.length; i++)
  {
    var src = workshop_backgrounds[i].dataset.src;
    let link = workshop_backgrounds[i].dataset.link;
    workshop_backgrounds[i].style.backgroundImage = "url(" + src + ")";

    workshop_backgrounds[i].addEventListener('click', function() {
      window.open(link, '_self');
    });

  }
}

function activateScrollReveal()
{
  var scrollReveal = ScrollReveal();

  scrollReveal.reveal('.workshop_wrapper', {
    duration: 500,
    scale: 0.5,
    easing: 'ease-out',
    viewFactor: 0.2,
    mobile: true,
    reset: true
  });

}
