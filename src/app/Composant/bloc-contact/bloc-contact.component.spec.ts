import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocContactComponent } from './bloc-contact.component';

describe('BlocContactComponent', () => {
  let component: BlocContactComponent;
  let fixture: ComponentFixture<BlocContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
