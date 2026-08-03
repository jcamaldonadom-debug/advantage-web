# ADvantage — Mensaje Nosotros v1
Reutiliza contenido ya validado (bios de Juan Camilo y María Paula, explicación de facilitadores, manifiesto). Filtrado por anti-ai-writing. Español neutro, sin voseo.

---

## Decisión de arquitectura

Home ya tiene una versión corta de "quiénes trabajan contigo" (trust-builder dentro del flujo de venta). Esta página es la versión completa — más espacio para el equipo, los datos de la empresa, y el origen. No repetir la bio de Juan Camilo palabra por palabra: mismo contenido base, más desarrollado.

---

## Copy por sección

### 1. Intro de la página

**Headline:**
> Dos personas dirigen esto, directo — sin intermediarios.

**Body:**
> ADvantage nació en Bogotá en 2026, para PYMEs establecidas que están cansadas de operar el marketing por corazonada.

---

### 2. Origen

**Body (primera persona):**
> A finales de 2025, antes de terminar la universidad, tenía clara la alternativa que se venía: sueldo fijo, oficina de 8 a 5, resolviendo los problemas de negocio de otra persona y vendiendo mi tiempo por menos de lo que vale. No quería eso.
>
> Crecí viendo a mis papás no dejar que el mundo les apagara los sueños — equivocarse, acertar, y sobre todo, disfrutarlo. Esa fue la base. Lo primero que intenté fue ayudar a negocios que hacían bien su trabajo pero no tenían suficientes clientes — ser la persona de confianza para vender lo que fuera, cuando fuera, donde fuera. No funciona así. Hay que especializarse.
>
> Lo que sí tengo es un don para armar equipos que funcionan bien juntos. Por eso ADvantage no es una agencia de marketing en el sentido puro — aunque ahí está mi base técnica — es una agencia de relacionamiento estratégico. No hago todo solo, ni pretendo hacerlo. Conecto lo que cada negocio necesita con quien mejor lo puede ejecutar, y el sistema WAT es lo que hace que esa conexión no dependa de mi memoria o de mi criterio del día.
>
> Ese instinto se confirmó en julio de 2026: una conversación con María Paula Bacca que se alargó mucho más de lo planeado terminó en la decisión de que fuera co-fundadora. No fue un proceso de selección — fue exactamente lo que describo arriba, encontrar a alguien con quien el trabajo funciona.

---

### 3. Quiénes dirigen esto — El sistema de equipo

**Body — Juan Camilo (bullets, no párrafo — corrección por auditoría UX):**
> Antes de ADvantage:
- Estrategia y gobierno de marca basado en datos
- Contenido de marca en los canales corporativos de Samsung Electronics Colombia — Instagram, TikTok, LinkedIn, X y Samsung Members — bajo lineamientos globales
- Procesos de atención al cliente bajo cumplimiento GDPR, analizando métricas de satisfacción para clientes internacionales

**Body — María Paula (bullets):**
> Antes de ADvantage:
- Producción creativa y coordinación de activaciones de marca a nivel nacional
- Campañas para Bavaria — Michelob, Pony Malta, Redd's, Cola & Pola — apoyándose en herramientas de IA para producción de contenido
- En La Fábrica de Batidos: producción de contenido, tendencias de marca, y montaje de la experiencia de marca en la apertura de dos locales

**Body — cierre conjunto:**
> Los dos estudiamos Marketing y Negocios Digitales en la Universidad del Rosario. No vendemos años de experiencia — vendemos que el sistema no depende de que uno de los dos tenga un buen día. Trabajamos en paralelo, no divididos por función: los dos hacemos estrategia, los dos hacemos contenido. Juan Camilo trae gobierno de canales corporativos y rigor analítico de servicio al cliente; María Paula trae producción creativa de contenido con IA. Se suma, no se reparte.

> El equipo se arma después del diagnóstico, no antes. Nadie promete "nuestro mejor editor" en la primera llamada, porque en la primera llamada todavía no se sabe si el proyecto necesita un editor o necesita otra cosa.

**Fotos/avatares:** las dos reales y confirmadas en producción — Juan Camilo (`Diseño_sin_título.png`) y María Paula (foto propia, ya cargada). Ya no hay pendiente de fallback.

---

**DIAGRAMA — spec final aprobado (reemplaza el de tres columnas)**

Concepto: no es "quién trae qué experiencia" (eso ya lo cuentan las bios de arriba) — es la estructura de cómo se organiza el equipo por cliente. Tres niveles verticales:

```
        ┌──────────────────────────┐
        │      TU NEGOCIO          │   borde punteado · "quien contrata"
        └──────────────────────────┘
                    ↕                  flecha doble — conversación directa
   ┌────────────────────────────────┐
   │  [JC] Juan Camilo               │  banda Ink + borde Ember
   │  [MB] María Paula                │  retratos reales · "quienes coordinan"
   └────────────────────────────────┘
                    ↓                  flecha simple — asignación
   - - - - - - - - - - - - - - - - -   frontera punteada: "según diagnóstico"
   [filmmaker] [community] [diseño] [+]   opacidad 60% · "quienes ejecutan"
```

**La regla que hace funcionar el diagrama:** la línea del cliente toca *solo* la banda de estrategas. No hay línea cliente→facilitadores. Eso comunica "somos el punto de comunicación" por estructura, sin decirlo con texto. La flecha doble (↕) arriba marca conversación continua con el cliente; la simple (↓) abajo marca asignación hacia los facilitadores — dos relaciones distintas, distinguibles sin leer nada.

**Especificaciones:**
- Niveles apilados verticalmente (no nodo central con ramas) — se lee mejor como flujo, y es más resistente en mobile que el Venn y las 3 columnas anteriores (ambos fallaron por reflow horizontal).
- Nodo "Tu negocio": borde punteado `--dim`, transparente, en segunda persona (consistente con "tu diagnóstico" del resto del sitio). Va incluido, no se omite — sin ese nodo no se ve la relación que el diagrama existe para mostrar.
- Banda de estrategas: fondo `--ink`, borde `--ember`, radius 12px, padding `--sp-lg`. Retratos reales (formato `.mapa-retrato`, 88px, ya existe) — personas, no cajas. Esto es lo que evita que se sienta como organigrama corporativo frío.
- Etiquetas por función, nunca por rango: "quien contrata" / "quienes coordinan" / "quienes ejecutan, según proyecto" — jerarquía de flujo, no de poder.
- Facilitadores: reutilizan el patrón `.nodo-tag` existente (borde punteado, opacidad 60%). ~7 nodos totales en el diagrama completo — más legible que los 13 de la versión anterior.
- Interacción: mismo patrón de click/hover con tarjeta de contexto que ya funciona (accesible, sin layout shift). Se mantiene, no se reinventa.
- Conectores: 1px `--border`, flechas en caracteres mono color `--ember` — sin geometría SVG compleja, mismo espíritu de "no pelear con el layout" que ya costó dos rondas.

**Lo que NO va en este diagrama:** el fondo de cada fundador (Samsung, GDPR, Bavaria, IA para contenido, etc.) — eso vive en las bios de texto de arriba, no se repite acá como tags. Este diagrama es de estructura, no de currículum.

---

### 4. Datos de la empresa

**Badges/pills** (reutilizando el componente ya definido en Brand Tokens):
> Bogotá, Colombia · est. 2026 · 9 módulos · wat_system: activo

---

### 5. Cómo pensamos

**Body:**
> Los principios completos de por qué existe ADvantage están en el manifiesto. Acá los tres que más se sienten en el día a día trabajando con nosotros:

1. El sistema es el producto. No lo que hacemos, sino cómo lo hacemos.
2. Sin datos no hay opinión. Pero los datos sin narrativa son ruido.
3. La transparencia no es un valor — es el modelo. El cliente puede ver cada workflow.

**Link:** Lee el manifiesto completo →

---

### 6. Cierre

**Headline:**
> Agenda tu diagnóstico.

*(mismo CTA — WhatsApp directo, mismo link)*

---

## Nota de layout para Code

- El diagrama de la sección 3 es ahora el de tres niveles verticales (cliente → estrategas → facilitadores) — no el de columnas ni el Venn, ambos descartados. Ver spec detallado arriba, no es opcional.
- Badge de iniciales de María Paula: mismo tratamiento visual que el logo mark (fondo Void, iniciales en Ember o Cream), para que no se sienta como un placeholder roto.
- Sección 5 no repite el manifiesto completo, solo 3 principios + link — evita que la página se sienta redundante con /manifiesto.
- Motion del resto de la página: mismas reglas de Brand Tokens.
- Si otras secciones del sitio también tienen espacios en blanco raros, revisar que estén usando los tokens de spacing exactos del manual y no paddings por defecto del framework — mismo problema de raíz que causó las dos rondas anteriores.
