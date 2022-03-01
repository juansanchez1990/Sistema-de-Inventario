import { Pipe, PipeTransform } from '@angular/core';
import { Equipo } from '../models/equipo';

@Pipe({
  name: 'buscarDescripcion'
})
export class BuscarDescripcionPipe implements PipeTransform {

  transform(Equipo: Equipo[], Descripcion: any): Equipo[] {
    if (!Equipo || !Descripcion){
    return Equipo
    }
    return Equipo.filter(equipo=>equipo.Descripcion.toLowerCase().includes(Descripcion.toLowerCase()                        
    ))
  }

}
