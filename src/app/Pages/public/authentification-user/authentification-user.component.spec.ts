import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentificationUserComponent } from './authentification-user.component';

describe('AuthentificationUserComponent', () => {
  let component: AuthentificationUserComponent;
  let fixture: ComponentFixture<AuthentificationUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthentificationUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthentificationUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
