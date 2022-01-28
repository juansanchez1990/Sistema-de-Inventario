import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeptoAsignarComponent } from './lista-depto-asignar.component';

describe('ListaDeptoAsignarComponent', () => {
  let component: ListaDeptoAsignarComponent;
  let fixture: ComponentFixture<ListaDeptoAsignarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeptoAsignarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeptoAsignarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
