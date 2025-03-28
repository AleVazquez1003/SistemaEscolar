import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { servicetype } from '../Data/interface/servicetype.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceTypeService {
  private urlApi = 'http://localhost:4200/api/ServiceType';
  constructor(private http: HttpClient) { }
  
  public getServiceTypes(): Observable<servicetype[]>{
    return this.http.get<servicetype[]>(this.urlApi);
  }

  public getById(id: number): Observable<servicetype>{
    return this.http.get<servicetype>(`${this.urlApi}/${id}`)
  }

  public postServiceTypes(serviceType:servicetype): Observable<servicetype>{
    return this.http.post<servicetype>(this.urlApi, serviceType);
  }

  public updateServiceTypes(id: number, serviceType: servicetype): Observable<servicetype>{
    return this.http.put<servicetype>(`${this.urlApi}/${id}`, serviceType);
  }

  public deleteServiceTypes(id: number):Observable<void>{
    return this.http.delete<void>(`${this.urlApi}/${id}`);
  }
}
