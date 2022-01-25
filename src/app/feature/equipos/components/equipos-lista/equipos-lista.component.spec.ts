import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposListaComponent } from './equipos-lista.component';

describe('EquiposListaComponent', () => {
  let component: EquiposListaComponent;
  let fixture: ComponentFixture<EquiposListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquiposListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiposListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
