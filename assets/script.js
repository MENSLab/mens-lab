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

// ---- Active nav highlight (single-page scroll spy) ----
(function(){
  const links = Array.from(document.querySelectorAll('.nav-links a'));
  if (!links.length) return;
  const map = {};
  links.forEach(a => {
    const href = a.getAttribute('href');
    if (href && href.startsWith('#')) map[href.slice(1)] = a;
  });
  const sections = Object.keys(map)
    .map(id => document.getElementById(id))
    .filter(Boolean);
  if (!sections.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting){
        links.forEach(l => l.classList.remove('active'));
        const link = map[e.target.id];
        if (link) link.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
  sections.forEach(s => obs.observe(s));
})();
