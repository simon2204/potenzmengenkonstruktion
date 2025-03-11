import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-state-block',
  templateUrl: './state-block.component.html',
  styleUrls: ['./state-block.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class StateBlockComponent {
  @Input() state: string = '';
  @Input() color: string = '#000000';
  @Input() removable: boolean = true;
  @Output() remove = new EventEmitter<void>();

  getBackgroundColor(): string {
    // Erstellt eine helle Version der Farbe für den Hintergrund
    return `${this.color}20`; // 20 ist die Hex-Opazität (12.5%)
  }

  removeState(event: Event): void {
    event.stopPropagation(); // Verhindert das Bubbling des Events zur Elternzelle
    this.remove.emit();
  }
}