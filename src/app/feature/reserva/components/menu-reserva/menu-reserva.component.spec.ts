import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuReservaComponent } from './menu-reserva.component';

describe('MenuReservaComponent', () => {
  let component: MenuReservaComponent;
  let fixture: ComponentFixture<MenuReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuReservaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
