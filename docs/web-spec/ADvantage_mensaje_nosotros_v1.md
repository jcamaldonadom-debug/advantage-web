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

### 3. Quiénes dirigen esto

**Body — Juan Camilo (primera persona):**
> Antes de ADvantage gestioné contenido de marca en los canales corporativos de Samsung Electronics Colombia — Instagram, TikTok, LinkedIn, X y Samsung Members — bajo lineamientos globales, y trabajé procesos de atención al cliente bajo cumplimiento GDPR, analizando métricas de satisfacción para clientes internacionales.

**Body — María Paula (primera persona):**
> Hoy hago prácticas de marketing en Bavaria — Michelob, Pony Malta, Redd's, Cola & Pola — coordinando activaciones de marca a nivel nacional y desarrollando contenido y piezas gráficas para campañas, apoyada en herramientas de IA para producción de contenido. Antes fui administradora de punto de venta en La Fábrica de Batidos, donde monté la experiencia de marca en la apertura de dos locales y entrené al personal nuevo.

**Body — cierre conjunto:**
> Los dos estudiamos Marketing y Negocios Digitales en la Universidad del Rosario. No vendemos años de experiencia — vendemos que el sistema no depende de que uno de los dos tenga un buen día. Trabajamos en paralelo, no divididos por función: los dos hacemos estrategia, los dos hacemos contenido. Juan Camilo trae gobierno de canales corporativos y rigor analítico de servicio al cliente; María Paula trae producción real de contenido con IA y experiencia operando puntos de venta. Se suma, no se reparte.

**Fotos/avatares:** Juan Camilo usa el asset real (`Diseño_sin_título.png`). María Paula manda foto real mañana — mientras tanto, badge de iniciales (MB) en el mismo lenguaje visual del logo mark, no la foto del CV (fondo de neón/ladrillo, no combina) ni un ícono genérico. Se reemplaza apenas llegue la foto real.

**Diagrama del equipo** (reemplaza una simple lista de dos bios):

Recomendación: diagrama de Venn de dos círculos, no un mapa mental radial — un mapa mental implica jerarquía (una idea central, ramas subordinadas), y acá no hay jerarquía: son dos co-fundadores a la par. El Venn comunica exactamente eso — dos personas, terreno compartido en el centro, fortaleza distinta en cada lado.

* Círculo izquierdo (Juan Camilo): Samsung · canales corporativos · GDPR · CSAT/DSAT
* Círculo derecho (María Paula): Bavaria · producción de contenido con IA · activaciones de marca · punto de venta
* Intersección (centro, lo que comparten): Estrategia · Contenido · Marketing y Negocios Digitales, Universidad del Rosario

Cada nodo del diagrama es un tag/pill (mismo componente de Brand Tokens), no texto suelto. Al hacer hover o tap en un nodo, podría expandirse con una línea de contexto — decisión de Code según cuánta interactividad tenga sentido para el resto del sitio.

### 4. Cómo se arma el equipo

**Body:**
> El resto del equipo — filmmaker, community manager, diseñador — se asigna después del diagnóstico, no antes. Nadie promete "nuestro mejor editor" en la primera llamada, porque en la primera llamada todavía no se sabe si el proyecto necesita un editor o necesita otra cosa. Primero se entiende qué requiere el negocio. Después se arma el equipo que ejecuta.

(Mismo texto que en el home — este sí se repite igual, es una regla operativa, no una narrativa que necesite variarse.)

### 5. Datos de la empresa

**Badges/pills** (reutilizando el componente ya definido en Brand Tokens):
> Bogotá, Colombia · est. 2026 · 9 módulos · wat_system: activo

### 6. Cómo pensamos

**Body:**
> Los principios completos de por qué existe ADvantage están en el manifiesto. Acá los tres que más se sienten en el día a día trabajando con nosotros:

1. El sistema es el producto. No lo que hacemos, sino cómo lo hacemos.
2. Sin datos no hay opinión. Pero los datos sin narrativa son ruido.
3. La transparencia no es un valor — es el modelo. El cliente puede ver cada workflow.

**Link:** Lee el manifiesto completo →

### 7. Cierre

**Headline:**
> Agenda tu diagnóstico.

(mismo CTA — WhatsApp directo, mismo link)

## Nota de layout para Code

* El diagrama de Venn de la sección 3 es el elemento visual más importante de esta página — es el candidato natural para el tipo de animación "que se note que sabemos usar tecnología" que se pidió para el sitio. ScrollReveal al entrar en viewport, y considerar que los círculos se acerquen/superpongan con una animación sutil en vez de aparecer ya superpuestos — refuerza la idea de "dos personas que convergen", no es decoración porque comunica la relación real.
* Badge de iniciales de María Paula: mismo tratamiento visual que el logo mark (fondo Void, iniciales en Ember o Cream), para que no se sienta como un placeholder roto.
* Sección 6 no repite el manifiesto completo, solo 3 principios + link — evita que la página se sienta redundante con /manifiesto.
* Motion del resto de la página: mismas reglas de Brand Tokens.
