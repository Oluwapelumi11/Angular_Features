import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsrFeatureComponent } from './ssr-feature.component';

describe('SsrFeatureComponent', () => {
  let component: SsrFeatureComponent;
  let fixture: ComponentFixture<SsrFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SsrFeatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SsrFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
