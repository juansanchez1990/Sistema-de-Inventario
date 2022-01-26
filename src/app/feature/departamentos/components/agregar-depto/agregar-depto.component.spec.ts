import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarDeptoComponent } from './agregar-depto.component';

describe('AgregarDeptoComponent', () => {
  let component: AgregarDeptoComponent;
  let fixture: ComponentFixture<AgregarDeptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarDeptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarDeptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
