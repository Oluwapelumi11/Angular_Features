import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveFeatureComponent } from './directive-feature.component';

describe('DirectiveFeatureComponent', () => {
  let component: DirectiveFeatureComponent;
  let fixture: ComponentFixture<DirectiveFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveFeatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectiveFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
