import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Assignment } from '../Data/interface/Assignment.model';


@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  private urlApi="http://localhost:5268/api/Assignment";
  
  constructor(private http: HttpClient) { }

   // List Assignment
   public getAssigment(): Observable <Assignment[]>{
    return this.http.get<Assignment[]>(this.urlApi);
  }

  // List by Id Assingment
  public getById(id:number):Observable <Assignment>
  {
    return this.http.get<Assignment>(`${this.urlApi}/${id}`);
  }

  // Create Assignment
  public postAssignment(assignment: Assignment): Observable<Assignment>
  {
    return this.http.post<Assignment>(this.urlApi,assignment);
  }

  // Update Assignment
  public updateAssignment(id:number,assignment: Assignment): Observable<Assignment>
  {
    return this.http.put<Assignment>(`${this.urlApi}/${id}`,assignment);
  }


  // eliminar un producto
  public deleteAssignment(id:number) : Observable <void>
  {
    return this.http.delete<void> (`${this.urlApi}/${id}`);
  }

}
