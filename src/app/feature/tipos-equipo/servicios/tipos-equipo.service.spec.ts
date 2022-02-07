import { TestBed } from '@angular/core/testing';

import { TiposEquipoService } from './tipos-equipo.service';

describe('TiposEquipoService', () => {
  let service: TiposEquipoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiposEquipoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
