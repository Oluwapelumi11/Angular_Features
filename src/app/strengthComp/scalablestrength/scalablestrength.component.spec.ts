import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalablestrengthComponent } from './scalablestrength.component';

describe('ScalablestrengthComponent', () => {
  let component: ScalablestrengthComponent;
  let fixture: ComponentFixture<ScalablestrengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScalablestrengthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScalablestrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
