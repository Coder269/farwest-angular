import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateColonyComponent } from './create-colony.component';

describe('CreateColonyComponent', () => {
  let component: CreateColonyComponent;
  let fixture: ComponentFixture<CreateColonyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateColonyComponent]
    });
    fixture = TestBed.createComponent(CreateColonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
