window.addEventListener('DOMContentLoaded', function() {
  var images = document.getElementsByClassName('img');
  var currentImgIndex = 0;
  
  // Aggiungi la classe 'active' all'immagine iniziale
  images[currentImgIndex].classList.add('active');

  setInterval(function() {
    // Rimuovi la classe 'active' dall'immagine corrente
    images[currentImgIndex].classList.remove('active');
    currentImgIndex = (currentImgIndex + 1) % images.length;
    // Aggiungi la classe 'active' all'immagine successiva
    images[currentImgIndex].classList.add('active');
  }, 3000);
});
