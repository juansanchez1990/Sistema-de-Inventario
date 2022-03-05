import { Pipe, PipeTransform } from '@angular/core';
import { Departamento } from '../models/departamento';

@Pipe({
  name: 'buscarDepto'
})
export class BuscarDeptoPipe implements PipeTransform {


  transform(Depto: Departamento[], Descripcion: any): Departamento[] {
    if (!Depto || !Descripcion){
      return Depto
      }
      return Depto.filter(Depto=>Depto.Descripcion.toLowerCase().includes(Descripcion.toLowerCase()
  
  
              
                            
                                
      ))
  
  

  }

}
