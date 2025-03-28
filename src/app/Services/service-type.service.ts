import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  // Get by Id
    public getById(id:number):Observable <servicetype>
    {
      return this.http.get<servicetype>(`${this.urlApi}/${id}`);
    }
  
    // Create Servicice
    public postService(product: servicetype): Observable<servicetype>
    {
      return this.http.post<servicetype>(this.urlApi,product);
    }
  
    // Update Service
    public updateService(id:number,service: servicetype): Observable<servicetype>
    {
      return this.http.put<servicetype>(`${this.urlApi}/${id}`,service);
    }
  
  
    // Delete Justifications
    public deleteJustifications(id:number) : Observable <void>
    {
      return this.http.delete<void> (`${this.urlApi}/${id}`);
    }

 
  


}
