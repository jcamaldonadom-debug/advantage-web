# ADvantage — Mensaje Sistema WAT v1
Basado en extracción real de los 9 workflows (no descripciones inventadas). Filtrado por anti-ai-writing. Español neutro, sin voseo.

## Decisión de arquitectura de la página

Los 9 módulos NO se reparten parejo en las 4 categorías del manual (research/creative/acquisition/optimize). La estructura real, confirmada por extracción de Code:

* 1 proceso de entrada (Onboarding) — no es una categoría de servicio, es el setup que antecede a todo.
* 6 módulos repartidos en las 4 categorías aprobadas — Research, Contenido (creative), SEO + Ads (acquisition), CRO + Analítica (optimize).
* 2 capas transversales (Growth, Ventas) — no viven en una sola categoría porque cruzan varias, o porque son de otra naturaleza (habilitación comercial, no marketing).

Esta es la página que muestra esa arquitectura completa. El home solo listaba los 9 nombres — aquí se explica cómo se conectan.

No se prometen tiempos ni SLAs. Ningún workflow documenta una duración propia. Donde aparecen números de días (calendario de 30 días, roadmap de 90 días) son contenido del entregable, no plazos de ejecución — no confundir los dos en el copy.

No se menciona Beraten ni el caso particular del workflow de carruseles. Es una regla específica de un cliente metida en un proceso que se presenta como genérico — mencionarlo en público contradice la promesa de la página. Pendiente de limpieza técnica aparte (ver nota al final).

## Copy por sección

### 1. Hero de la página

**Headline:**
> 9 módulos documentados. No un menú de servicios — es una arquitectura.

**Subhead:**
> Cada módulo tiene un workflow real: qué hace, qué entrega, y qué necesita antes de poder correr. Esto es lo que hay detrás de "cero cajas negras."

### 2. El punto de partida (Onboarding)

**Headline:**
> Nada empieza sin esto.

**Body:**
> Onboarding no es un módulo de marketing — es el proceso que crea la estructura sobre la que corre todo lo demás. Arma la carpeta de Drive del cliente (10 subcarpetas), analiza su sitio web actual, y genera el primer brief.
>
> Entrega: carpeta de Drive completa + documento de Brief y Estrategia inicial (9 secciones) + registro en el tracker maestro.

### 3. Los 4 pilares

**Headline:**
> Sobre esa base, cuatro frentes.

**01 · Research — Estrategia**
ICP, competidores, posicionamiento. La base que todo lo demás necesita. Sin esto, nada más corre: ningún workflow de contenido, SEO o pauta se ejecuta sin un ICP validado primero. Aquí se mapean competidores, se corre el framework Jobs-to-be-Done, se valida el perfil de cliente con datos reales, y se dimensiona el mercado. Entrega: documento de Research de Mercado e ICP + matriz de competidores + perfil de ICP reutilizable por el resto de los módulos.

**02 · Creative — Contenido + Video**
Social, carruseles, reels, film. Narrativa con sistema detrás. Define pilares de contenido y calendario editorial, y produce las piezas — blog, social, email, copy de anuncios, lead magnets — siempre después de tener ICP, nunca antes. Entrega: documento de estrategia (pilares + calendario) + piezas en Docs + calendario social en Sheets + carruseles en PNG.

**03 · Acquisition — SEO + Ads**
Tráfico medible y escalable. Meta, Google, orgánico. SEO: crawl técnico completo, Core Web Vitals, investigación de keywords, optimización para búsqueda por IA (SGE, Perplexity, ChatGPT), schema markup. Ads: estructura de campañas en Google, Meta y LinkedIn, audiencias, presupuesto, copy de anuncios. Entrega: auditoría SEO con plan priorizado + schema markup listo para implementar + brief de campañas por plataforma + copy de anuncios.

**04 · Optimize — CRO + Analytics**
Datos que deciden. Dashboards, A/B, iteración continua. CRO: auditoría de fricción página por página (home, landing, pricing, signup, onboarding), experimentos A/B priorizados por hipótesis. Analytics: tracking configurado (GA4, Search Console, píxeles), dashboard en vivo, reporte ejecutivo mensual. Entrega: auditoría CRO con plan de pruebas + dashboard + reporte mensual.

### 4. Lo que corre a través de todo (Growth y Ventas)

**Headline:**
> Dos módulos que no caben en una sola tarjeta — a propósito.

**Body:**
> Growth no vive en una sola categoría porque no es de una sola cosa: un lanzamiento toca contenido, un programa de referidos toca adquisición, la retención toca optimización. Cuando aplica, produce una estrategia de crecimiento completa — diagnóstico, plan de lanzamiento si aplica, estructura de pricing, referidos, retención, y roadmap.
>
> Ventas tampoco es marketing — es habilitación comercial. Pitch decks, propuestas, scripts de manejo de objeciones. A veces para que el cliente le venda a sus propios prospectos. A veces para que ADvantage le venda sus servicios al cliente. Mismo módulo, dos direcciones.
>
> Entregan: documento de Estrategia de Crecimiento (Growth) · pitch deck, one-pager, propuesta y script de ventas (Ventas), según lo que el diagnóstico determine que hace falta.

### 5. Cierre

**Headline:**
> Agenda tu diagnóstico.

(mismo CTA del home — WhatsApp directo, mismo link)

## Nota de layout para Code

* Esta página es más densa que el home — considerar navegación interna (anchor links o un índice lateral tipo tabla de contenidos) para que no se sienta como un muro de texto en mobile.
* La sección de los 4 pilares reutiliza el componente de "Card de servicio" ya definido en Brand Tokens — mismo hover lift-sutil, mismo formato de eyebrow en JetBrains Mono. La card 01 (Research) lleva una línea extra marcando que es prerequisito de las otras tres — diferénciala visualmente sin salirte del sistema de cards (ej. un borde o badge, no una card distinta).
* Considerar un diagrama visual simple para el flujo completo: Onboarding → Research como puerta dentro de los 4 pilares → los otros 3 pilares → Growth/Ventas como capas transversales. Esto es exactamente el tipo de visual "que se note que sabemos usar tecnología" que se pidió para el sitio — un mapa del sistema, no una animación decorativa. Usar ScrollReveal del manual, no algo nuevo.
* Motion del resto de la página: mismas reglas de Brand Tokens (fade+rise en headlines, scrollreveal por sección).

## Pendiente — no es de copy, es de sistema

Esto no es parte del copy de la página. Es una tarea aparte para correr en Code cuando haya espacio — no bloquea publicar esta página, porque Beraten no se menciona en ningún lado del texto de arriba.

```
El workflow carousel_creation.md tiene una regla hardcodeada específica para
Beraten (formato obligatorio los lunes: recap de noticias de turismo) dentro
de lo que se supone es un proceso genérico para cualquier cliente.

Sácala de ahí: mueve esa regla a la configuración específica de Beraten
(tools/brands/beraten.json o donde vivan las reglas por cliente) y deja
carousel_creation.md sin lógica de ningún cliente particular adentro —
tiene que poder correr igual para cualquier cliente nuevo sin arrastrar
reglas de otro.

Confírmame qué encontraste exactamente y cómo quedó el workflow después
del cambio.
```
