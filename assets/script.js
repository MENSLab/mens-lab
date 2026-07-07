// ---- MENS sequential reveal (only meaningful on the home page) ----
(function(){
  const words = Array.from(document.querySelectorAll('.mens-expand .word'));
  const seps  = Array.from(document.querySelectorAll('.mens-expand .sep'));
  if (words.length === 0) return; // not the home page — nothing to animate

  let wi = 0;
  function revealNext(){
    if (wi < words.length){
      words[wi].classList.add('show');
      if (seps[wi]) seps[wi].classList.add('show');
      wi++;
      setTimeout(revealNext, 950);
    } else {
      setTimeout(resetMens, 3200);
    }
  }
  function resetMens(){
    words.forEach(w => w.classList.remove('show'));
    seps.forEach(s => s.classList.remove('show'));
    wi = 0; setTimeout(revealNext, 500);
  }
  setTimeout(revealNext, 700);
})();

// ---- Mobile nav toggle (shared on every page) ----
(function(){
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks  = document.querySelector('.nav-links');
  if (!navToggle || !navLinks) return;
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
})();
