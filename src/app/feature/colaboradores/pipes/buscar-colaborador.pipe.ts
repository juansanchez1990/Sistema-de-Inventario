import { Pipe, PipeTransform } from '@angular/core';
import { Colaborador } from '../models/colaborador';

@Pipe({
  name: 'buscarColaborador'
})
export class BuscarColaboradorPipe implements PipeTransform {

  transform(Colaborador: Colaborador[], Descripcion: any): Colaborador[] {
    if (!Colaborador || !Descripcion){
    return Colaborador
    }
    return Colaborador.filter(co=>co.nombre_completo.toLowerCase().includes(Descripcion.toLowerCase()                        
    ))
  }

}
