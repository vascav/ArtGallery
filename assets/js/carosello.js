window.addEventListener('DOMContentLoaded', function() {
  var images = document.getElementsByClassName('img');
  var currentImgIndex = 0;

  setInterval(function() {
    images[currentImgIndex].classList.remove('active');
    currentImgIndex = (currentImgIndex + 1) % images.length;
    images[currentImgIndex].classList.add('active');
  }, 1000);
});

