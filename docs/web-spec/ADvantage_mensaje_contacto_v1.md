# ADvantage — Mensaje Contacto v1
Reutiliza el CTA de WhatsApp y el usuario de Instagram ya definidos. Filtrado por anti-ai-writing. Español neutro, sin voseo.

## Decisión de arquitectura

Página corta a propósito — el sitio entero ya viene empujando hacia WhatsApp como único canal de conversión (home, sistema-wat, servicios). Contacto no reintroduce un formulario ni fricción nueva; solo confirma el canal y refuerza que del otro lado hay dos personas, no una fila de soporte.

Correo de contacto confirmado: `advantagejuank@gmail.com`. No es correo de dominio propio, pero ya está de marca — no es el Gmail personal de Juan Camilo. Mejora futura, no bloqueante: pasar a correo con dominio propio (`contacto@advantage.co` o similar) cuando el sitio tenga su dominio comprado.

## Copy

**Headline:**
> Un mensaje, no un formulario.

**Subhead:**
> Escribes, y contesta uno de los dos directamente — no una fila de soporte ni un bot.

**CTA primario:**
> Escríbenos por WhatsApp

(mismo link con mensaje pre-cargado del home: negocio, tamaño de equipo, principal reto)

**Canal secundario:**
> Instagram — [@advantage.wat](https://instagram.com/advantage.wat)

**Correo:**
> advantagejuank@gmail.com

**Badge de empresa** (mismo componente que en Nosotros):
> Bogotá, Colombia · est. 2026

## Nota de layout para Code

* Página de un solo bloque, sin formulario. No construir campos de nombre/correo/mensaje — el CTA de WhatsApp ya resuelve la conversión.
* Motion mínima: fade+rise en el headline, nada más. Es la página menos "espectáculo" del sitio a propósito — el visitante que llega aquí ya decidió escribir, no hay que venderle nada más.
* Correo como canal terciario, mismo tratamiento visual que Instagram — jerarquía: WhatsApp primero (botón grande), Instagram y correo debajo como links secundarios del mismo peso.
