import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestForCoachComponent } from './request-for-coach.component';

describe('RequestForCoachComponent', () => {
  let component: RequestForCoachComponent;
  let fixture: ComponentFixture<RequestForCoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestForCoachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestForCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
