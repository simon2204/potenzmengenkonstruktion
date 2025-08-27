# Potenzmengenkonstruktion - Automatisches Deployment

## Überblick

Diese Anwendung wird automatisch gebaut und auf den nginx Server deployed:

- **Eigene Änderungen**: Bei Push auf `main` → automatisches Build & Deploy
- **Commons Updates**: Wenn sich die Commons Library ändert → automatischer Rebuild & Deploy
- **Deployment Ziel**: `/usr/share/nginx/html/Potenzmengenkonstruktion`
- **URL**: https://pi-lab.w-hs.de/Potenzmengenkonstruktion

## Pipeline Stages

1. **build_app**: 
   - Installiert Dependencies (inkl. neueste Commons Library)
   - Baut die Angular-Anwendung

2. **deploy_to_server**:
   - Erstellt Backup der aktuellen Version
   - Deployed neue Version auf nginx Server
   - Setzt korrekte Berechtigungen
   - Reloaded nginx

## Benötigte CI/CD Variablen

Siehe `../commons-project/DEPLOYMENT-SETUP.md` für komplette Setup-Anleitung.

**Wichtige Variablen:**
- `SSH_PRIVATE_KEY`: Für Commons Library Updates
- `DEPLOY_SSH_PRIVATE_KEY`: Für nginx Server Deployment
- `DEPLOY_USER`, `DEPLOY_HOST`: nginx Server Zugang

## Commons Library Dependency

```json
{
  "dependencies": {
    "commons": "git+ssh://git@git.w-hs.de:pi-lab/thi/commons.git"
  }
}
```

Die Commons Library wird bei jedem Build automatisch auf die neueste Version aktualisiert.