"use strict";

/* Typing animation*/

var greeting = ['Web Developer', 'React Developer', 'Front-end Developer'];
var currentGreetingIndex = 0;
var currentCharacterIndex = 0;
var isDeleting = false;
var isPaused = false;
var pauseEnd = 0;
function typeWriterEffect() {
  var greetingElement = document.getElementById('typing');
  if (isPaused && Date.now() > pauseEnd) {
    isPaused = false;
    if (isDeleting) {
      currentGreetingIndex = (currentGreetingIndex + 1) % greeting.length;
      isDeleting = false;
    } else {
      isDeleting = true;
    }
  }
  if (!isPaused && !isDeleting && currentCharacterIndex === greeting[currentGreetingIndex].length) {
    isPaused = true;
    pauseEnd = Date.now() + 800;
    return setTimeout(typeWriterEffect, 50);
  }
  if (!isPaused && isDeleting && currentCharacterIndex === 0) {
    isPaused = true;
    pauseEnd = Date.now() + 200;
    return setTimeout(typeWriterEffect, 50);
  }
  var timeout = isDeleting ? 100 : 100;
  greetingElement.innerText = greeting[currentGreetingIndex].substring(0, currentCharacterIndex);
  currentCharacterIndex = isDeleting ? currentCharacterIndex - 1 : currentCharacterIndex + 1;
  setTimeout(typeWriterEffect, timeout);
}
typeWriterEffect();

// dedemie aktivneho tlacitka

function zmenitAktivneTlacidlo(tlacidlo) {
  // Odstránime aktívnu triedu zo všetkých tlačidiel
  var vsetkyTlacidla = document.querySelectorAll('.nav__link');
  vsetkyTlacidla.forEach(function (t) {
    return t.classList.remove('active-link');
  });

  // Pridáme triedu "aktivne" k zadanému tlačidlu
  tlacidlo.classList.add('active-link');
}

// Získať všetky tlačidlá
var vsetkyTlacidla = document.querySelectorAll('.nav__link');

// Pridáme udalosť kliknutia pre každé tlačidlo
vsetkyTlacidla.forEach(function (tlacidlo) {
  tlacidlo.addEventListener('click', function () {
    zmenitAktivneTlacidlo(tlacidlo);
  });
});