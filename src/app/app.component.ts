// Erweiterte Version von app.component.ts mit Auto-Load beim Start

import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'commons';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from 'commons';
import { CoreComponent } from 'commons';
import { StatemachineService } from 'commons';
import { EndlicherAutomat } from './endlicherautomat/EndlicherAutomat';
import { InputTableComponent } from './inputTable/inputTable.component';
import { MatDialog } from '@angular/material/dialog';
import { WelcomeDialogComponent } from './welcome-dialog/welcome-dialog.component';
import { TutorialDialogComponent } from './tutorial-dialog/tutorial-dialog.component';
import { Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    HeaderComponent,
    ToolbarComponent,
    CoreComponent,
    FooterComponent,
    InputTableComponent,
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'endlicherautomat';
  private saveSubscription?: Subscription;

  constructor(
    public service: StatemachineService, 
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {
    // Erstelle eine neue Instanz, falls noch keine existiert
    if (!service.stateMachine) {
      service.stateMachine = new EndlicherAutomat();
    }

    // Registriere die TutorialDialogComponent im Service
    service.setHelpDialogComponent(TutorialDialogComponent);

    // Versuche, gespeicherte Daten aus dem Browser-Cache zu laden
    this.loadFromCacheIfAvailable();
  }

  private loadFromCacheIfAvailable(): void {
    try {
      const savedData = localStorage.getItem('endlicherautomat');
      if (savedData) {
        const json = JSON.parse(savedData);
        this.service.stateMachine = this.service.stateMachine.createInstanceFromJSON(json);
        console.log('Automat und Tabelle aus Browser-Cache geladen');

        // Trigger change notification for InputTableComponent
        // Use Angular's change detection instead of setTimeout
        this.cdr.detectChanges();
        if ((this.service as any).automatonChangedSubject) {
          (this.service as any).automatonChangedSubject.next();
        }
      }
    } catch (error) {
      console.error('Fehler beim Laden aus Browser-Cache:', error);
      // Bei Fehler mit neuem Automaten fortfahren
      this.service.stateMachine = new EndlicherAutomat();
    }
  }

  ngOnInit(): void {
    // Zeige Welcome Dialog nur wenn keine Daten geladen wurden
    const hasData = localStorage.getItem('endlicherautomat');
    if (!hasData) {
      this.dialog.open(WelcomeDialogComponent, {
        width: '70vh',
        height: '60vh',
      });
    }

    // Subscribe to automaton changes with debounce for auto-save
    this.saveSubscription = this.service.onAutomatonChanged
      .pipe(debounceTime(1000)) // Wait 1 second after last change
      .subscribe(() => {
        this.saveToCache();
      });
  }

  ngOnDestroy(): void {
    // Clean up subscription
    if (this.saveSubscription) {
      this.saveSubscription.unsubscribe();
    }
    // Save one last time before destroying
    this.saveToCache();
  }

  private saveToCache(): void {
    try {
      if (this.service.stateMachine) {
        (this.service.stateMachine as EndlicherAutomat).saveToBrowserCache();
        console.log('Automaton saved to browser cache');
      }
    } catch (error) {
      console.error('Error saving to browser cache:', error);
    }
  }
}