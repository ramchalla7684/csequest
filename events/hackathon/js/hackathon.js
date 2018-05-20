document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('play').addEventListener('click', playTrailer);
    document.getElementById('trailer_close_wrapper').addEventListener('click', closeTrailer);

});



function playTrailer(event)
{
  document.getElementsByTagName('header')[0].style.transform="translateY(-200px)";
  document.getElementById('trailer_container').style.display = "block";

    document.getElementById('video_trailer').src = document.getElementById('video_trailer').dataset.src;

}

function closeTrailer(event)
{
    document.getElementsByTagName('header')[0].style.transform="translateY(0)";

  document.getElementById('trailer_container').style.display = "none";

  document.getElementById('video_trailer').src = "";
}
