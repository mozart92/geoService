import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarProfileComponent } from './bar-profile.component';

describe('BarProfileComponent', () => {
  let component: BarProfileComponent;
  let fixture: ComponentFixture<BarProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
