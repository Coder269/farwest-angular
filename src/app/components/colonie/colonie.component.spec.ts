import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColonieComponent } from './colonie.component';

describe('ColonieComponent', () => {
  let component: ColonieComponent;
  let fixture: ComponentFixture<ColonieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColonieComponent]
    });
    fixture = TestBed.createComponent(ColonieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
