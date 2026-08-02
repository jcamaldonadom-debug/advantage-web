# ADvantage — Mensaje Web (Home) v1
Filtrado por anti-ai-writing. Listo para Cowork/Claude Code.

*(Nota: la pasada de storytelling se descartó — esa skill es para contenido narrativo, no para copy de página web. Ver feedback de Juank sobre la sección Problema.)*

---

## Decisiones que fija este documento

- **Pricing:** no se publican tarifas fijas. Se publica la lógica de por qué varían (tamaño/necesidad del cliente) como postura de marca, no como evasiva.
- **Prueba social:** cero casos cerrados hoy (Arturo declinó, Beraten es capítulo cerrado, Teresa es favor no cliente). Estrategia interina: transparencia de proceso en vivo, no casos inflados.
- **Novamaker: NO SE USA POR AHORA.** Decisión de Juank: esperar a que el proyecto esté más avanzado antes de mencionarlo como prueba. Cuando se retome, recordar que la relación real es equity partnership (Juank cobra por facturación de Novamaker, no fee de servicio) — si se usa, va etiquetado "growth partnership" / "sistema aplicado en Novamaker", nunca "cliente".
- **CTA:** "Agenda tu diagnóstico" apunta a WhatsApp directo (Calendly no funcionó — se descartó, no se vuelve a evaluar salvo que Juank lo pida). El link lleva un mensaje pre-cargado que reemplaza las preguntas de intake que se iban a hacer en el booking: negocio, tamaño de equipo, principal reto. Link final: `https://wa.me/573155971878?text=Hola%2C%20quiero%20agendar%20mi%20diagn%C3%B3stico%20con%20ADvantage.%0A%0ANegocio%3A%20%0ATama%C3%B1o%20del%20equipo%3A%20%0APrincipal%20reto%3A%20`
- **Registro y tono:** español neutro, sin voseo ni regionalismos marcados — decisión de Juank para que el sitio se entienda sin fricción en cualquier país hispanohablante. Aplica a esta página y a todas las siguientes (sistema-wat, servicios, nosotros, manifiesto, contacto).
- **Lente de la historia (Story Lens):** el villano no es "las agencias son malas" (obvio, lo dice todo el mundo). El villano es la opacidad — te venden confianza en vez de mostrarte el sistema. Esa es la línea que corre por todas las secciones.

---

## Posicionamiento maestro
> Sistema documentado, no intuición disfrazada de estrategia — para PYMEs de Bogotá que ya perdieron plata en marketing sin poder auditarlo.

---

## Copy por sección

### 1. Hero
**Display (Fraunces itálica):** Sistema y alma.
*(frase ya aprobada en el manual, reutilizada — no inventar una nueva sin razón)*

**H1 (Inter bold):**
> Marketing con sistema documentado, no con intuición disfrazada de estrategia.

**Subhead (Inter body):**
> Para PYMEs de Bogotá que ya perdieron plata en agencias que no podían explicar en qué se la gastaron.

**CTA primario:** Agenda tu diagnóstico
**CTA secundario:** Lee el manifiesto →

**Actualización — más presencia visual (feedback: "el hero no capta la atención de primerazo"):**
1. **Log de sistema en JetBrains Mono**, debajo del badge "wat_system · activo", estilo consola: `> 9 módulos · cargados` / `> wat_system: activo`. Funcional, no decorativo — demuestra el sistema en vez de solo nombrarlo.
2. **Contador "9 módulos" (CountUp) sube al hero** — hoy vive más abajo en la página; en el hero da un hook cuantificado inmediato.
3. **Glow más intenso** — está al 16% de opacidad, casi invisible contra Void `#09090F`. Subir intensidad o agregar una segunda capa, sin volverse decorativo.
4. **Punto Ember del logo, parpadeo sutil (CSS, todas las páginas, no solo el hero)** — el manual ya define el punto como "indica el sistema activo, como un cursor... running". Hacerlo parpadear es coherente con su propio significado, no una animación nueva inventada.

---

### 2. Problema (narrativo — prosa web, no listado de dolores)

> Llevas años siendo el motor del negocio: las decisiones pasan por ti, los clientes te buscan a ti, y el crecimiento se detiene cada vez que no estás. Contratar una agencia debería resolver eso.
>
> Pero la mayoría te entrega reportes que no explican nada, resultados que no puedes rastrear hasta una decisión concreta, y una factura mensual que pagas por fe — así que terminas haciéndolo todo de nuevo tú mismo, con menos presupuesto y menos confianza en la próxima agencia que te llame.

*Nota: esto reemplaza la lista de "3 dolores" que había propuesto antes — una lista de tres es el tell #1 de copy genérico. La secuencia real (dependencia → agencia opaca → vuelta a cero) sigue siendo la misma que documentaste como el orden en que tu ICP lo procesa mentalmente, pero contada en prosa continua en vez de beats cortos tipo guión — así se lee como copy de página, no como narración en voz alta.*

---

### 3. Sistema (WAT)

**Headline:**
> El sistema, no el talento del día.

**Body:**
> WAT son 9 módulos documentados: onboarding, research, contenido, SEO, pauta, CRO, growth, analítica y ventas. Cada uno corre igual la primera semana que en el mes doce — no depende de que alguien tenga un buen día.

**Stat destacado:** 9 módulos *(animado, ver mapeo de motion)*

**Grid de 9 módulos — con línea de beneficio (corrección por auditoría UX: jerga sin traducir genera carga cognitiva). Nombres de módulo se mantienen sin cambio — ya están en el hero y en Sistema WAT, renombrarlos aquí rompería la consistencia del sitio:**

| Módulo | Línea de beneficio |
|---|---|
| W01 · Onboarding | Entendemos tu negocio antes de proponer nada. Cero improvisación. |
| W02 · Research | Mapeamos competencia y clientes. Decisiones basadas en datos, no en corazonadas. |
| W03 · Contenido | Mensajes que venden, sin frases corporativas genéricas. |
| W04 · SEO | Que te encuentren en Google justo cuando tu cliente ya está listo para comprar. |
| W05 · Pauta | Anuncios estructurados para compradores reales, no para likes. |
| W06 · CRO | Arreglamos tu web para que las visitas no se vayan sin comprar. |
| W07 · Growth | Lanzamiento, precios, referidos, retención — crecimiento con plan, no solo con más pauta. |
| W08 · Analítica | Rastreamos qué acción trajo a qué cliente — no solo cuántas visitas tuviste. |
| W09 · Ventas | Pitch decks, propuestas y scripts de ventas — listos para que tu equipo los use, no plantillas genéricas. |

*Nota sobre las correcciones a Growth y Ventas: la auditoría externa (Gemini, sobre grupo focal) proponía "identificamos qué canal deja plata y le pisamos el acelerador" para Growth y "conectamos el marketing con tu equipo comercial" para Ventas — ninguna de las dos coincide con lo que se extrajo como hecho real de los workflows (ver `ADvantage_mensaje_sistema_wat_v1.md`). Growth cubre lanzamiento/pricing/referidos/retención, no optimización de canales pagos — eso es Pauta. Ventas produce materiales de habilitación comercial, no es una función de enlace entre departamentos. Se corrigieron para que el beneficio no prometa algo que el módulo no hace.*

---

### 4. Quiénes trabajan contigo

**Headline:**
> No hay account manager júnior entre tú y quien decide. Somos dos, directo.

**Fotos:** las dos reales — Juan Camilo (`Diseño_sin_título.png`) y María Paula (ya confirmada, ver Nosotros). Ya no hay pendiente de fallback de iniciales, ambas fotos están cargando en producción.

**Cards — nombre y rol:**
> Juan Camilo Maldonado · Co-founder
> María Paula Bacca · Co-founder

**Body — bio (bullets, no párrafo corrido — corrección por auditoría UX: carga cognitiva alta en la versión anterior):**
> Dirigimos cada cuenta juntos: la estrategia, el contenido y la relación con el cliente pasan por nosotros, no por un intermediario.

**Juan Camilo** — canales corporativos de Samsung Electronics Colombia · atención al cliente bajo cumplimiento GDPR

**María Paula** — campañas para Bavaria (Michelob, Pony Malta, Redd's, Cola & Pola) · producción de contenido con herramientas de IA

> Texturas distintas, mismo trabajo: se suma, no se reparte.


**Body — cómo se arma el equipo:**
> El resto del equipo — filmmaker, community manager, diseñador — se asigna después del diagnóstico, no antes. Nadie promete "nuestro mejor editor" en la primera llamada, porque en la primera llamada todavía no se sabe si el proyecto necesita un editor o necesita otra cosa. Primero se entiende qué requiere el negocio. Después se arma el equipo que ejecuta.

*(Nota: la versión completa de esta sección, con el tratamiento visual tipo diagrama, va en la página Nosotros — acá en el home es la versión corta.)*

*Nota sobre lo que se dejó fuera a propósito: no se menciona que la experiencia en Samsung fue una pasantía ni que el rol en 5CA era de servicio al cliente. No es ocultar información — es describir por función (qué se hizo) en vez de por título (qué cargo tenía), porque el título resta más de lo que suma y la función es 100% real y verificable. Si un prospecto pregunta directo en la llamada, la respuesta honesta ya está lista y no contradice nada de lo escrito aquí.*

---

### 5. Objeción de precio

**Headline:**
> El precio, sin caja negra — aunque no sea un número fijo.

**Body:**
> No publicamos una tarifa única. Cobrarle lo mismo a una PYME de 5 personas que a una de 50 sería mentirte antes de empezar. Lo que sí te mostramos es cómo se arma el número: alcance, módulos activos, tamaño del equipo. Sales del diagnóstico con una cifra real — no con un rango genérico, y no con "contáctanos para más información."

---

### 6. Prueba (interina — honesta, sin inflar)

**Headline:**
> Esto se está construyendo en público.

**Body:**
> No tenemos años de casos para mostrarte todavía, y no te vamos a inventar uno. El primer sistema que audita ADvantage es el nuestro — así se construye esta misma página, con el mismo WAT que te ofrecemos.

---

### 7. Cierre

**Headline:**
> Agenda tu diagnóstico.

*(un solo CTA, sin opción secundaria compitiendo por atención — el manifiesto y el sistema ya hicieron su trabajo antes de llegar acá)*

**Destino del CTA:** WhatsApp directo, con mensaje pre-cargado (reemplaza las preguntas de intake que iban en Calendly — ver decisión arriba y link final ahí).

---

## Mapeo de motion por sección
*(referencia directa a Manual de Marca v1.0, sección 08 — no se inventan animaciones nuevas, se aplican las ya definidas)*

| Sección | Animación | Por qué |
|---|---|---|
| Hero — headline | Fade + Rise (24px, power2.out) | El titular se asienta, no aparece — mismo principio del punto Ember del logo ("indica el sistema activo, como un cursor... running"). Lo primero que ve el usuario ya está demostrando la promesa del texto |
| Hero — fondo | Glow parallax (máx 40px, sigue cursor/scroll) | Profundidad sin distraer |
| Problema | ScrollReveal, un párrafo a la vez, trigger 80% viewport | Que el lector procese cada consecuencia antes de que aparezca la siguiente |
| "9 módulos" | CountUp (1.8s, power1.inOut) | Refuerza credibilidad del número real |
| Módulos WAT (cards) | Hover lift-sutil (solo background + borde ember, sin translateY) | Regla del manual: lift reservado para CTAs, no para grid |
| Quiénes trabajan contigo | ScrollReveal simple + hover lift-sutil en card de red de facilitadores | Misma regla de cards que los módulos WAT — consistencia visual entre "sistema" y "equipo" |
| Objeción de precio | ScrollReveal simple | Sección de texto, sin necesidad de efecto extra |
| Prueba | Fade + Rise | Consistencia, sin sobre-animar una sección ya honesta de por sí |
| CTA cierre | Bloque Ember (fondo sólido) | Combinación aprobada del manual para "máximo impacto" |

---

## Pendiente para siguientes iteraciones
- Revisar inclusión de Novamaker como prueba más adelante, cuando el proyecto esté más avanzado (decisión actual: no usarlo todavía).
- Replicar esta misma pasada (solo anti-ai-writing, español neutro sin voseo) en: sistema-wat, servicios, nosotros, manifiesto (ya existe, auditar si sigue vigente), contacto.
- Página de casos: no construir hasta tener al menos un cierre real que mostrar.
