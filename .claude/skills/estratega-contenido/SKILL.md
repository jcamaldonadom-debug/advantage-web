---
name: estratega-contenido
description: Skill orquestadora - decide qué formato de contenido y qué skill de guion usar según objetivo (alcance, autoridad, conversión), audiencia, nivel de conciencia y etapa del funnel. Usar cuando el usuario pida una estrategia de contenido, un plan de publicaciones, no sepa qué formato elegir, o pida "contenido para redes" sin especificar formato. Triggers - estrategia de contenido, qué formato uso, plan de contenido, calendario editorial, funnel de contenido, content strategy.
---

# Estratega de Contenido

Skill orquestadora de la suite de guiones. Su función: diagnosticar el objetivo y **derivar al skill correcto** con los parámetros adecuados. No redacta guiones directamente — decide qué guion se necesita.

## Paso 1 — Diagnóstico (preguntar o inferir)

Antes de recomendar formato, establecer:

1. **Objetivo**: ¿alcance/descubrimiento, autoridad/fidelización, o conversión/venta?
2. **Etapa del funnel**: TOFU (tráfico frío), MOFU (consideración), BOFU (decisión).
3. **Nivel de conciencia de la audiencia** (Eugene Schwartz): Oblivious → Problem-Aware → Solution-Aware → Product-Aware → Most Aware. (Detalle en `formulas-copywriting`.)
4. **Plataforma(s) disponibles** y capacidad de producción (¿puede grabar video? ¿solo texto/diseño?).
5. **¿Orgánico o pauta?** (la lógica de ads es distinta — ver `guion-social-ads`).

## Paso 2 — Matriz de decisión

| Objetivo | Etapa | Formato recomendado | Skill a invocar |
|---|---|---|---|
| Descubrimiento masivo, viralidad | TOFU | Video corto (15–60s) TikTok/Reels/Shorts | `guion-video-corto` (+ `ganchos`) |
| Educación densa, guardados | TOFU/MOFU | Carrusel 8–12 slides | `carrusel` |
| Autoridad profesional B2B | TOFU/MOFU | Post LinkedIn / hilo en X | `post-linkedin`, `hilo-x` |
| Profundidad, fidelización, RPM | MOFU/BOFU | Video largo (+5 min), podcast | `guion-video-largo` |
| Conversión pagada, ROAS | BOFU | Anuncio (Meta/TikTok Ads) | `guion-social-ads` |
| Conexión emocional, marca | Transversal | Narrativa / historia | `storytelling-marca` |
| Testimonios, casos de éxito | BOFU | BAB en video o carrusel | `formulas-copywriting` + formato |

## Paso 3 — Estrategia de ecosistema (corto ↔ largo)

Nunca concebir piezas aisladas. La estrategia maestra 2026:

- **El video corto es motor de descubrimiento (TOFU)**: capta tráfico frío con costo bajo, pero atrae audiencia de baja calidad conversional, no construye relaciones parasociales profundas, tiene RPM bajo y decae en días.
- **El video largo es motor de conversión y fidelización (MOFU/BOFU)**: arcos narrativos complejos, patrocinios integrados, ingresos superiores, longevidad evergreen vía SEO durante años.
- **Modelo puente**: guionizar piezas cortas disruptivas que actúan como **tráileres** y canalizan la atención de inmediato hacia el formato largo (canal de YouTube, podcast), donde reside el valor real.

Al planificar un calendario, cada video largo debe generar 3–5 cortos derivados con CTA hacia la pieza larga.

## Paso 4 — Capas de conversión Latam

- **Comercio conversacional (Social Commerce)**: con 92.2% de penetración de WhatsApp en mercados como Colombia, los CTAs de plataformas públicas deben **derivar a mensajería privada**, donde las tasas de apertura superan el 90%. Diseñar CTAs tipo "escríbenos al WhatsApp" en piezas BOFU.
- **AEO/GEO (Generative Engine Optimization)**: los motores generativos (ChatGPT domina el 87.2% del tráfico referido de IA en Colombia; Perplexity crece) seleccionan contenido con **máxima claridad informativa**: respuestas estructuradas, precisas y accionables. El contenido difuso es ignorado. Todo contenido educativo (hilos, artículos, guiones explicativos) debe estructurarse para ser extraíble como fuente de autoridad.

## Contexto de mercado (Latam 2026, Colombia como referencia)

- 41.7M usuarios de internet (77.8% de penetración); 93% de adultos en redes sociales.
- TikTok: **38.8 horas mensuales** por usuario promedio — principal medio de descubrimiento comercial.
- YouTube: alcance del 57.9% de la población — confirma el modelo puente corto→largo.
- Consumo drásticamente sesgado a video y móvil.

## Entregable de este skill

Al invocarlo, producir:
1. Diagnóstico (objetivo, funnel, conciencia, plataforma).
2. Mix de formatos recomendado con justificación.
3. Lista de piezas a producir, cada una con el skill a usar y sus parámetros (ej. "Reel educativo 30s, fórmula PAS, gancho negativo → invocar `guion-video-corto`").
4. Cadena de CTAs entre piezas (corto → largo → WhatsApp/conversión).
