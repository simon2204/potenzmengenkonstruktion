import { Component } from '@angular/core';
import { StatemachineService } from '../statemachine/statemachine.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-testcasebutton',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './testcasebutton.component.html',
  styleUrl: './testcasebutton.component.scss'
})
export class TestcasebuttonComponent {
  constructor(public service: StatemachineService) { }

  get testCaseViewIsVisible(): boolean {
    return this.service.testCaseViewIsVisible;
  }

  toggleTestcaseView(): void {
    this.service.testCaseViewIsVisible = !this.service.testCaseViewIsVisible;
    this.service.testcaseViewToggled?.();
  }
}
