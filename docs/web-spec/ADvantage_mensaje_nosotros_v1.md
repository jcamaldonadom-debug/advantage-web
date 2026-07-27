# ADvantage — Mensaje Nosotros v1
Reutiliza contenido ya validado (bios de Juan Camilo y María Paula, explicación de facilitadores, manifiesto). Filtrado por anti-ai-writing. Español neutro, sin voseo.

## Decisión de arquitectura

Home ya tiene una versión corta de "quiénes trabajan contigo" (trust-builder dentro del flujo de venta). Esta página es la versión completa — más espacio para el equipo, los datos de la empresa, y el origen. No repetir la bio de Juan Camilo palabra por palabra: mismo contenido base, más desarrollado.

## Copy por sección

### 1. Intro de la página

**Headline:**
> Dos personas dirigen esto, directo — sin intermediarios.

**Body:**
> ADvantage nació en Bogotá en 2026, para PYMEs establecidas que están cansadas de operar el marketing por corazonada.

### 2. Origen

**Body (primera persona):**
> A finales de 2025, antes de terminar la universidad, tenía clara la alternativa que se venía: sueldo fijo, oficina de 8 a 5, resolviendo los problemas de negocio de otra persona y vendiendo mi tiempo por menos de lo que vale. No quería eso.
>
> Crecí viendo a mis papás no dejar que el mundo les apagara los sueños — equivocarse, acertar, y sobre todo, disfrutarlo. Esa fue la base. Lo primero que intenté fue ayudar a negocios que hacían bien su trabajo pero no tenían suficientes clientes — ser la persona de confianza para vender lo que fuera, cuando fuera, donde fuera. No funciona así. Hay que especializarse.
>
> Lo que sí tengo es un don para armar equipos que funcionan bien juntos. Por eso ADvantage no es una agencia de marketing en el sentido puro — aunque ahí está mi base técnica — es una agencia de relacionamiento estratégico. No hago todo solo, ni pretendo hacerlo. Conecto lo que cada negocio necesita con quien mejor lo puede ejecutar, y el sistema WAT es lo que hace que esa conexión no dependa de mi memoria o de mi criterio del día.
>
> Ese instinto se confirmó en julio de 2026: una conversación con María Paula Bacca que se alargó mucho más de lo planeado terminó en la decisión de que fuera co-fundadora. No fue un proceso de selección — fue exactamente lo que describo arriba, encontrar a alguien con quien el trabajo funciona.

### 3. Quiénes dirigen esto — El sistema de equipo

**Body — Juan Camilo (primera persona):**
> Antes de ADvantage gestioné contenido de marca en los canales corporativos de Samsung Electronics Colombia — Instagram, TikTok, LinkedIn, X y Samsung Members — bajo lineamientos globales, y trabajé procesos de atención al cliente bajo cumplimiento GDPR, analizando métricas de satisfacción para clientes internacionales.

**Body — María Paula (primera persona):**
> Hoy hago prácticas de marketing en Bavaria — Michelob, Pony Malta, Redd's, Cola & Pola — coordinando activaciones de marca a nivel nacional y desarrollando contenido y piezas gráficas para campañas, apoyada en herramientas de IA para producción de contenido. Antes fui administradora de punto de venta en La Fábrica de Batidos, donde monté la experiencia de marca en la apertura de dos locales y entrené al personal nuevo.

**Body — cierre conjunto:**
> Los dos estudiamos Marketing y Negocios Digitales en la Universidad del Rosario. No vendemos años de experiencia — vendemos que el sistema no depende de que uno de los dos tenga un buen día. Trabajamos en paralelo, no divididos por función: los dos hacemos estrategia, los dos hacemos contenido. Juan Camilo trae gobierno de canales corporativos y rigor analítico de servicio al cliente; María Paula trae producción real de contenido con IA y experiencia operando puntos de venta. Se suma, no se reparte.
>
> El resto del equipo — filmmaker, community manager, diseñador — se asigna después del diagnóstico, no antes. Nadie promete "nuestro mejor editor" en la primera llamada, porque en la primera llamada todavía no se sabe si el proyecto necesita un editor o necesita otra cosa.

**Fotos/avatares:** Juan Camilo usa el asset real (`Diseño_sin_título.png`). María Paula manda foto real mañana — mientras tanto, badge de iniciales (MB) en el mismo lenguaje visual del logo mark, no la foto del CV ni un ícono genérico. Se reemplaza apenas llegue la foto real.

### DIAGRAMA — spec obligatorio, no sugerencia

*(corrección: la versión anterior lo dejaba "a decisión de Code", eso fue un error mío)*

Se descarta el Venn de círculos superpuestos — es difícil de maquetar bien y probablemente es la causa de los espacios en blanco raros que ya viste. Reemplazo por estructura de tres columnas con nodos y conectores, sin geometría de superposición:

```
[ Juan Camilo ]        [ Compartido ]        [ María Paula ]
     |                       |                       |
  Samsung                Estrategia              Bavaria
  GDPR                    Contenido            IA para contenido
  CSAT/DSAT          Universidad del Rosario   Activaciones de marca
                                                Punto de venta
                              |
                    [ · · · Facilitadores · · · ]   ← nodos en línea punteada,
                    Filmmaker · Community · Diseño     opacidad reducida
                    "se activan según diagnóstico"
```

Reglas concretas:

1. Columna izquierda y derecha: card de persona arriba (foto/badge + nombre), tags/pills debajo conectados por una línea delgada (Border `#22201A`). Incluye el objetivo. Mismo tamaño y peso visual en ambas columnas — nadie va primero jerárquicamente.
2. Columna central ("Compartido"): visualmente distinta — fondo Ink `#111118` en vez de Void, o borde Ember, para que se lea como el punto de encuentro, no como una tercera persona.
3. Fila de Facilitadores, debajo de las tres columnas: nodos con borde punteado y opacidad ~60% — la diferencia visual (sólido vs. punteado) es lo que comunica "comprometido siempre" vs. "se activa condicionalmente", sin necesitar el párrafo de texto que tenía la versión anterior. Dejar igual una micro-caption de una línea debajo por accesibilidad, no confiar solo en el estilo visual.
4. Interacción — obligatoria: click (mobile) o hover (desktop) en cualquier nodo/tag expande una tarjeta pequeña con una línea de contexto real. Ejemplos: nodo "GDPR" → "Procesos de atención al cliente bajo cumplimiento GDPR en 5CA." · nodo "Facilitadores" → "Se asignan después del diagnóstico — nunca comprometidos antes de saber qué necesita el proyecto." Esto es lo que ya habías pedido y no quedó claro la primera vez — ahora es requisito, no opción.
5. Espaciado: usar los tokens de spacing tal cual (gap entre columnas: `xl` 32px · padding de la sección completa: `3xl` 80px), no dejar que el framework decida paddings por defecto — ahí es donde suelen aparecer los espacios en blanco que no cuadran.
6. Mobile: las tres columnas se apilan verticalmente (Juan Camilo → Compartido → María Paula → Facilitadores), no se comprimen horizontalmente.

### 4. Datos de la empresa

**Badges/pills** (reutilizando el componente ya definido en Brand Tokens):
> Bogotá, Colombia · est. 2026 · 9 módulos · wat_system: activo

### 5. Cómo pensamos

**Body:**
> Los principios completos de por qué existe ADvantage están en el manifiesto. Acá los tres que más se sienten en el día a día trabajando con nosotros:

1. El sistema es el producto. No lo que hacemos, sino cómo lo hacemos.
2. Sin datos no hay opinión. Pero los datos sin narrativa son ruido.
3. La transparencia no es un valor — es el modelo. El cliente puede ver cada workflow.

**Link:** Lee el manifiesto completo →

### 6. Cierre

**Headline:**
> Agenda tu diagnóstico.

(mismo CTA — WhatsApp directo, mismo link)

## Nota de layout para Code

* El diagrama de la sección 3 reemplaza por completo el intento anterior de Venn — no lo uses como referencia, es un patrón distinto (columnas + nodos, no círculos superpuestos). Ver spec detallado arriba, no es opcional.
* Badge de iniciales de María Paula: mismo tratamiento visual que el logo mark (fondo Void, iniciales en Ember o Cream), para que no se sienta como un placeholder roto.
* Sección 5 no repite el manifiesto completo, solo 3 principios + link — evita que la página se sienta redundante con /manifiesto.
* Motion del resto de la página: mismas reglas de Brand Tokens.
* Si otras secciones del sitio también tienen espacios en blanco raros, revisar que estén usando los tokens de spacing exactos del manual y no paddings por defecto del framework — es el mismo problema de raíz que causó el del diagrama.

---

## Notas de implementación (Code)

**Auditoría de spacing (2026-07-15):** verificada con grep sobre las 10 páginas. Los únicos valores de spacing fuera de token en todo el sitio eran los 4 del Venn (`margin-top: -210px`, `padding-right/left: 190px`, `margin: -68px`) más su `height: 480px` fijo — eso era el aire sobrante. El resto del sitio ya usa `var(--sp-*)`; `shared.css` solo tiene paddings internos de botón/pill/nav, que son medidas de componente, no de layout. Al reemplazar el diagrama el problema queda resuelto y no hay nada más que corregir.

**Sobre "5CA" en el tooltip de GDPR:** el ejemplo del spec lo nombra, pero el spec del Home fijó explícitamente que no se menciona 5CA en el sitio ("describir por función, no por título"). Como el texto venía rotulado "Ejemplos" y la regla del Home es una decisión tomada, se omite el nombre de la empresa. Si se decide nombrarlo, hay que revisar también el Home para que el sitio no se contradiga.
