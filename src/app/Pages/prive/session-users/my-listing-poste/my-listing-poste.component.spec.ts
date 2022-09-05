import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListingPosteComponent } from './my-listing-poste.component';

describe('MyListingPosteComponent', () => {
  let component: MyListingPosteComponent;
  let fixture: ComponentFixture<MyListingPosteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyListingPosteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyListingPosteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
