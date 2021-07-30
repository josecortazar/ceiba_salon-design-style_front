import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarItemreservaComponent } from './listar-itemreserva.component';

describe('ListarItemreservaComponent', () => {
  let component: ListarItemreservaComponent;
  let fixture: ComponentFixture<ListarItemreservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarItemreservaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarItemreservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
