import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DfaSolutionTableComponent } from './dfa-solution-table.component';

describe('DfaSolutionTableComponent', () => {
  let component: DfaSolutionTableComponent;
  let fixture: ComponentFixture<DfaSolutionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DfaSolutionTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DfaSolutionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
