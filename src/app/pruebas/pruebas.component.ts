import { Component, OnInit } from '@angular/core';
import { Producto } from '../objetos/producto';
import { ProductoService } from '../servicios/producto.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pruebas',
  standalone: true,
  imports: [],
  templateUrl: './pruebas.component.html',
  styleUrl: './pruebas.component.css'
})
export class PruebasComponent /*implements OnInit*/ {
 /* productos: Producto[] = [];

  constructor(private productoService: ProductoService){

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
    this.productoService.getproductos().subscribe(
      data => this.productos = data
    );
  }*/

}
