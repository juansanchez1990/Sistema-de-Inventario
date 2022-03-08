import { Pipe, PipeTransform } from '@angular/core';
import { DeptoSucursal } from '../models/deptoSucursal';

@Pipe({
  name: 'buscarDepto'
})
export class BuscarDeptoPipe implements PipeTransform {

  transform(Depto: DeptoSucursal[], Descripcion: any): DeptoSucursal[] {
    if (!Depto || !Descripcion){
    return Depto
    }
    return Depto.filter(d=>d.nombreDepartamento.toLowerCase().includes(Descripcion.toLowerCase()                        
    ))
  }
}
