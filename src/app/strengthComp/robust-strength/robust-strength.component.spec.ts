import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobustStrengthComponent } from './robust-strength.component';

describe('RobustStrengthComponent', () => {
  let component: RobustStrengthComponent;
  let fixture: ComponentFixture<RobustStrengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RobustStrengthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RobustStrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
