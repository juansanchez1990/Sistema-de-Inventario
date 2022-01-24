import { Injectable } from '@angular/core';
import { Location } from '@angular/common'
import { MatSidenav } from '@angular/material/sidenav';
import { Router, NavigationEnd } from '@angular/router'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  public href: string = "";
  private historial: string[] = []
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
  constructor(private router: Router, private location: Location) { 

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.historial.push(event.urlAfterRedirects)
      }
    })

  }

   back(): void {
    this.historial.pop()
    if (this.historial.length > 0) {
      this.location.back()

      setTimeout(()=>{                        
        this.href = String(this.router.url).substring(1);
     
      this.enviarNombre(this.href)
    }, 15);
    } else {
      this.router.navigateByUrl('/')
    }
  }
 enviarNombre(nombre:string){
   this.NombreTitulo.next(nombre);

 }
}
