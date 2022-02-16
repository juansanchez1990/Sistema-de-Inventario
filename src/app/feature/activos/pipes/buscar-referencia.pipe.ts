import { Pipe, PipeTransform } from '@angular/core';
import { Equipo } from '../models/equipo';

@Pipe({
  name: 'buscarReferencia'
})
export class BuscarReferenciaPipe implements PipeTransform {

  transform(Equipo: Equipo[], Referencia: any): Equipo[] {
    if (!Equipo || !Referencia){
    return Equipo
    }
    return Equipo.filter(equipo=>equipo.Referencia.toLowerCase().includes(Referencia.toLowerCase()                        
    ))
  }

}
