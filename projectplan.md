# Projektplan - Potenzmengenkonstruktion

## Projektübersicht

**Projekt**: Potenzmengenkonstruktion (Power Set Construction)  
**Typ**: Angular-basierte Webanwendung für Bildungszwecke  
**Zweck**: Interaktives Lerntool für die Potenzmengenkonstruktion (NFA zu DFA Konvertierung)  
**Framework**: Angular 17 mit TypeScript 5.2.2

## 🚨 Gefundene Bugs und Probleme

### Kritische Bugs (Hohe Priorität)

#### 1. Memory Leaks
- **Datei**: `src/app/inputTable/inputTable.component.ts:89-91`
  - **Problem**: Subscription wird nicht immer korrekt aufgeräumt
  - **Lösung**: Null-Check hinzufügen und sicheres Unsubscribe implementieren

- **Datei**: `src/app/endlicherautomat/transition-edit-dialog/transition-edit-dialog.component.ts:45-50`
  - **Problem**: Event Listener wird nie entfernt → Memory Leak
  - **Lösung**: Listener-Referenz speichern und in ngOnDestroy entfernen

#### 2. Null/Undefined Handling
- **Datei**: `src/app/endlicherautomat/EndlicherAutomat.ts:159`
  - **Problem**: Non-null assertion bei `unprocessedStates.pop()!` ohne Leerprüfung
  - **Lösung**: Prüfung auf leeres Array vor pop()

- **Datei**: `src/app/endlicherautomat/EndlicherAutomat.ts:424`
  - **Problem**: Non-null assertion bei `states.get()!` ohne Verifikation
  - **Lösung**: Existenzprüfung vor Zugriff

#### 3. Race Conditions
- **Datei**: `src/app/app.component.ts:51-53`
  - **Problem**: setTimeout mit 100ms - fragile Timing-Abhängigkeit
  - **Lösung**: Proper Change Detection Strategy verwenden

- **Datei**: `src/app/inputTable/inputTable.component.ts:118-123`
  - **Problem**: setTimeout für SVG Re-render mit 10ms
  - **Lösung**: Angular Renderer2 oder ChangeDetectorRef verwenden

### Mittlere Priorität

#### 4. Type Safety
- **Datei**: `src/app/endlicherautomat/EndlicherState.ts:75`
  - **Problem**: Verwendung von `==` statt `===`
  - **Lösung**: Strikte Gleichheitsprüfung verwenden

- **Datei**: `src/app/services/dfa-generator-service.service.ts:253,287`
  - **Problem**: Unsichere Type-Casts ohne Validierung
  - **Lösung**: Type Guards implementieren

#### 5. Array Bounds
- **Datei**: `src/app/inputTable/inputTable.component.ts:801-828`
  - **Problem**: Komplexe Array-Manipulation ohne Bounds-Checking
  - **Lösung**: Defensive Programmierung mit Index-Validierung

#### 6. State Management
- **Datei**: `src/app/inputTable/inputTable.component.ts:61`
  - **Problem**: `isProcessingCheck` Flag könnte bei Fehler hängen bleiben
  - **Lösung**: Error Recovery implementieren

### Niedrige Priorität

#### 7. Logikfehler
- **Datei**: `src/app/endlicherautomat/EndlicherState.ts:26-28`
  - **Problem**: Counter-Initialisierung mit `?? 1` statt `?? 0`
  - **Lösung**: Korrekte Initialisierung

#### 8. Resource Management
- **Datei**: `src/app/inputTable/inputTable.component.ts:223-230`
  - **Problem**: Auto-save Interval wird nicht immer aufgeräumt
  - **Lösung**: Lifecycle-Management verbessern

## 📋 Verbesserungsvorschläge

### Sofortmaßnahmen
1. **ESLint einrichten** für automatische Code-Qualitätsprüfung
2. **Strict Mode vollständig aktivieren** (bereits aktiv, aber nicht überall beachtet)
3. **RxJS Best Practices** implementieren (takeUntil pattern)
4. **Error Boundaries** für kritische Operationen

### Kurzfristig (1-2 Wochen)
1. **Unit Tests** für Kernalgorithmen schreiben
2. **Memory Leaks** systematisch beheben
3. **Null-Safety** durchgehend implementieren
4. **Change Detection** optimieren

### Mittelfristig (1 Monat)
1. **Refactoring** der komplexen Komponenten
2. **State Management** mit NgRx oder Akita
3. **Performance Optimierung** der Tabellen-Komponenten
4. **Accessibility** verbessern

### Langfristig
1. **Modernisierung** auf Angular 18+
2. **PWA Features** hinzufügen
3. **Internationalisierung** (i18n)
4. **E2E Tests** mit Cypress/Playwright

## 🛠 Technische Schulden

### Konfiguration
- Kein Linter konfiguriert (ESLint/TSLint)
- Keine pre-commit hooks
- Keine CI/CD Pipeline
- Fehlende Dokumentation

### Code-Qualität
- Inkonsistente Fehlerbehandlung
- Fehlende Input-Validierung
- Vermischung von Business Logic und UI
- Zu große Komponenten (inputTable.component.ts > 800 Zeilen)

### Testing
- Keine Unit Tests vorhanden
- Keine E2E Tests
- Keine Test Coverage Messung

## 📊 Priorisierung

### Phase 1: Kritische Bugs (Sofort)
- [ ] Memory Leaks beheben
- [ ] Null-Pointer Exceptions verhindern
- [ ] Race Conditions eliminieren

### Phase 2: Stabilität (1 Woche)
- [ ] ESLint einrichten und Regeln anwenden
- [ ] Unit Tests für Kernfunktionen
- [ ] Error Handling verbessern

### Phase 3: Wartbarkeit (2-3 Wochen)
- [ ] Refactoring großer Komponenten
- [ ] Dokumentation erstellen
- [ ] CI/CD Setup

### Phase 4: Features (1+ Monat)
- [ ] Performance Optimierungen
- [ ] Neue Features nach Bedarf
- [ ] UX Verbesserungen

## 🎯 Erfolgskriterien

1. **Keine kritischen Bugs** in Produktion
2. **Test Coverage** > 80%
3. **Performance**: Initiale Ladezeit < 3s
4. **Wartbarkeit**: Alle Komponenten < 300 Zeilen
5. **Dokumentation**: Vollständige API-Docs

## 📝 Nächste Schritte

1. **Sofort**: Kritische Memory Leaks in `transition-edit-dialog` beheben
2. **Diese Woche**: ESLint konfigurieren und anwenden
3. **Nächste Woche**: Unit Tests für `EndlicherAutomat.ts` schreiben
4. **Continuous**: Code Reviews und Refactoring

---

*Erstellt am: 16.06.2025*  
*Status: Initial Assessment Complete*