---
name: guion-dos-columnas
description: Formatea cualquier guion audiovisual en el estándar técnico a dos columnas VIDEO y AUDIO con encuadres, SFX, B-roll, transiciones y texto emergente. Usar cuando pidan un guion técnico, guion de producción, script a dos columnas, o al entregar guiones de video corto o largo listos para grabar y editar. Triggers - guion técnico, dos columnas, guion de producción, storyboard textual, script para grabar.
---

# Guion Técnico a Dos Columnas

Formato estándar de producción para redes sociales, heredado de la televisión. Separa la información sensorial (VIDEO | AUDIO) para controlar la sincronización entre psicología, estímulo visual y ritmo de edición. A diferencia del guion literario (prosa, atmósferas), este es un documento **pragmático e instructivo**.

## Convenciones del documento

- Hoja tamaño carta, tipografía sin serifa (Arial 12) → equivalencia **1 página ≈ 1 minuto de pantalla**.
- División simétrica: columna izquierda VIDEO, columna derecha AUDIO.
- En digital, agregar una columna de tiempo (T) al inicio para formatos cortos.

## Qué va en cada columna

| Elemento | Columna VIDEO (izquierda) | Columna AUDIO (derecha) |
|---|---|---|
| **Acción principal** | Acciones físicas, sujetos en cuadro, expresiones corporales | Diálogos exactos, locución (Voz en Off), pausas intencionales |
| **Cinematografía** | Abreviaturas de encuadre: **P.G.** (plano general), **P.M.** (plano medio), **P.P.** (primer plano); movimientos: panorámicas, tilts, zooms rápidos | Efectos de sonido en MAYÚSCULAS: `[SFX: WHOOSH]`, `[SFX: CAMPANA]`, sincronizados con los movimientos de cámara |
| **Material de apoyo** | Inserción de B-roll, recursos gráficos, transiciones: `CORTE A EMPATE`, `FUNDIDO` | Entradas/salidas/atenuaciones de música (`MÚSICA: FADE IN`, `FADE OUT`), sincronización rítmica |
| **Texto y gráficos** | Transcripción exacta del texto emergente (pop-up) EN MAYÚSCULAS + animaciones específicas | Tono de la narración: *(emocionado)*, *(urgente)*, *(susurro)* — guía de interpretación para el presentador |

## Regla anti-punto-ciego

Si la columna VIDEO permanece **estática** mientras la columna AUDIO dicta un párrafo largo, el guion revela un riesgo crítico de abandono por aburrimiento. Corrección obligatoria en preproducción: insertar una interrupción de patrón (zoom, B-roll, texto animado, cambio de ángulo — catálogo en `psicologia-retencion`). Frecuencia: cada 3–5s en formato corto, cada 30–60s en largo.

## Procedimiento

1. Recibir el guion narrativo (de `guion-video-corto`, `guion-video-largo` o `guion-social-ads`).
2. Segmentar por bloques de tiempo.
3. Para cada bloque, escribir VIDEO y AUDIO en paralelo con las convenciones de la tabla.
4. Auditar columna por columna: ningún bloque con VIDEO estático + AUDIO largo.
5. Marcar SFX y pop-ups en MAYÚSCULAS; indicar tono entre paréntesis.

## Plantilla de salida

```
PROYECTO: … | DURACIÓN: … | PLATAFORMA: …

| T | VIDEO | AUDIO |
|---|---|---|
| 0–3s | P.M. presentador ya en acción. TEXTO POP-UP: "EL 99% HACE ESTO MAL" (80px, alto contraste). | (enérgico) "Deja de publicar así…" [SFX: WHOOSH] |
| 3–7s | ZOOM IN rápido a rostro. CORTE A B-ROLL: pantalla con métricas. | "Mira lo que pasa cuando…" MÚSICA: FADE IN beat suave |
| 7–12s | P.P. + gráfico animado entra por la derecha. | "El dato clave es…" [SFX: POP] |
| … | … | … |
| final | P.M. plano de cierre. TEXTO: CTA. | (cómplice) "…y por eso — [empalma con la frase inicial]" MÚSICA: FADE OUT |
```

## Checklist final

- [ ] Todo diálogo/VO tiene su correlato visual en la misma fila
- [ ] SFX y textos emergentes en MAYÚSCULAS
- [ ] Encuadres y movimientos abreviados (P.G./P.M./P.P., zoom, paneo)
- [ ] Transiciones explícitas (CORTE A, FUNDIDO, CORTE A EMPATE)
- [ ] Tono de interpretación indicado donde cambia la emoción
- [ ] Ninguna fila con video estático + audio extenso
