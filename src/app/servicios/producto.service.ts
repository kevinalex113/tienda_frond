import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../objetos/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl: string = "http://localhost:8085";

  constructor(private httpClient:HttpClient) { }

  getproductos():Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(this.apiUrl);
  }

  CrearProducto(formData:any):Observable<any>{
    return this.httpClient.post<Producto>(this.apiUrl,formData);
  }

  EliminarProductoID(id:number):Observable<any>{
    return this.httpClient.delete(this.apiUrl+"/"+id);

  }

  obtenerProductoID(id:number):Observable<Producto>{
    return this.httpClient.get<Producto>(this.apiUrl+"/"+id)
  }
}
