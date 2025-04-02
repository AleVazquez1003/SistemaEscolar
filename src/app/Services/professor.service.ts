import { Injectable } from '@angular/core';
import { Professor } from '../Data/interface/professor.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService 
{
  private UrlAPI = 'http://localhost:5268/api/v1/Professor';

  constructor(private http: HttpClient) 
  { 

  }

  public GetProfessor(): Observable<Professor[]>
  {
    return this.http.get<Professor[]>(this.UrlAPI);
  }

  public GetById(id: number): Observable<Professor> {
    return this.http.get<Professor>(`${this.UrlAPI}/${id}`);
  }
  
  public CreateProfessor(professor: Professor): Observable<Professor>
  {
    return this.http.post<Professor>(this.UrlAPI, professor);
  }

  public UpdateProfessor(id: number, professor: Professor): Observable<Professor>
  {
    return this.http.put<Professor>(`${this.UrlAPI}/${id}`, professor);
  }

  public DeleteProfessor(id: number): Observable<void>
  {
    return this.http.delete<void>(`${this.UrlAPI}/${id}`);
  }

}
