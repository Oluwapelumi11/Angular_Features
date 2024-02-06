import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialFeatureComponent } from './material-feature.component';

describe('MaterialFeatureComponent', () => {
  let component: MaterialFeatureComponent;
  let fixture: ComponentFixture<MaterialFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialFeatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
