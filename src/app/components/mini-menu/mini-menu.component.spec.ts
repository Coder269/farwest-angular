import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniMenuComponent } from './mini-menu.component';

describe('MiniMenuComponent', () => {
  let component: MiniMenuComponent;
  let fixture: ComponentFixture<MiniMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiniMenuComponent]
    });
    fixture = TestBed.createComponent(MiniMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
