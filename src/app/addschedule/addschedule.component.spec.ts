import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddscheduleComponent } from './addschedule.component';

describe('AddscheduleComponent', () => {
  let component: AddscheduleComponent;
  let fixture: ComponentFixture<AddscheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddscheduleComponent]
    });
    fixture = TestBed.createComponent(AddscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
