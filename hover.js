/*const videos = document.querySelectorAll('.video');
videos.forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.muted = true;
    video.play();
  });
  
  video.addEventListener('mouseleave', () => {
    video.muted = true;
    video.pause();
  });

  video.addEventListener('click', () => {

    window.location.href = "generic.html";
  });
});*/

function hoverEnter(video)
{
    video.muted = true;
    video.play();
}

function hoverExit(video)
{
    video.muted = true;
    video.pause();
}

function clickVideo(destination)
{
    window.location.href = destination;
}