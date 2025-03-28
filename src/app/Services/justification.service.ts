import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Justifications } from '../Data/interface/Justifications.model';

@Injectable({
  providedIn: 'root'
})
export class JustificationService {

  private urlApi ="http://localhost:5268/api/Justification";

  constructor(private http : HttpClient) { }

  // Get all
  public getJustifications(): Observable <Justifications[]>{
    return this.http.get<Justifications[]>(this.urlApi);
  }

  // Get by Id
  public getById(id:number):Observable <Justifications>
  {
    return this.http.get<Justifications>(`${this.urlApi}/${id}`);
  }

  // Create Justifications
  public postJustifications(product: Justifications): Observable<Justifications>
  {
    return this.http.post<Justifications>(this.urlApi,product);
  }

  // Update Justifications
  public updateJustifications(id:number,product: Justifications): Observable<Justifications>
  {
    return this.http.put<Justifications>(`${this.urlApi}/${id}`,product);
  }


  // Delete Justifications
  public deleteJustifications(id:number) : Observable <void>
  {
    return this.http.delete<void> (`${this.urlApi}/${id}`);
  }

}
