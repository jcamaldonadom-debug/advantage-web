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

  // Dependencia real entre módulos WAT: al pasar el cursor o dar foco a una
  // card que habilita otras, esas se resaltan. Va antes del early-return de
  // motion porque es información, no animación — solo cambia color, sin
  // movimiento, así que funciona igual con prefers-reduced-motion.
  var grid = document.getElementById('modulosGrid');
  if (grid) {
    var cards = grid.querySelectorAll('.modulo-card[data-habilita]');
    Array.prototype.forEach.call(cards, function (card) {
      var ids = card.getAttribute('data-habilita').split(' ');
      var dependientes = ids.map(function (id) {
        return grid.querySelector('.modulo-card[data-modulo="' + id + '"]');
      }).filter(Boolean);

      var marcar = function (on) {
        dependientes.forEach(function (d) { d.classList.toggle('es-dependiente', on); });
      };
      card.addEventListener('mouseenter', function () { marcar(true); });
      card.addEventListener('mouseleave', function () { marcar(false); });
      // Foco de teclado: la card necesita ser alcanzable para que esto sirva
      card.setAttribute('tabindex', '0');
      card.addEventListener('focus', function () { marcar(true); });
      card.addEventListener('blur', function () { marcar(false); });
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

  // El parallax de #heroGlow se retiró con el hero de constelación: ese glow ya
  // no existe y el hero nuevo trae su propio parallax sobre #watGlow, inline en
  // index.html. El bloque de [data-anim="hero"] de arriba NO se toca — lo usan
  // las otras 9 páginas para su entrada.

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

  // Stat "9 módulos" — CountUp (1.8s, calculado, no instantáneo).
  // Corre en cada [data-countup]: el del log del hero y el stat grande de la
  // sección Sistema. Para el del hero, que ya está en viewport al cargar, el
  // trigger dispara de inmediato — no hace falta lógica aparte.
  gsap.utils.toArray('[data-countup]').forEach(function (num) {
    var countAnim = gsap.from(num, {
      textContent: 0, duration: 1.8, snap: { textContent: 1 }, ease: 'power1.inOut', paused: true
    });
    ScrollTrigger.create({ trigger: num, start: 'top 80%', onEnter: function () { countAnim.play(); } });
  });
})();
