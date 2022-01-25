import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposEquipoComponent } from './tipos-equipo.component';

describe('TiposEquipoComponent', () => {
  let component: TiposEquipoComponent;
  let fixture: ComponentFixture<TiposEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposEquipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
