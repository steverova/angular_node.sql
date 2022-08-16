import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Person from '../models/persona.model';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  uri = 'http://localhost:5000/api-person';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getAllPerson(): Observable<Person[]> {
    return this.http
      .get<Person[]>(this.uri)
      .pipe(tap((_) => console.log('fetched person')));
  }

  addPerson(person: any): Observable<Person> {
    return this.http.post<any>(this.uri, person, this.httpOptions);
  }

  updatePerson(person: any): Observable<Person> {
    return this.http.put<any>(this.uri, person, this.httpOptions);
  }

  deletePerson(id: number) {
    //alert(`${this.uri}/${id}`);
    return this.http.delete<any>(`${this.uri}/${id}`);
  }

  getCurrentPerson(id: number) {
    return this.http.get<any>(`${this.uri}/${id}`);
  }
}
