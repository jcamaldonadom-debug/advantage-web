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

En orden, y no des el sitio por publicado hasta que los 6 pasen:

| # | Qué revisar | Cómo |
|---|---|---|
| 1 | Las 11 páginas cargan | Recorrer la nav completa + las 4 subpáginas de servicios |
| 2 | Headers de seguridad activos | `curl -I https://advantagecol.netlify.app/` → debe aparecer `content-security-policy` y `x-frame-options` |
| 3 | Los specs internos NO son públicos | Abrir `https://advantagecol.netlify.app/docs/web-spec/ADvantage_mensaje_web_home_v1.md` → **tiene que dar 404** |
| 4 | Preview al compartir | Pegar el link en un chat de WhatsApp contigo mismo → debe salir la imagen Ember con "Sistema y alma." |
| 5 | 404 propia | Abrir `https://advantagecol.netlify.app/cualquier-cosa` → la página de error del sitio, no la de Netlify |
| 6 | CTA de WhatsApp | Tocar "Agenda tu diagnóstico" desde el celular → abre WhatsApp al +57 315 597 1878 con el mensaje pre-cargado |

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

- **Analítica**: el sitio no carga GA4 ni ningún tracker. Si lo agregas, hay que
  sumar el dominio del script a `script-src` y `connect-src` en `_headers`, o la
  CSP lo bloquea en silencio.
- **Formularios**: no hay ninguno. Todo el contacto sale por WhatsApp o correo.
- **Sitemap / robots.txt**: no existen. Google igual indexa un sitio de 10
  páginas bien enlazadas, pero si quieres control fino toca agregarlos.
- **Página de casos**: no se construye hasta tener un cierre real que mostrar
  (decisión fijada en el spec del Home).

---

## Rollback

Netlify guarda cada deploy. Si algo sale mal: **Deploys → elegir el anterior →
Publish deploy**. Vuelve en segundos, sin tocar git.
