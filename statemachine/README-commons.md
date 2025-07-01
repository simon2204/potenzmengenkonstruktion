# Commons - Angular Statemachine Library

Eine wiederverwendbare Angular-Library für die Visualisierung und Bearbeitung von endlichen Automaten.

## Installation

```bash
# Via HTTPS
npm install git+https://git.w-hs.de/pi-lab/thi/commons.git

# Via SSH (empfohlen)
npm install git+ssh://git@git.w-hs.de:pi-lab/thi/commons.git
```

## Features

- Interaktive Visualisierung von Zustandsautomaten
- Bearbeitung von Zuständen und Übergängen
- Drag & Drop Unterstützung
- Responsive Design mit Angular Material
- Erweiterbare Komponenten

## Verwendung

### 1. Import in Ihrer Angular-Anwendung

```typescript
import { 
  StatemachineService, 
  StatemachineviewComponent,
  CoreComponent,
  HeaderComponent,
  FooterComponent 
} from 'commons';
```

### 2. Service konfigurieren

```typescript
import { Component } from '@angular/core';
import { StatemachineService } from 'commons';
import { YourTutorialDialogComponent } from './your-tutorial-dialog.component';

@Component({...})
export class AppComponent {
  constructor(private statemachineService: StatemachineService) {
    // Registriere deine eigene Tutorial-Dialog-Komponente
    this.statemachineService.setHelpDialogComponent(YourTutorialDialogComponent);
  }
}
```

### 3. Komponenten verwenden

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

## Komponenten

### StatemachineService
- Zentrale Service-Klasse für die Verwaltung des Automaten
- Observable für Änderungen am Automaten
- Methoden zum Laden/Speichern von Automaten

### StatemachineviewComponent
- Hauptkomponente für die Visualisierung
- Unterstützt verschiedene Interaktionsmodi
- Canvas-basierte Darstellung

### Weitere Komponenten
- `HeaderComponent` - Anpassbare Kopfzeile
- `FooterComponent` - Fußzeile
- `MenuComponent` - Menü mit Beispielen und Aufgaben
- `InputComponent` - Eingabefeld für Testwörter

## Entwicklung

### Library bauen
```bash
ng build commons
```

### Lokale Entwicklung
```bash
cd dist/commons
npm link

# In Ihrer Anwendung
npm link commons
```

## Lizenz

MIT

## Autor

Westfälische Hochschule - PI Lab