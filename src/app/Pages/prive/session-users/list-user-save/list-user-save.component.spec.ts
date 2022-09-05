import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserSaveComponent } from './list-user-save.component';

describe('ListUserSaveComponent', () => {
  let component: ListUserSaveComponent;
  let fixture: ComponentFixture<ListUserSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUserSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
