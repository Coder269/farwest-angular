import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalResultLostComponent } from './modal-result-lost.component';

describe('ModalResultLostComponent', () => {
  let component: ModalResultLostComponent;
  let fixture: ComponentFixture<ModalResultLostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalResultLostComponent]
    });
    fixture = TestBed.createComponent(ModalResultLostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
