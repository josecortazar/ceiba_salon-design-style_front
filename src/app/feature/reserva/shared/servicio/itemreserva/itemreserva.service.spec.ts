import { TestBed } from '@angular/core/testing';

import { ItemreservaService } from './itemreserva.service';

describe('ItemreservaService', () => {
  let service: ItemreservaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemreservaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
