import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateBlockComponent } from './state-block.component';

describe('StateBlockComponent', () => {
  let component: StateBlockComponent;
  let fixture: ComponentFixture<StateBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StateBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
