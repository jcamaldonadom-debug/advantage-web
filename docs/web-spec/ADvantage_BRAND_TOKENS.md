# ADvantage — Brand Tokens
Extraído de Manual de Marca v1.0 (Dirección 04-A Ember Oscuro, aprobado 2026-04-18). Fuente de verdad técnica para el build — nada aquí está inventado, todo viene literal del manual.

---

## Colores

| Token | Hex | Uso |
|---|---|---|
| Void | `#09090F` | Fondo primario · bg principal |
| Ink | `#111118` | Fondo secundario · cards |
| Ember Shadow | `#18160F` | Hover state en fondos ember |
| Ember | `#E8541E` | Acento primario · CTAs · énfasis |
| Ember Hover | `#FF6B35` | Hover y estados activos |
| Cream | `#F5EEE3` | Contraste editorial · texto claro |
| Muted | `#A09F98` | Texto secundario · descripciones |
| Dim | `#5E5B50` | Labels mono · metadata · borders |
| Border | `#22201A` | Divisores · outlines |

Combinaciones aprobadas de fondo: **Void** (modo principal, hero/páginas principales), **Cream** (contraste editorial, bandas/citas), **Ember** (solo bloques CTA de máximo impacto).

---

## Tipografía

| Fuente | Rol | Uso |
|---|---|---|
| Inter | Sistema | Headlines principales, UI, cuerpo de texto, navegación. Pesos 400/500/600/700 |
| Fraunces itálica | Alma | Titulares de acento, citas, headlines creativos. **Siempre itálica** cuando convive con Inter |
| JetBrains Mono | Código | Labels, metadata, estados del sistema, counters, códigos de servicio. **Nunca** como headline principal |

**Escala:**
- DISPLAY — Fraunces italic 500 · 96px · -2.5% tracking
- H1 — Inter bold 700 · 96px · -4% tracking
- H2 — Fraunces 500 · 36px · -2% tracking
- H3 — Inter 600 · 22px · -1.5% tracking
- BODY — Inter 400 · 16–19px · 170% line-height
- LABEL — JetBrains Mono 10–11px · 140% line-height

---

## Espaciado

Base 8px, todos los márgenes/paddings son múltiplos de 8.

| Token | Valor | Uso |
|---|---|---|
| xs | 4px | separación de íconos inline |
| sm | 8px | gap interno de componentes |
| md | 16px | padding de cards, gap de filas |
| lg | 24px | padding de secciones compactas |
| xl | 32px | gap entre bloques |
| 2xl | 48px | CTA row, separación hero |
| 3xl | 80px | padding de secciones principales |
| 4xl | 120px | separación entre secciones de página |

Padding horizontal de página: **56px desktop / 24px mobile**. Max-width del contenido: **1280px**.

---

## Logo

- Wordmark `ADVANTAGE·` — el punto **siempre es Ember `#E8541E`**, nunca cambia de color, tamaño ni posición. No se separa del wordmark, no es puntuación suelta.
- Wordmark solo sobre fondos: Void `#09090F`, Cream `#F5EEE3`, o Ember `#E8541E`. No usar sobre otros fondos.
- Logo mark cuadrado (la A en negative space) — uso compacto: avatar, favicon, app icon, sello. **Es el que va en la foto de perfil de Instagram y en la card de equipo del sitio.**

---

## Motion (GSAP — snippets literales del manual)

**Entrada de elemento — Fade + Rise:**
```js
gsap.from(el, { y: 24, opacity: 0, duration: 0.7, ease: "power2.out" })
```
Elementos entran desde abajo con fade-in. Headlines, cards, secciones al hacer scroll. Delay escalonado entre elementos del mismo grupo.

**Counter — CountUp:**
```js
gsap.from(num, { textContent: 0, duration: 1.8, snap: { textContent: 1 }, ease: "power1.inOut" })
```
Números animados al entrar en viewport. Duración larga para que se sienta calculado, no instantáneo.

**Hover de card — Lift sutil:**
```css
transition: background 0.2s ease; /* + ember border on hover */
```
Sin `translateY` en cards de grid — solo color. El lift (translateY) se reserva para CTAs y elementos singulares, no para grids.

**ScrollReveal:**
```js
ScrollTrigger.create({ trigger: section, start: "top 80%", onEnter: () => anim.play() })
```
Trigger al 80% del viewport para que el contenido no aparezca antes de que el ojo llegue ahí.

**Glow de fondo — Parallax:**
```js
gsap.to(glow, { x: mouseX * 0.03, y: mouseY * 0.03, duration: 1.2, ease: "power1.out" })
```
Movimiento máximo 40px. Usa `will-change: transform`.

**Reglas de oro:**
- Duration nunca mayor a 900ms para UI. El hero puede llegar a 1.8s.
- Ease preferida: `power2.out` para entradas, `power2.inOut` para transiciones.
- Nunca animar más de 3 propiedades simultáneas en el mismo elemento.
- Respetar `prefers-reduced-motion` — desactivar animaciones si el usuario lo pide.

---

## Voz — referencia rápida para microcopy (botones, errores, estados vacíos)

**Sí decir:** frases cortas, verbos activos ("corremos", "construimos", "medimos"), números concretos, terminología WAT cuando agrega valor, contraste tipo "No esto. Sí esto otro."

**No decir:** "soluciones integrales", "ecosistema", "sinergia", "potenciamos tu marca" sin explicar cómo, exclamaciones vacías, voz pasiva, jerga de agencia en inglés (storytelling/engagement sí en español), más de dos adjetivos seguidos.

**Registro:** español neutro, **sin voseo** ni regionalismos marcados — decisión fijada para todo el sitio, no solo el home.
