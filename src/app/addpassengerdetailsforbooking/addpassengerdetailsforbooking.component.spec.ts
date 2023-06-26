import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpassengerdetailsforbookingComponent } from './addpassengerdetailsforbooking.component';

describe('AddpassengerdetailsforbookingComponent', () => {
  let component: AddpassengerdetailsforbookingComponent;
  let fixture: ComponentFixture<AddpassengerdetailsforbookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddpassengerdetailsforbookingComponent]
    });
    fixture = TestBed.createComponent(AddpassengerdetailsforbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
