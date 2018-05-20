document.addEventListener('DOMContentLoaded', function() {
  var layer_1 = document.getElementById('layer-1');
  var layers = document.getElementById('layers');

  document.getElementById('layers').addEventListener('mousemove', function(event) {
    var width = (event.clientX / layers.clientWidth) * 100;
    layer_1.style.width = width + "%";
  });

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
