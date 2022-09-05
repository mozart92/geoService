import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyoutPrincipalComponent } from './loyout-principal.component';

describe('LoyoutPrincipalComponent', () => {
  let component: LoyoutPrincipalComponent;
  let fixture: ComponentFixture<LoyoutPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoyoutPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyoutPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
