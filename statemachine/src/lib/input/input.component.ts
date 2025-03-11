import { Component, Input, OnInit } from '@angular/core';
import { StatemachineService } from '../statemachine/statemachine.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements OnInit {

  @Input() title: string = '';

  constructor(public service: StatemachineService) {}

  ngOnInit(): void {
    this.setContent('');
  }

  setContent(tapecontent: string) {
    this.service.inputChanged(tapecontent);
  }

  updateContent(event: any) {
    this.setContent(event.target.value);
  }

  isReady(): boolean {
    return this.service.isStartStateDefined();
  }

  isAccepting(): boolean {
    return this.service.isAccepting()!;
  }
}
