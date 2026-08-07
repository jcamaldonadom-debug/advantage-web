/* ADvantage — consentimiento de cookies y carga condicional de Google Analytics.
   Se carga en el <head> de las 11 páginas, antes que nada más.

   Regla del sitio: GA NO se carga hasta que la persona acepta. Sin decisión o
   con rechazo no se descarga gtag.js, no se instala ninguna cookie y no sale un
   solo dato. Es más estricto de lo que exige la Ley 1581 de 2012 en Colombia
   —que obliga a publicar la política, no a poner banner— pero es coherente con
   lo que el sitio le promete al visitante.

   El banner se inyecta por JS en vez de vivir en las 11 páginas: así no hay 11
   copias que mantener sincronizadas. Sin JS no hay analítica, así que tampoco
   hace falta banner. */
(function () {
  'use strict';

  var GA_ID = 'G-459HMES21Q';
  var CLAVE = 'advantage:consentimiento'; // 'aceptado' | 'rechazado'

  // gtag queda definido siempre para que nada explote si algo lo llama antes
  // de que exista decisión; los eventos se quedan en dataLayer sin enviarse.
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;

  function leer() {
    try { return window.localStorage.getItem(CLAVE); }
    catch (e) { return null; } // modo privado o storage bloqueado
  }
  function guardar(valor) {
    try { window.localStorage.setItem(CLAVE, valor); } catch (e) {}
  }

  function cargarGA() {
    if (document.getElementById('gaScript')) return;
    var s = document.createElement('script');
    s.id = 'gaScript';
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    gtag('js', new Date());
    gtag('config', GA_ID);
  }

  // Ruta a la política: el 404 lo sirve Netlify desde cualquier profundidad de
  // URL, así que ahí las rutas van absolutas. En el resto, relativas.
  function rutaPolitica() {
    return document.body.getAttribute('data-rutas') === 'absolutas'
      ? '/privacidad.html' : 'privacidad.html';
  }

  function mostrarBanner() {
    var b = document.createElement('div');
    b.className = 'cookie-banner';
    b.setAttribute('role', 'dialog');
    b.setAttribute('aria-label', 'Consentimiento de cookies');
    b.innerHTML =
      '<p class="cookie-texto">Usamos Google Analytics para saber qué páginas se leen. ' +
      'Instala cookies. Si prefieres que no, el sitio funciona igual. ' +
      '<a href="' + rutaPolitica() + '">Cómo tratamos tus datos</a></p>' +
      '<div class="cookie-acciones">' +
      '<button type="button" class="btn-primary" data-consentir="aceptado">Aceptar</button>' +
      '<button type="button" class="btn-ghost" data-consentir="rechazado">Rechazar</button>' +
      '</div>';

    b.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-consentir]');
      if (!btn) return;
      var decision = btn.getAttribute('data-consentir');
      guardar(decision);
      if (decision === 'aceptado') cargarGA();
      b.remove();
      // La política de privacidad muestra el estado actual y tiene que
      // reflejar el cambio sin obligar a recargar.
      document.dispatchEvent(new CustomEvent('advantage:consentimiento', { detail: decision }));
    });

    document.body.appendChild(b);
    // El foco arranca en el banner para quien navega con teclado
    b.querySelector('button').focus();
  }

  function iniciar() {
    var decision = leer();
    if (decision === 'aceptado') { cargarGA(); return; }
    if (decision === 'rechazado') return;
    mostrarBanner();
  }

  // Permite cambiar de opinión desde la política de privacidad
  window.advantageResetConsentimiento = function () {
    try { window.localStorage.removeItem(CLAVE); } catch (e) {}
    window.location.reload();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }
})();
