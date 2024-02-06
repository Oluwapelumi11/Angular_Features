import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthertoolsstrenghtComponent } from './othertoolsstrenght.component';

describe('OthertoolsstrenghtComponent', () => {
  let component: OthertoolsstrenghtComponent;
  let fixture: ComponentFixture<OthertoolsstrenghtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OthertoolsstrenghtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OthertoolsstrenghtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
