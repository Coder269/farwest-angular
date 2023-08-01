import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackComponent } from './attack.component';

describe('AttackComponent', () => {
  let component: AttackComponent;
  let fixture: ComponentFixture<AttackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttackComponent]
    });
    fixture = TestBed.createComponent(AttackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
