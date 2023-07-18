import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostPasswordComponent } from './lost-password.component';

describe('LostPasswordComponent', () => {
  let component: LostPasswordComponent;
  let fixture: ComponentFixture<LostPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LostPasswordComponent]
    });
    fixture = TestBed.createComponent(LostPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
