/* ADvantage — comportamiento compartido del sitio.
   Motion: Manual de Marca v1.0 sección 08, snippets literales de
   docs/web-spec/ADvantage_BRAND_TOKENS.md. Los bloques específicos de página
   (hero, CountUp, glow) se activan solo si el elemento existe. */
(function () {
  'use strict';

  // Nav móvil
  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobileNav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      var open = mobileNav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(open));
    });
    mobileNav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        mobileNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced || typeof gsap === 'undefined') return; // contenido queda visible sin animar

  gsap.registerPlugin(ScrollTrigger);

  // Entrada al cargar — Fade + Rise escalonado (el titular se asienta, no aparece)
  if (document.querySelector('[data-anim="hero"]')) {
    gsap.from('[data-anim="hero"]', {
      y: 24, opacity: 0, duration: 0.7, ease: 'power2.out',
      stagger: 0.12, delay: 0.1
    });
  }

  // Glow parallax (máx 40px, sigue cursor y scroll) — solo en páginas con hero
  var glow = document.getElementById('heroGlow');
  var clamp40 = gsap.utils.clamp(-40, 40);
  if (glow) {
    window.addEventListener('mousemove', function (e) {
      var mx = e.clientX - window.innerWidth / 2;
      var my = e.clientY - window.innerHeight / 2;
      gsap.to(glow, {
        x: clamp40(mx * 0.03), y: clamp40(my * 0.03),
        duration: 1.2, ease: 'power1.out'
      });
    });
    ScrollTrigger.create({
      trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1.2,
      onUpdate: function (self) {
        gsap.to(glow, { y: clamp40(self.progress * 40), duration: 0.3, ease: 'power1.out', overwrite: 'auto' });
      }
    });
  }

  // ScrollReveal — párrafos uno a la vez y secciones (trigger 80% viewport)
  gsap.utils.toArray('[data-anim="parrafo"], [data-anim="reveal"], [data-anim="rise"]').forEach(function (el) {
    var anim = gsap.from(el, { y: 24, opacity: 0, duration: 0.7, ease: 'power2.out', paused: true });
    ScrollTrigger.create({ trigger: el, start: 'top 80%', onEnter: function () { anim.play(); } });
  });

  // Grid de módulos — Fade + Rise con delay escalonado entre elementos del grupo
  var grid = document.querySelector('.modulos-grid');
  if (grid) {
    var cards = gsap.utils.toArray('.modulo-card');
    var gridAnim = gsap.from(cards, {
      y: 24, opacity: 0, duration: 0.7, ease: 'power2.out', stagger: 0.08, paused: true
    });
    ScrollTrigger.create({ trigger: grid, start: 'top 80%', onEnter: function () { gridAnim.play(); } });
  }

  // Stat "9 módulos" — CountUp (1.8s, calculado, no instantáneo)
  var num = document.getElementById('statModulos');
  if (num) {
    var countAnim = gsap.from(num, {
      textContent: 0, duration: 1.8, snap: { textContent: 1 }, ease: 'power1.inOut', paused: true
    });
    ScrollTrigger.create({ trigger: num, start: 'top 80%', onEnter: function () { countAnim.play(); } });
  }
})();
