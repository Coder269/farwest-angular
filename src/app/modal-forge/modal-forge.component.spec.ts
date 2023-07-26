import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalForgeComponent } from './modal-forge.component';

describe('ModalForgeComponent', () => {
  let component: ModalForgeComponent;
  let fixture: ComponentFixture<ModalForgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalForgeComponent]
    });
    fixture = TestBed.createComponent(ModalForgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
