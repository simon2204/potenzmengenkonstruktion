import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core'; // Import HostBinding
import { CommonModule } from '@angular/common';

export type StateStatus = 'original' | 'correct' | 'incorrect' | 'missing'; // Define possible statuses

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
  @Input() status: StateStatus = 'original'; // <-- Neuer Input
  @Output() remove = new EventEmitter<void>();

  // Use HostBinding for easier class application based on status
  @HostBinding('class.correct') get isCorrect() { return this.status === 'correct'; }
  @HostBinding('class.incorrect') get isIncorrect() { return this.status === 'incorrect'; }
  @HostBinding('class.missing') get isMissing() { return this.status === 'missing'; }
  @HostBinding('class.original') get isOriginal() { return this.status === 'original'; }
  @HostBinding('style.opacity') get opacity() {
    // Optional: Slightly fade original blocks in check mode if needed
    // return this.status === 'original' && !this.removable ? '0.7' : '1';
    return '1';
  }

  getBackgroundColor(): string {
    // Adjust background based on status if needed, otherwise rely on CSS classes
    switch(this.status) {
      case 'correct': return '#22c55e20'; // Light Green
      case 'incorrect': return '#ef444420'; // Light Red
      case 'missing': return '#a7f3d0'; // Lighter Green / Teal variant
      default: return `${this.color}20`; // Original light color
    }
  }

  getTextColor(): string {
    // Adjust text color based on status if needed, otherwise rely on CSS classes
    switch(this.status) {
      case 'correct': return '#15803d'; // Dark Green
      case 'incorrect': return '#b91c1c'; // Dark Red
      case 'missing': return '#065f46'; // Darker Green / Teal
      default: return this.color; // Original color
    }
  }

  removeState(event: Event): void {
    if (!this.removable) return; // Prevent removal if not removable (e.g., in check mode)
    event.stopPropagation();
    this.remove.emit();
  }
}