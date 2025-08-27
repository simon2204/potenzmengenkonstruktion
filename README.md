# Potenzmengenkonstruktion - NFA zu DFA Konverter

Eine Angular-Webanwendung zur Visualisierung und Lehre der Potenzmengenkonstruktion - dem Algorithmus zur Umwandlung von nichtdeterministischen endlichen Automaten (NFA) in deterministische endliche Automaten (DFA).

## Überblick

Diese Anwendung ermöglicht es Studenten, die Potenzmengenkonstruktion interaktiv zu lernen und zu üben. Sie können NFAs erstellen, bearbeiten und schrittweise in DFAs umwandeln.

## Projektstruktur

```
potenzmengenkonstruktion/
├── src/                        # Hauptanwendung
│   └── app/
│       ├── endlicherautomat/   # Automaten-Implementierung
│       ├── inputTable/         # Interaktive Tabelle für Potenzmengenkonstruktion
│       ├── services/           # DFA-Generierung
│       └── toolbar/            # UI-Komponenten
└── statemachine/               # Commons Library Quellcode
     └── src/lib/               # Wiederverwendbare Komponenten
```

## Commons Library

Dieses Projekt nutzt die `commons` Library, die gemeinsame Komponenten für Automaten-Visualisierung bereitstellt.

### Library Management

Die Library wird lokal im `dist/commons` Ordner verwaltet. Es gibt zwei Ansätze:

#### Ansatz 1: Lokale Entwicklung (Standard)
- Die Library wird direkt aus `dist/commons` verwendet
- Änderungen in `statemachine/src` müssen mit `ng build commons` gebaut werden
- Kein separates Git Repository nötig

#### Ansatz 2: Separates Git Repository (mit setup-commons-repo.sh)
- Nutzt ein separates Git Repository für die commons Library
- Ermöglicht saubere Versionierung und Sharing zwischen Projekten
- Das Script `setup-commons-repo.sh` automatisiert diesen Prozess

### Library aktualisieren

1. **Änderungen machen**: Bearbeite Dateien in `statemachine/src/lib/`
2. **Library bauen**: 
   ```bash
   ng build commons
   ```
3. **Verwenden**: Die Anwendung nutzt automatisch die neue Version aus `dist/commons`

### Scripts

- **`build-commons.sh`**: Baut die Library und kopiert sie ins commons Repository (falls Ansatz 2 verwendet wird)
- **`setup-commons-repo.sh`**: Einmalige Einrichtung eines separaten commons Repository (optional)

## Installation

1. Repository klonen:
   ```bash
   git clone <repository-url>
   cd potenzmengenkonstruktion
   ```

2. Dependencies installieren:
   ```bash
   npm install
   ```

3. Commons Library bauen:
   ```bash
   ng build commons
   ```

## Entwicklung

1. Entwicklungsserver starten:
   ```bash
   npm start
   ```
   Die Anwendung läuft unter `http://localhost:4200/`

2. Bei Änderungen an der commons Library:
   ```bash
   ng build commons
   # Die App nutzt automatisch die neue Version
   ```

## Features

- **NFA Editor**: Erstellen und bearbeiten Sie NFAs visuell
- **Interaktive Potenzmengenkonstruktion**: Füllen Sie die Übergangstabelle schrittweise aus
- **Automatische Validierung**: Überprüfung Ihrer Eingaben
- **DFA Generierung**: Automatische Erstellung des resultierenden DFA
- **Persistenz**: Automaten werden automatisch im Browser gespeichert
- **Import/Export**: Laden und speichern Sie Automaten als JSON

## Befehle

- `npm start` - Startet den Entwicklungsserver
- `npm run build` - Baut die Anwendung für Production
- `ng build commons` - Baut die commons Library
- `npm test` - Führt Unit Tests aus

## Wichtige Hinweise

1. **Auto-Save**: Die Anwendung speichert automatisch alle Änderungen im Browser (localStorage)
2. **Library-Änderungen**: Nach Änderungen in `statemachine/src` immer `ng build commons` ausführen
3. **Git**: Der `dist/` Ordner ist normalerweise in `.gitignore`, aber `dist/commons` kann committed werden wenn gewünscht

## Fehlerbehebung

### "Cannot find module 'commons'"
```bash
ng build commons
npm install
```

### Änderungen an der Library werden nicht übernommen
```bash
ng build commons
# Browser Cache leeren (Ctrl+F5)
# Dev Server neu starten
```

### RxJS Version Konflikte
Stelle sicher, dass die peerDependencies in `statemachine/package.json` mit der Hauptanwendung übereinstimmen.

## Lizenz

[Ihre Lizenz]

## Autoren

Westfälische Hochschule - PI Lab