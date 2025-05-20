import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatemachineService } from '../statemachine/statemachine.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { environment } from '../../../../src/environments/environment';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {

  @Input() baseURL!: string;

  public vorlesungsbeispiele: any[] = [];
  public uebungsaufgaben: any[] = [];

  constructor(
      public service: StatemachineService,
      private http: HttpClient,
  ) {

  }

  ngOnInit() {
    this.loadConfig()
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

  loadConfig(): void {
    const url = `assets/config.json`;
    this.http.get<any>(url).subscribe({
      next: (config) => {
        // Hier kann man dann loadTasks etc. aufrufen
        this.loadTasks('Vorlesungsbeispiele', this.vorlesungsbeispiele, config);
        this.loadTasks('Uebungsaufgaben', this.uebungsaufgaben, config);
      },
      error: (error) => {
        console.error('Failed to load config:', error);
      }
    });
  }

  async loadTasks(type: string, targetArray: any[], config: any): Promise<void> {
    const tasks = config[type];
    if (tasks && Array.isArray(tasks)) {
      for (const [index, task] of tasks.entries()) {
        const url = `assets/${type}/${task.filename}.json`;
        try {
          const data = await firstValueFrom(this.http.get(url));
          targetArray[index] = data;
        } catch (error) {
          console.error(`Failed to load ${type}/${task.filename}:`, error);
        }
      }
    } else {
      console.warn(`No tasks found for type: ${type}`);
    }
  }

  async fetchJSON(type: string, name: string) {
    const response = await fetch(
      environment.baseURL + '/assets/' + type + '/' + name + '.json'
    );
    const json = await response.json();
    return json;
  }
}
