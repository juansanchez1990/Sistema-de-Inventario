import { Pipe, PipeTransform } from '@angular/core';
import { Colaborador } from '../../colaboradores/models/colaborador';
import { ColaboradorAsignar } from '../models/colaborarorAsignar';

@Pipe({
  name: 'buscarColaborador'
})
export class BuscarColaboradorPipe implements PipeTransform {

  transform(Colaborador: ColaboradorAsignar[], Descripcion: any): ColaboradorAsignar[] {
    if (!Colaborador || !Descripcion){
    return Colaborador
    }
    return Colaborador.filter(co=>co.nombre_completo.toLowerCase().includes(Descripcion.toLowerCase()                        
    ))
  }

}
