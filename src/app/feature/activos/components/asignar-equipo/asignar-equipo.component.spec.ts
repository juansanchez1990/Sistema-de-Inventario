import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarEquipoComponent } from './asignar-equipo.component';

describe('AsignarEquipoComponent', () => {
  let component: AsignarEquipoComponent;
  let fixture: ComponentFixture<AsignarEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarEquipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
