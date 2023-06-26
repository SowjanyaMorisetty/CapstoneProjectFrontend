import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewscheduleComponent } from './viewschedule.component';

describe('ViewscheduleComponent', () => {
  let component: ViewscheduleComponent;
  let fixture: ComponentFixture<ViewscheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewscheduleComponent]
    });
    fixture = TestBed.createComponent(ViewscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
