import { Pipe, PipeTransform } from '@angular/core';
import { ListaEquipo } from '../models/lista-equipo';

@Pipe({
  name: 'buscarEquipo'
})
export class BuscarEquipoPipe implements PipeTransform {

  transform(Equipo: ListaEquipo[], nombre: any): ListaEquipo[] {
    if (!Equipo || !nombre){
    return Equipo
    }
    return Equipo.filter(equipo=>equipo.Descripcion.toLowerCase().includes(nombre.toLowerCase()


            
                          
                              
    ))


            
                          
                              
   
  }

}
