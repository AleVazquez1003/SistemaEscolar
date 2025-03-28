
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../Data/interface/course.model';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../Data/interface/Course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {


  //Definir una propiedead de tipo URL (CAMBIAR URL)
  private urlAPI = 'http://localhost:5268/api/Course'

  constructor(private http: HttpClient) { }
  // Listado de productos
    //Creamos metodo para obtener los productos
    public getCourses() : Observable<Course[]> {
      return this.http.get<Course[]>(this.urlAPI);
    }
  
    // Obtiene un producto
    //Observable representa una secuencia de datos(que es lo que vamos a recibir)
    public getById(id: number) : Observable<Course>{
      return this.http.get<Course>(`${this.urlAPI}/${id}`);
    }
  
    // Crear un nuevo producto
    public postCourse(course: Course):Observable<Course>{
      return this.http.post<Course>(this.urlAPI, course);
    }
  
    //ACtualizar un producto
    public updateCourse(id: number, course: Course) :Observable<Course>{
      return this.http.put<Course>(`${this.urlAPI}/${id}`, course);
    }
  
    //ACtualizar un producto
    //se pone void porque no regresa nada
    public deleteCourse(id: number) :Observable<void>{
      return this.http.delete<void>(`${this.urlAPI}/${id}`);
    }

  
  private urlApi = "http://localhost:5268/api/Course";

  constructor(private http: HttpClient) { }
  
  
    // list course
    public getCourse(): Observable <Course[]>{
      return this.http.get<Course[]>(this.urlApi);
    }

    // LISTA PRODUCTOS POR ID
      public getById(id:number):Observable <Course>
      {
        return this.http.get<Course>(`${this.urlApi}/${id}`);
      }


}
