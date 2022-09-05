import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionUsersComponent } from './session-users.component';

describe('SessionUsersComponent', () => {
  let component: SessionUsersComponent;
  let fixture: ComponentFixture<SessionUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
