# MAZA Vienna – Deployment auf Render (kostenlose Static Site)

Diese Website ist ein **statisches React-Frontend** (kein Backend, keine Datenbank).
Sie lässt sich kostenlos als **Static Site** auf [Render](https://render.com) hosten.

Der komplette Blueprint liegt bereits im Repository: **`render.yaml`** (im Projekt-Root).

---

## Voraussetzungen
- Ein GitHub- (oder GitLab-)Konto mit diesem Projekt als Repository.
- Ein kostenloses Render-Konto: https://dashboard.render.com

> Tipp: In diesem Chat oben rechts über **„Save to GitHub"** kannst du den Code direkt in dein GitHub-Repository pushen.

---

## Variante A – Blueprint (empfohlen, 1 Klick)
Render liest `render.yaml` automatisch und richtet alles ein.

1. Code nach GitHub pushen (Button **„Save to GitHub"**).
2. Render-Dashboard → **New +** → **Blueprint**.
3. Repository auswählen → Render erkennt `render.yaml` → **Apply**.
4. Fertig. Nach dem ersten Build ist die Seite unter
   `https://maza-vienna.onrender.com` erreichbar (Name aus `render.yaml`).

---

## Variante B – Manuell (ohne Blueprint)
Falls du die Static Site lieber von Hand anlegst:

1. Render-Dashboard → **New +** → **Static Site**.
2. Repository verbinden.
3. Folgende Werte eintragen:

| Feld | Wert |
|------|------|
| **Root Directory** | `frontend` |
| **Build Command** | `yarn install --frozen-lockfile && yarn build` |
| **Publish Directory** | `build` |
| **Branch** | `main` (oder dein Branch) |

4. Unter **Environment** hinzufügen:
   - `NODE_VERSION` = `20.18.0`
   - `CI` = `false`  *(verhindert, dass CRA-Warnungen den Build abbrechen)*

5. **Redirects/Rewrites** (wichtig für React-Router, sonst 404 bei `/speisekarte`):
   - Source: `/*`  →  Destination: `/index.html`  →  Action: **Rewrite**

6. **Create Static Site** klicken.

---

## Was der Blueprint (`render.yaml`) bereits erledigt
- **Static Runtime**, Root `frontend`, Build `yarn install --frozen-lockfile && yarn build`, Publish `build`.
- **SPA-Rewrite** `/* → /index.html` → Direktaufruf/Reload von `/speisekarte` funktioniert.
- **Node 20.18.0** und `CI=false`.
- Sicherheits-Header (`X-Content-Type-Options`, `X-Frame-Options`) und langfristiges Caching für `/static/*`.

---

## Eigene Domain (optional, kostenlos)
1. Nach dem Deploy: Service → **Settings** → **Custom Domains** → Domain hinzufügen (z. B. `www.maza-vienna.at`).
2. Beim Domain-Anbieter den angezeigten **CNAME**- (bzw. bei Root-Domain **A**-)Eintrag setzen.
3. Render stellt automatisch ein kostenloses **SSL-Zertifikat** aus.

---

## Gut zu wissen
- **Free Static Sites schlafen nicht ein** und haben keine Kaltstart-Verzögerung (anders als Free Web Services). Ideal für diese Seite.
- Jeder Push auf den verbundenen Branch löst automatisch ein **neues Deploy** aus.
- Das Reservierungsformular läuft über **LazyForms** (externer Endpoint) – dafür ist kein Server nötig.
- Bilder liegen aktuell als Platzhalter auf einer externen CDN-URL; echte Fotos einfach in `frontend/src/data/content.js` austauschen.
