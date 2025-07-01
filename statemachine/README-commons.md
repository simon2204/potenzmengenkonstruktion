# Commons - Angular Statemachine Library

Eine wiederverwendbare Angular-Library für die Visualisierung und Bearbeitung von endlichen Automaten.

## Überblick

Diese Library stellt gemeinsame Komponenten und Services für Automaten-basierte Anwendungen bereit. Sie wird in mehreren Projekten der Westfälischen Hochschule verwendet.

## Installation

### Via GitLab (Empfohlen für externe Projekte)

```bash
# Via SSH
npm install git+ssh://git@git.w-hs.de:pi-lab/thi/commons.git

# Via HTTPS
npm install git+https://git.w-hs.de/pi-lab/thi/commons.git
```

### Lokale Entwicklung (für potenzmengenkonstruktion)

Die Library wird direkt aus dem Hauptprojekt gebaut:
```bash
ng build commons
```

## Komponenten

### Core Components

- **StatemachineService**: Zentrale Service-Klasse für die Verwaltung des Automaten
  - Observable für Änderungen am Automaten
  - Methoden zum Laden/Speichern
  - Event-System für UI-Updates

- **StatemachineviewComponent**: Hauptkomponente für die Visualisierung
  - Canvas-basierte Darstellung
  - Interaktive Bearbeitung (Drag & Drop)
  - Verschiedene Interaktionsmodi

### UI Components

- **HeaderComponent**: Anpassbare Kopfzeile
- **FooterComponent**: Fußzeile mit Informationen
- **MenuComponent**: Menü mit Beispielen und Aufgaben
- **InputComponent**: Eingabefeld für Testwörter
- **StateEditDialogComponent**: Dialog zum Bearbeiten von Zuständen

### Statemachine Classes

- **StateMachine** (abstract): Basis-Klasse für Automaten
- **State** (abstract): Basis-Klasse für Zustände
- **Transition** (abstract): Basis-Klasse für Übergänge
- **Result**: Ergebnis-Klasse für Wortprüfungen

### Drawing Primitives

Geometrische Klassen für die Visualisierung:
- **Point**: 2D-Punkt mit x,y Koordinaten
- **Line**: Linie zwischen zwei Punkten
- **Arrow**: Pfeil mit Richtung
- **BezierCurve**: Bezier-Kurven für gebogene Übergänge
- **Rect**: Rechteck für Bounding Boxes
- **Size**: Größenangaben

## Verwendung

### 1. Service konfigurieren

```typescript
import { Component } from '@angular/core';
import { StatemachineService } from 'commons';
import { YourDialogComponent } from './your-dialog.component';

@Component({...})
export class AppComponent {
  constructor(private statemachineService: StatemachineService) {
    // Registriere deine eigene Tutorial-Dialog-Komponente
    this.statemachineService.setHelpDialogComponent(YourDialogComponent);
  }
}
```

### 2. Komponenten einbinden

```html
<!-- Header -->
<app-header title="Meine Automaten-App"></app-header>

<!-- Core Statemachine View -->
<app-core></app-core>

<!-- Menu mit baseURL -->
<app-menu [baseURL]="environment.baseURL"></app-menu>

<!-- Footer -->
<app-footer></app-footer>
```

### 3. Eigene Automaten-Klasse erstellen

```typescript
import { StateMachine, State, Transition } from 'commons';

export class MeinAutomat extends StateMachine {
  // Implementiere abstrakte Methoden
  override createState(x: number, y: number): State {
    return new MeinZustand(x, y);
  }
  
  // Weitere Implementierungen...
}
```

## Entwicklung

### Build-Prozess

Die Library wird im Hauptprojekt (potenzmengenkonstruktion) entwickelt:

1. **Änderungen machen**: Bearbeite Dateien in `statemachine/src/lib/`
2. **Library bauen**: `ng build commons`
3. **Testen**: Die Hauptanwendung nutzt automatisch die neue Version

### Veröffentlichen auf GitLab

Für Updates im GitLab Repository:

```bash
# Mit setup-commons-repo.sh (falls eingerichtet)
./setup-commons-repo.sh

# Oder manuell
cd dist/commons
git add .
git commit -m "Beschreibung der Änderungen"
git push origin main
```

## API Dokumentation

### StatemachineService

```typescript
class StatemachineService {
  // Observable für Automaten-Änderungen
  onAutomatonChanged: Observable<void>;
  
  // Aktueller Automat
  stateMachine: StateMachine;
  
  // Methoden
  addState(x: number, y: number): State;
  deleteState(state: State): void;
  addTransition(source: State, destination: State): Transition;
  removeTransition(transition: Transition): void;
  setHelpDialogComponent(component: any): void;
}
```

### State Interface

```typescript
abstract class State {
  id: string;
  name: string;
  origin: Point;  // Position
  
  abstract addTransition(destination: State): Transition;
  abstract removeTransition(transition: Transition): void;
}
```

## Migration Guide

### Von alter Version

Falls Sie von einer älteren Version migrieren:

1. **Import-Pfade aktualisieren**:
   ```typescript
   // Alt
   import { State } from '../statemachine/state';
   
   // Neu
   import { State } from 'commons';
   ```

2. **PeerDependencies prüfen**:
   - Angular 17.x
   - RxJS 7.8.x

## Fehlerbehebung

### Build-Fehler

```bash
# Library neu bauen
ng build commons

# Cache löschen
rm -rf node_modules/.cache
npm install
```

### TypeScript Fehler

Stelle sicher, dass die TypeScript-Version kompatibel ist:
- TypeScript 5.2.x für Angular 17

## Lizenz

MIT

## Autoren

Westfälische Hochschule - PI Lab

## Support

Bei Fragen oder Problemen:
- Issue im GitLab Repository erstellen
- Kontakt: [Ihre Kontaktinformationen]