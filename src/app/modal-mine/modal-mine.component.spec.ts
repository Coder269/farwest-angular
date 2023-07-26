import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMineComponent } from './modal-mine.component';

describe('ModalMineComponent', () => {
  let component: ModalMineComponent;
  let fixture: ComponentFixture<ModalMineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalMineComponent]
    });
    fixture = TestBed.createComponent(ModalMineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
