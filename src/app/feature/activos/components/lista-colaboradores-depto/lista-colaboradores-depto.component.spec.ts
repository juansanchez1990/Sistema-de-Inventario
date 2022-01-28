import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaColaboradoresDeptoComponent } from './lista-colaboradores-depto.component';

describe('ListaColaboradoresDeptoComponent', () => {
  let component: ListaColaboradoresDeptoComponent;
  let fixture: ComponentFixture<ListaColaboradoresDeptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaColaboradoresDeptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaColaboradoresDeptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
