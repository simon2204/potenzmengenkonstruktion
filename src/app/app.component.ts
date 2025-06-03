// Erweiterte Version von app.component.ts mit Auto-Load beim Start

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../statemachine/src/lib/header/header.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from '../../statemachine/src/lib/footer/footer.component';
import { CoreComponent } from '../../statemachine/src/public-api';
import { StatemachineService } from '../../statemachine/src/lib/statemachine/statemachine.service';
import { EndlicherAutomat } from './endlicherautomat/EndlicherAutomat';
import { InputTableComponent } from './inputTable/inputTable.component';
import { MatDialog } from '@angular/material/dialog';
import { WelcomeDialogComponent } from './welcome-dialog/welcome-dialog.component';

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
export class AppComponent implements OnInit {
  title = 'endlicherautomat';

  constructor(public service: StatemachineService, public dialog: MatDialog) {
    // Erstelle eine neue Instanz, falls noch keine existiert
    if (!service.stateMachine) {
      service.stateMachine = new EndlicherAutomat();
    }

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
        setTimeout(() => {
          (this.service as any).automatonChangedSubject?.next();
        }, 100);
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
  }
}