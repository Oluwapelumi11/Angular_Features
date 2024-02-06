import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualReactiveComponent } from './actual-reactive.component';

describe('ActualReactiveComponent', () => {
  let component: ActualReactiveComponent;
  let fixture: ComponentFixture<ActualReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualReactiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
