import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Schedule } from '../Data/interface/Schedule.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private urlApi = "http://localhost:5268/api/Schedule";

  constructor(private http: HttpClient) { }

  // List Schedule
  public getSchedule(): Observable <Schedule[]>{
    return this.http.get<Schedule[]>(this.urlApi);
  }

  // List by Id
  public getById(id:number):Observable <Schedule>
  {
    return this.http.get<Schedule>(`${this.urlApi}/${id}`);
  }

  // insert Schedule
  public postSchedule(schedule: Schedule): Observable<Schedule>
  {
    return this.http.post<Schedule>(this.urlApi,schedule);
  }

  // Update Schedule
  public updateSchedule(id:number,schedule: Schedule): Observable<Schedule>
  {
    return this.http.put<Schedule>(`${this.urlApi}/${id}`,schedule);
  }


  // Delete Schedule
  public deleteProduct(id:number) : Observable <void>
  {
    return this.http.delete<void> (`${this.urlApi}/${id}`);
  }



}
