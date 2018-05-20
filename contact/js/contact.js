document.addEventListener('DOMContentLoaded', function() {

  activateScrollReveal();
  var show_more_elements;

  show_more_elements = document.querySelectorAll('.student_coordinator .show_more');
  for(var i = 0; i < show_more_elements.length; i++)
  {
    show_more_elements[i].addEventListener('click', function(event) {

      if(event.target.dataset.position == "left")
      {
        event.target.style.transform = "translate(210px, 0) rotate(180deg)";
        event.target.parentElement.style.height = "40%";
        event.target.dataset.position = "right";
      }
      else
      {
        event.target.style.transform = "translate(0, 0) rotate(0deg) ";
        event.target.parentElement.style.height = "20%";
        event.target.dataset.position = "left";
      }
    });
  }


  show_more_elements = document.querySelectorAll('.main_coordinator .show_more');
  for(var i = 0; i < show_more_elements.length; i++)
  {
    show_more_elements[i].addEventListener('click', function(event) {

      if(event.target.dataset.position == "bottom")
      {
        event.target.style.transform = "rotate(180deg)";
        event.target.parentElement.style.height = "45%";
        event.target.dataset.position = "top";
      }
      else
      {
        event.target.style.transform = "rotate(0deg) ";
        event.target.parentElement.style.height = "25%";
        event.target.dataset.position = "bottom";
      }
    });
  }

    document.getElementById('hamburger_icon').addEventListener('click', openMenu);
  });



    function openMenu() {
      var hamburger_line = document.getElementById('hamburger_line');
      var list = document.getElementById('list');

      var nav_wrapper = document.querySelector('#nav_wrapper');

      if(hamburger_line.parentElement.classList.contains('hamburger_icon'))
      {
        //In open state
        hamburger_line.classList.add('hamburger_open_line');
        hamburger_line.parentElement.classList.remove('hamburger_icon');

        nav_wrapper.style.display = "block";

        setTimeout(function() {
          list.style.display="block";
        }, 250);

      }
      else
      {
        //In close state
        hamburger_line.classList.remove('hamburger_open_line');
        // menu.classList.remove('menu_open');
        hamburger_line.parentElement.classList.add('hamburger_icon');

        nav_wrapper.style.display = "none";
                list.style.display="none";


      }

    }


function activateScrollReveal()
{
  var scrollReveal = ScrollReveal();

  scrollReveal.reveal('.main_coordinator', {
    duration: 500,
    scale: 0.6,
    easing: 'ease-out',
    viewFactor: 0.0,
    mobile: true,
    reset: true
  });

  scrollReveal.reveal('.student_coordinator', {
    duration: 500,
    scale: 0.6,
    easing: 'ease-out',
    viewFactor: 0.2,
    mobile: true,
    reset: true
  });

}
