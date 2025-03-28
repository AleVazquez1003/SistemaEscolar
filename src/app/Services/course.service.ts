import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../Data/interface/Course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  
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
