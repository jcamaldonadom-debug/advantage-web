# ADvantage — Seguridad pre-lanzamiento

Checklist para correr antes de cada deploy a producción. No es una promesa de "sitio inhackeable" — ningún sitio lo es. Es piso mínimo de hardening, no garantía.

- [ ] HTTPS forzado + certificado SSL válido
- [ ] Cero API keys / secretos expuestos en el código del front-end
- [ ] Variables de entorno fuera del repo (`.env` en `.gitignore`)
- [ ] Formulario de contacto: validación de inputs + anti-spam (honeypot o captcha)
- [ ] Headers de seguridad configurados: CSP, X-Frame-Options, X-Content-Type-Options, HSTS
- [ ] Dependencias sin vulnerabilidades conocidas (`npm audit` o equivalente)
- [ ] Ninguna ruta o panel interno expuesto públicamente
- [ ] Backups y control de versiones antes de cada deploy
- [ ] Aviso de tratamiento de datos (Habeas Data) visible si el sitio recoge datos de contacto — relevante por los cambios regulatorios 2026 (facturación electrónica, Habeas Data) que ya identificaste como gancho de venta consultiva; aplica también al propio sitio de ADvantage
