import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginComponent } from "./login/login.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, LoginComponent]
})
export class AppComponent {
  title = 'tienda_frond';
}




function login() {
  throw new Error('Function not implemented.');
}
