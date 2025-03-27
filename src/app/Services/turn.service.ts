import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { turn } from '../Data/interface/turn.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TurnService {

  private urlApi = "http://localhost:5268/api/Turn";

  constructor(private http : HttpClient) { }

  // Turn list
  public getListTurn(): Observable <turn[]>{
    return this.http.get<turn[]>(this.urlApi);
  }

  // Turn List by Id
  public getById(id:number):Observable <turn>
  {
    return this.http.get<turn>(`${this.urlApi}/${id}`);
  }

  // create 
  public postTurn(turn: turn): Observable<turn>
  {
    return this.http.post<turn>(this.urlApi,turn);
  }

  // Update Turn
  public updateTurn(id:number,turn: turn): Observable<turn>
  {
    return this.http.put<turn>(`${this.urlApi}/${id}`,turn);
  }

  // Delete Turn
  public deleteTurn(id:number) : Observable <void>
  {
    return this.http.delete<void> (`${this.urlApi}/${id}`);
  }




}

