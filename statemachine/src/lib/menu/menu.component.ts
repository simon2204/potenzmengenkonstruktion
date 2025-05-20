import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { HelpDialogComponent } from './help-dialog/help-dialog.component';
import { StatemachineService } from '../statemachine/statemachine.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { environment } from '../../../../src/environments/environment';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  @Input() baseURL!: string;

  public vorlesungsbeispiele: any[] = [];
  public uebungsaufgaben: any[] = [];

  constructor(public service: StatemachineService) {
    this.loadConfiguration()
  }

  createNewInstance() {
    this.service.createNewInstance();
  }

  loadFromBrowserCache() {
    this.service.loadFromBrowserCache();
  }

  saveToBrowserCache() {
    this.service.saveToBrowserCache();
  }

  createInstanceFromJSON(configuration: any) {
    this.service.createInstanceFromJSON(configuration);
  }

  saveToLocalStorage() {
    this.service.saveToLocalStorage();
  }

  openHelpDialog() {
    this.service.openHelpDialog();
  }

  onFileUpload(e: Event) {
    const target = e.target as HTMLInputElement;
    const files = target.files as FileList;
    const file = files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = reader.result as string;
      this.createInstanceFromJSON(JSON.parse(content));
    };
    reader.readAsText(file);
    target.value = '';
  }

  loadConfiguration() {
    const url = environment.baseURL + '/assets/config.json';
    fetch(url)
      .then((response) => response.json())
      .then((config) => {
        this.loadVorlesungsbeispiele(config);
        this.loadUebungsaufgaben(config);
      });
  }

  loadVorlesungsbeispiele(config: any) {
    config['Vorlesungsbeispiele'].forEach((aufgabe: any, index: number) => {
      this.fetchJSON('Vorlesungsbeispiele', aufgabe['filename']).then(
        (aufgabe) => {
          this.vorlesungsbeispiele[index] = aufgabe;
        }
      );
    });
  }

  loadUebungsaufgaben(config: any) {
    config['Uebungsaufgaben'].forEach((aufgabe: any, index: number) => {
      this.fetchJSON('Uebungsaufgaben', aufgabe['filename']).then((aufgabe) => {
        this.uebungsaufgaben[index] = aufgabe;
      });
    });
  }

  async fetchJSON(type: string, name: string) {
    const response = await fetch(
      environment.baseURL + '/assets/' + type + '/' + name + '.json'
    );
    const json = await response.json();
    return json;
  }
}
