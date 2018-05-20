var current_image = 0;

var modal_container;
var modal;
var modal_image;

var n_photos;

document.addEventListener('DOMContentLoaded', function() {

  activateScrollReveal();

  modal_container = document.getElementById('modal_container');
  modal = document.getElementById('modal');
  modal_image = document.getElementById('image');

  var photos = document.querySelectorAll('.photo div');

  n_photos = photos.length;

  for(let i = 0; i<photos.length; i++)
  {
    // var src = photos[i].dataset.src;
    let src = 'images/'+(i+1)+'.png';
    photos[i].dataset.src = i+1;
    photos[i].style.backgroundImage = 'url('+ src +')';

    photos[i].addEventListener('click', function() {

      modal_container.style.display = "block";
      modal.style.transform = "translateY(0)";

      modal_image.style.backgroundImage = 'url('+src+')';
      current_image = i+1;
    });
  }

  document.getElementById('modal_container').addEventListener('click', closeModal);

  document.getElementById('modal_close').addEventListener('click', closeModal);

  document.getElementById('button_previous').addEventListener('click', function() {
    current_image = (current_image-1) % n_photos;

    if(current_image == 0)
    {
      current_image = n_photos;
    }
    var src = 'images/' + current_image + '.png';
    modal_image.style.backgroundImage = 'url('+src+')';
  });

  document.getElementById('button_next').addEventListener('click', function() {

    current_image = (current_image+1) % n_photos;

    if(current_image == 0)
    {
      current_image = n_photos;
    }
    var src = 'images/' + current_image + '.png';
    modal_image.style.backgroundImage = 'url('+src+')';
  });

});


function closeModal(event)
{
  if(event.target.id != 'modal_container' && event.target.id != 'modal_close') {
    return;
  }

  modal.style.transform = "translateY(-1000px)";
  setTimeout(function() {
    modal_container.style.display = "none";
  }, 400);

}


function activateScrollReveal()
{
  var scrollReveal = ScrollReveal();

  scrollReveal.reveal('.photo', {
    duration: 500,
    scale: 0.5,
    easing: 'ease-out',
    viewFactor: 0.25,
    mobile: true,
    reset: true
  });

}
