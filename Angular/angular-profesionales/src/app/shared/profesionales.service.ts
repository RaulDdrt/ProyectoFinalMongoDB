import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from "rxjs"
import { Profesionales } from '../models/profesionales';

@Injectable({
  providedIn: 'root'
})
export class ProfesionalesService {


  private url:string = "http://localhost:3000/profesionales"
  
  

  constructor(private http: HttpClient) { }

  getAll(): Observable<Profesionales[]> {
    return this.http.get<Profesionales[]>(this.url);
  }

  getName(firstName: string, lastName: string):Observable<Profesionales[]>{
    return this.http.get<Profesionales[]>(`${this.url}?firstName=${firstName}&lastName=${lastName}`);
  }

  postProf(profesionales: Profesionales):Observable<Profesionales[]> {
    return this.http.post<Profesionales[]>(this.url, profesionales);
  }

  editProf(profesionales: Profesionales):Observable<Profesionales[]> {
    return this.http.put<Profesionales[]>(this.url, profesionales);
  }

  deleteName(firstName: string, lastName: string):Observable<Profesionales[]>{
    return this.http.delete<Profesionales[]>(`${this.url}?firstName=${firstName}&lastName=${lastName}`);
  }



}
