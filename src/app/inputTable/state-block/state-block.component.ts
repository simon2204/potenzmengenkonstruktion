import {Component, EventEmitter, HostBinding, Input, Output} from '@angular/core'; // Import HostBinding
import {CommonModule} from '@angular/common';
import {StateStatus} from "../stateStatus";

@Component({
  selector: 'app-state-block',
  templateUrl: './state-block.component.html',
  styleUrls: ['./state-block.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class StateBlockComponent {
  @Input() state: string = '';
  @Input() removable: boolean = true;
  @Input() status: StateStatus = StateStatus.original; // <-- Neuer Input
  @Output() remove = new EventEmitter<void>();

  // Use HostBinding for easier class application based on status
  @HostBinding('class.correct') get isCorrect() { return this.status === StateStatus.correct; }
  @HostBinding('class.incorrect') get isIncorrect() { return this.status === StateStatus.incorrect; }
  @HostBinding('class.missing') get isMissing() { return this.status === StateStatus.missing; }
  @HostBinding('class.original') get isOriginal() { return this.status === StateStatus.original; }
  @HostBinding('style.opacity') get opacity() {
    return '1';
  }


  getBackgroundColor(): string {
    // Adjust background based on status if needed, otherwise rely on CSS classes
    switch (this.status) {
      case StateStatus.correct: return '#e5e7eb'; // Light Green
      case StateStatus.incorrect: return '#ef444420'; // Light Red
      case StateStatus.missing: return '#a7f3d0'; // Lighter Green / Teal variant for missing
      case StateStatus.original: return '#e5e7eb'; // Standard light gray background for original/edit mode
      default: return '#f3f4f6'; // Fallback background
    }
  }

  getTextColor(): string {
    // Adjust text color based on status if needed, otherwise rely on CSS classes
    switch (this.status) {
      case StateStatus.correct: return '#1f2937'; // Dark Green
      case StateStatus.incorrect: return '#b91c1c'; // Dark Red
      case StateStatus.missing: return '#065f46'; // Darker Green / Teal
      default: return '#1f2937'; // Original color
    }
  }

  removeState(event: Event): void {
    if (!this.removable) return; // Prevent removal if not removable (e.g., in check mode)
    event.stopPropagation();
    this.remove.emit();
  }
}