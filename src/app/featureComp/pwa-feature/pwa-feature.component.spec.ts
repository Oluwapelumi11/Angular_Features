import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwaFeatureComponent } from './pwa-feature.component';

describe('PwaFeatureComponent', () => {
  let component: PwaFeatureComponent;
  let fixture: ComponentFixture<PwaFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PwaFeatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PwaFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
