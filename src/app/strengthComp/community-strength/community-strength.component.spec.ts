import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityStrengthComponent } from './community-strength.component';

describe('CommunityStrengthComponent', () => {
  let component: CommunityStrengthComponent;
  let fixture: ComponentFixture<CommunityStrengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityStrengthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommunityStrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
