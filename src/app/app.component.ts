import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
/*import { NgForm } from '@angular/forms';*/
import { LoginComponent } from "./login/login.component";
import { PruebasComponent } from "./pruebas/pruebas.component";
import { PaginaPrincipalComponent } from "./pagina-principal/pagina-principal.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, LoginComponent, PruebasComponent, PaginaPrincipalComponent]
})
export class AppComponent { 
  title = 'tienda_frond';
}





