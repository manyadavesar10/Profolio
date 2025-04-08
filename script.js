function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }

  window.onscroll = function () {
    document.getElementById("backToTop").style.display = window.scrollY > 200 ? "block" : "none";
  };

  const phrases = ["Web Developer", "Designer", "Coder"];
  let i = 0, j = 0, currentPhrase = [], isDeleting = false;

  function typeEffect() {
    const display = document.getElementById("typed-text");
    if (i < phrases.length) {
      if (!isDeleting && j <= phrases[i].length) {
        currentPhrase = phrases[i].slice(0, j++);
      }
      if (isDeleting && j >= 0) {
        currentPhrase = phrases[i].slice(0, j--);
      }
      display.textContent = currentPhrase;
      if (j === phrases[i].length) isDeleting = true;
      if (j === 0 && isDeleting) {
        isDeleting = false;
        i = (i + 1) % phrases.length;
      }
      setTimeout(typeEffect, isDeleting ? 80 : 150);
    }
  }
  typeEffect();