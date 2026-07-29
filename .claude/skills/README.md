# Suite de Skills — Guiones para Redes Sociales

Doce skills de Claude Code que destilan una investigación exhaustiva sobre estructura, redacción y optimización de guiones para redes sociales: psicología de la retención, fórmulas de copywriting, formatos por plataforma, publicidad pagada, storytelling y tendencias Latam 2026.

## Cómo se usan

Dentro de este repo, Claude Code detecta las skills automáticamente. Puedes invocarlas por nombre (`/guion-video-corto`) o simplemente pedir la tarea en lenguaje natural ("escríbeme un guion de Reel sobre X") y Claude activará la skill correspondiente.

## Índice

| Skill | Cuándo usarla |
|---|---|
| `estratega-contenido` | **Empieza aquí** si no sabes qué formato usar. Diagnostica objetivo/funnel/conciencia y deriva a la skill correcta. Incluye estrategia corto→largo, WhatsApp y AEO/GEO. |
| `psicologia-retencion` | Base teórica transversal: Efecto Zeigarnik, bucles abiertos, interrupciones de patrón con métricas. Las demás skills la referencian. |
| `guion-video-corto` | Guiones de TikTok / Reels / Shorts (15–60s) en 4 actos cronometrados con loop de retención. |
| `guion-video-largo` | Guiones de YouTube/podcast (+5 min): capítulos, patrocinios, evergreen/SEO y clips derivables. |
| `guion-dos-columnas` | Formato técnico de producción VIDEO \| AUDIO (encuadres, SFX, B-roll, transiciones). |
| `ganchos` | Generador de hooks verbales, visuales y de texto pop-up para cualquier formato. |
| `formulas-copywriting` | Elige y aplica PAS / AIDA / BAB / 4Ps / FAB / SCQA según el nivel de conciencia (Schwartz). |
| `carrusel` | Carruseles educativos IG/LinkedIn de 8–12 slides con CTA de guardado. |
| `hilo-x` | Hilos de X/Twitter con mega-gancho, numeración y cierre TL;DR. |
| `post-linkedin` | Posts de LinkedIn: gancho en 3 líneas, cuerpo 700–1300 caracteres, pregunta abierta. |
| `guion-social-ads` | Anuncios Meta/TikTok Ads: estructura Lego de 7 bloques + pack de diversificación creativa. |
| `storytelling-marca` | Viaje del Héroe (cliente protagonista, marca guía), vulnerabilidad y autenticidad radical. |

## Flujo típico

```
estratega-contenido  →  elige formato
        │
        ├─ video corto  → ganchos → formulas-copywriting → guion-video-corto → guion-dos-columnas
        ├─ video largo  → guion-video-largo → guion-dos-columnas (+ clips → guion-video-corto)
        ├─ carrusel     → ganchos → carrusel
        ├─ hilo / post  → ganchos → hilo-x / post-linkedin
        └─ pauta        → guion-social-ads → guion-dos-columnas
                          (storytelling-marca y psicologia-retencion son transversales)
```

## Instalación global (usar en cualquier proyecto)

Estas skills viven en el repo, pero puedes copiarlas a tu directorio personal de Claude Code para usarlas en cualquier proyecto:

```bash
bash .claude/skills/install-global.sh
```

O manualmente:

```bash
mkdir -p ~/.claude/skills
cp -r .claude/skills/*/ ~/.claude/skills/
```

El script no sobrescribe skills existentes con el mismo nombre salvo que pases `--force`.
