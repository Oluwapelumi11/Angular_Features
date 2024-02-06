import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFeatureComponent } from './reactive-feature.component';

describe('ReactiveFeatureComponent', () => {
  let component: ReactiveFeatureComponent;
  let fixture: ComponentFixture<ReactiveFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFeatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
