import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../Data/interface/Student.model';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private urlApi="http://localhost:5268/api/Student";

  constructor(private http: HttpClient) { }

    // LISTADO DE PRODUCTOS
    public getStudent(): Observable <Student[]>{
      return this.http.get<Student[]>(this.urlApi);
    }

    // LISTA PRODUCTOS POR ID
      public getById(id:number):Observable <Student>
      {
        return this.http.get<Student>(`${this.urlApi}/${id}`);
      }
}
