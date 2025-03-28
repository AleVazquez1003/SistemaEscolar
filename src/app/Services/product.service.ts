import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Data/interface/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urlApi ="https://localhost:7034/api/v1/Product"; 

  constructor(private http: HttpClient) { }

  // LISTADO DE PRODUCTOS
  public getProducts(): Observable <Product[]>{
    return this.http.get<Product[]>(this.urlApi);
  }

  // LISTA PRODUCTOS POR ID
  public getById(id:number):Observable <Product>
  {
    return this.http.get<Product>(`${this.urlApi}/${id}`);
  }

  // INSERTAR PRODUCTOS
  public postProduct(product: Product): Observable<Product>
  {
    return this.http.post<Product>(this.urlApi,product);
  }

  // actualizar un producto
  public updateProduct(id:number,product: Product): Observable<Product>
  {
    return this.http.put<Product>(`${this.urlApi}/${id}`,product);
  }


  // eliminar un producto
  public deleteProduct(id:number) : Observable <void>
  {
    return this.http.delete<void> (`${this.urlApi}/${id}`);
  }


}
