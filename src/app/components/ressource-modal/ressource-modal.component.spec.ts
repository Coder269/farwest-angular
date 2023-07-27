import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourceModalComponent } from './ressource-modal.component';

describe('RessourceModalComponent', () => {
  let component: RessourceModalComponent;
  let fixture: ComponentFixture<RessourceModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RessourceModalComponent]
    });
    fixture = TestBed.createComponent(RessourceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
