import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Data/interface/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


   //Definir una propiedead de tipo URL (CAMBIAR URL)
   private urlAPI = 'http://localhost:5268/api/Student'

   constructor(private http: HttpClient) { }
 
     //Creamos metodo para obtener los productos
     public getStudents() : Observable<Student[]> {
       return this.http.get<Student[]>(this.urlAPI);
     }
   
     //Observable representa una secuencia de datos(que es lo que vamos a recibir)
     public getById(id: number) : Observable<Student>{
       return this.http.get<Student>(`${this.urlAPI}/${id}`);
     }
   
     public postStudent(student: Student):Observable<Student>{
       return this.http.post<Student>(this.urlAPI, student);
     }
   
     public updateStudent(id: number, student: Student) :Observable<Student>{
       return this.http.put<Student>(`${this.urlAPI}/${id}`, student);
     }
   
     //se pone void porque no regresa nada
     public deleteStudent(id: number) :Observable<void>{
       return this.http.delete<void>(`${this.urlAPI}/${id}`);
     }
  
}
