import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestForHelpComponent } from './request-for-help.component';

describe('RequestForHelpComponent', () => {
  let component: RequestForHelpComponent;
  let fixture: ComponentFixture<RequestForHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestForHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestForHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
