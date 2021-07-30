import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearItemreservaComponent } from './crear-itemreserva.component';

describe('CrearItemreservaComponent', () => {
  let component: CrearItemreservaComponent;
  let fixture: ComponentFixture<CrearItemreservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearItemreservaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearItemreservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
