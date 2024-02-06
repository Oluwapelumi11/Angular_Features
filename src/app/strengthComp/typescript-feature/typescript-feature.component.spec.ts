import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptFeatureComponent } from './typescript-feature.component';

describe('TypescriptFeatureComponent', () => {
  let component: TypescriptFeatureComponent;
  let fixture: ComponentFixture<TypescriptFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypescriptFeatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypescriptFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
