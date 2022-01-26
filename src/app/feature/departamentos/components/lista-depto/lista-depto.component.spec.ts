import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeptoComponent } from './lista-depto.component';

describe('ListaDeptoComponent', () => {
  let component: ListaDeptoComponent;
  let fixture: ComponentFixture<ListaDeptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
