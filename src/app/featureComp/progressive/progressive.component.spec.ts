import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressiveComponent } from './progressive.component';

describe('ProgressiveComponent', () => {
  let component: ProgressiveComponent;
  let fixture: ComponentFixture<ProgressiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgressiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
