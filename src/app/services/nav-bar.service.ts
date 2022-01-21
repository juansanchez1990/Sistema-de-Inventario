import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  NombreTitulo= new BehaviorSubject<any>('');
  private sidenav!: MatSidenav;
  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
}
public open() {
    return this.sidenav.open();
}
public close() {
    return this.sidenav.close();
}
public toggle(): void {
this.sidenav.toggle();
}
  constructor() { }
 enviarNombre(nombre:string){
   this.NombreTitulo.next(nombre);

 }
}
