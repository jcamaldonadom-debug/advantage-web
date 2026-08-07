# Publicar ADvantage en Netlify

Sitio estático de 11 archivos HTML sin build step: Netlify sirve el repo tal cual.
No hay comando de build, no hay `node_modules`, no hay framework.

---

## Paso 1 — El dominio en canonical y Open Graph

✅ **Ya aplicado**: las 10 páginas apuntan a `advantagecol.netlify.app`.

Solo hay que repetir esto **el día que se conecte un dominio propio**. Los tags
`canonical` y `og:*` llevan el dominio absoluto porque los scrapers de redes no
resuelven rutas relativas; si apuntan a un dominio que no existe, el preview al
compartir por WhatsApp o LinkedIn **sale sin imagen** y el canonical señala a la
nada.

```bash
sed -i 's|advantagecol.netlify.app|tu-dominio-nuevo.com|g' *.html
grep -rc "advantagecol.netlify.app" *.html   # debe dar 0 en todas
git commit -am "deploy: dominio nuevo en canonical y Open Graph" && git push
```

Después de cambiarlo, revalidar el preview pegando el link en un chat de
WhatsApp contigo mismo — el scraper cachea, así que puede tardar en refrescar.

---

## Paso 2 — Conectar el repo

1. Netlify → **Add new site → Import an existing project → GitHub**
2. Autoriza y elige `jcamaldonadom-debug/advantage-web`
3. Configuración de build:
   - **Branch to deploy**: `main` (ver paso 3 — hay que mergear el PR primero)
   - **Build command**: *(vacío)*
   - **Publish directory**: *(vacío, o `.`)*
4. Deploy

Netlify detecta `_headers` y `_redirects` en la raíz automáticamente. No hay que
configurarlos en ningún panel.

---

## Paso 3 — Mergear el PR antes de apuntar a `main`

Todo el sitio vive hoy en la rama `claude/advantage-home-setup-64uz9w` (PR #1, en
draft). Antes de publicar:

1. Sacar el PR de draft → **Ready for review**
2. Mergear a `main`
3. Recién ahí apuntar Netlify a `main`

Alternativa para ver el sitio en vivo antes de mergear: Netlify hace deploy
previews por rama. Puedes apuntar el sitio a la rama directamente y cambiarlo a
`main` después del merge.

---

## Paso 4 — Verificar después del primer deploy

En orden, y no des el sitio por publicado hasta que los 7 pasen:

| # | Qué revisar | Cómo |
|---|---|---|
| 1 | Las 11 páginas cargan | Recorrer la nav completa + las 4 subpáginas de servicios |
| 2 | Headers de seguridad activos | `curl -I https://advantagecol.netlify.app/` → debe aparecer `content-security-policy` y `x-frame-options` |
| 3 | Los specs internos NO son públicos | Abrir `https://advantagecol.netlify.app/docs/web-spec/ADvantage_mensaje_web_home_v1.md` → **tiene que dar 404** |
| 4 | Preview al compartir | Pegar el link en un chat de WhatsApp contigo mismo → debe salir la imagen Ember con "Sistema y alma." |
| 5 | 404 propia | Abrir `https://advantagecol.netlify.app/cualquier-cosa` → la página de error del sitio, no la de Netlify |
| 6 | CTA de WhatsApp | Tocar "Agenda tu diagnóstico" desde el celular → abre WhatsApp al +57 315 597 1878 con el mensaje pre-cargado |
| 7 | Google Analytics recibiendo | Abrir el sitio y mirar **GA4 → Informes → Tiempo real**: debe aparecer tu visita en menos de un minuto. Si no llega, abrir la consola y buscar errores de `Content-Security-Policy` — es la causa más probable |

El paso 3 es el que más importa: `docs/web-spec/` contiene decisiones de pricing,
notas sobre clientes que declinaron y la estructura de equity de Novamaker. En
Netlify lo bloquea `_redirects`; si algún día migras a un hosting que no lo
soporte, hay que sacar esa carpeta del repo publicado.

---

## Paso 5 — Dominio propio (opcional)

Netlify → **Domain settings → Add custom domain**. HTTPS con Let's Encrypt se
provisiona solo en unos minutos. Después del dominio, volver al **paso 1** y
correr el `sed` con el dominio definitivo.

---

## Qué NO hace este deploy

Cosas que quedan fuera a propósito, para que no te tomen por sorpresa:

- **Formularios**: no hay ninguno. Todo el contacto sale por WhatsApp o correo.
- **Sitemap / robots.txt**: no existen. Google igual indexa un sitio de 10
  páginas bien enlazadas, pero si quieres control fino toca agregarlos.
- **Página de casos**: no se construye hasta tener un cierre real que mostrar
  (decisión fijada en el spec del Home).

---

## Analítica — Google Analytics 4 y consentimiento

El sitio carga GA4 (`G-459HMES21Q`) en las 11 páginas, con el snippet oficial
justo después de `<head>`.

**La CSP tiene que acompañarlo.** `_headers` lista tres orígenes de Google que
existen solo por GA:

| Directiva | Origen | Para qué |
|---|---|---|
| `script-src` | `www.googletagmanager.com` | cargar `gtag.js` |
| `connect-src` | `*.google-analytics.com`, `*.analytics.google.com` | enviar los eventos |
| `img-src` | `*.google-analytics.com`, `*.googletagmanager.com` | pixel de respaldo cuando el navegador bloquea `fetch` |

Si se quitan, **la CSP bloquea el tag en silencio**: la página carga normal, no
sale nada raro a la vista, y no llega un solo dato a GA. Al revés también: si
algún día se quita GA del HTML, quitar estos orígenes de `_headers` para no
dejar la política más abierta de lo necesario.

**Consentimiento:** `assets/js/consent.js` bloquea `gtag.js` hasta que la persona
acepta. Sin decisión o con rechazo no se descarga el script, no se instala cookie
y no sale un dato. La decisión se guarda en `localStorage` y se puede revocar
desde `privacidad.html`.

Es más estricto de lo que exige la ley colombiana: **Colombia no tiene una norma
de banner de cookies** como el ePrivacy europeo. Lo que sí obliga la Ley 1581 de
2012 es publicar la política de tratamiento, que es `privacidad.html`.

**Responsable: persona natural.** No hay sociedad constituida, así que el
responsable del tratamiento es Juan Camilo Maldonado como persona natural. Eso
tiene una consecuencia práctica: **el registro en el RNBD no aplica** — esa
obligación es de sociedades y entidades sin ánimo de lucro por encima del umbral
de activos, no de personas naturales. Si en algún momento se constituye la
empresa, hay que revisar las dos cosas: actualizar el responsable en la política
y evaluar si toca registrar la base de datos.

**Antes de publicar** falta reemplazar dos marcadores en `privacidad.html`
—número de cédula y fecha de vigencia— y que un abogado revise el texto. Los
marcadores salen resaltados en naranja a propósito, para que no se publiquen con
los corchetes puestos.

---

## Rollback

Netlify guarda cada deploy. Si algo sale mal: **Deploys → elegir el anterior →
Publish deploy**. Vuelve en segundos, sin tocar git.
