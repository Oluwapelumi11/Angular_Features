import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingFeatureComponent } from './routing-feature.component';

describe('RoutingFeatureComponent', () => {
  let component: RoutingFeatureComponent;
  let fixture: ComponentFixture<RoutingFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingFeatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoutingFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
