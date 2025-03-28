import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../Data/interface/category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private urlApi="https://localhost:7034/api/v1/Category";

  constructor(private http: HttpClient) { }

    // LISTADO DE PRODUCTOS
    public getCategory(): Observable <Category[]>{
      return this.http.get<Category[]>(this.urlApi);
    }

    // LISTA PRODUCTOS POR ID
      public getById(id:number):Observable <Category>
      {
        return this.http.get<Category>(`${this.urlApi}/${id}`);
      }

      // INSERTAR PRODUCTOS
    public postCategory(category: Category): Observable<Category>
    {
      return this.http.post<Category>(this.urlApi,category);
    }

    // actualizar un producto
    public updateCategory(id:number,category: Category): Observable<Category>
    {
      return this.http.put<Category>(`${this.urlApi}/${id}`,category);
    }


    // eliminar un producto
    public deleteCategory(id:number) : Observable <void>
    {
      return this.http.delete<void> (`${this.urlApi}/${id}`);
    }

}
