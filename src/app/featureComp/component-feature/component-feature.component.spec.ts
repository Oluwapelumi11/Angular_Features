import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentFeatureComponent } from './component-feature.component';

describe('ComponentFeatureComponent', () => {
  let component: ComponentFeatureComponent;
  let fixture: ComponentFixture<ComponentFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentFeatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
