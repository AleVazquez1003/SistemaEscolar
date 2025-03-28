import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service } from '../Data/interface/Service.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private urlApi ="http://localhost:5268/api/Service"; 

  constructor(private http: HttpClient) { }

  // Get all
  public getServices(): Observable <Service[]>{
    return this.http.get<Service[]>(this.urlApi);
  }

  // get by id
  public getById(id:number):Observable <Service>
  {
    return this.http.get<Service>(`${this.urlApi}/${id}`);
  }

  // create Service
  public postService(Service: Service): Observable<Service>
  {
    return this.http.post<Service>(this.urlApi,Service);
  }

  // update a service
  public updateService(id:number,service: Service): Observable<Service>
  {
    return this.http.put<Service>(`${this.urlApi}/${id}`,service);
  }


  // updata service
  public deleteService(id:number) : Observable <void>
  {
    return this.http.delete<void> (`${this.urlApi}/${id}`);
  }







}
