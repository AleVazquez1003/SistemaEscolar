import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classroom } from '../Data/interface/classroom.model';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  //Definir una propiedead de tipo URL
  private urlAPI = 'http://localhost:5268/api/v1/Classroom'

  //Despues vamos a inyectar HttpClient
  constructor(private http: HttpClient) { }

  // Listado de productos
    //Creamos metodo para obtener los productos
    public getClassrooms() : Observable<Classroom[]> {
      return this.http.get<Classroom[]>(this.urlAPI);
    }
  
    // Obtiene un producto
    //Observable representa una secuencia de datos(que es lo que vamos a recibir)
    public getById(id: number) : Observable<Classroom>{
      return this.http.get<Classroom>(`${this.urlAPI}/${id}`);
    }
  
    // Crear un nuevo producto
    public postClassroom(classroom: Classroom):Observable<Classroom>{
      return this.http.post<Classroom>(this.urlAPI, classroom);
    }
  
    //ACtualizar un producto
    public updateClassroom(id: number, classroom: Classroom) :Observable<Classroom>{
      return this.http.put<Classroom>(`${this.urlAPI}/${id}`, classroom);
    }
  
    //ACtualizar un producto
    //se pone void porque no regresa nada
    public deleteClassroom(id: number) :Observable<void>{
      return this.http.delete<void>(`${this.urlAPI}/${id}`);
    }
}
