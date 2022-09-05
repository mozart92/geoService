import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarNavigatePrivateComponent } from './bar-navigate-private.component';

describe('BarNavigatePrivateComponent', () => {
  let component: BarNavigatePrivateComponent;
  let fixture: ComponentFixture<BarNavigatePrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarNavigatePrivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarNavigatePrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
