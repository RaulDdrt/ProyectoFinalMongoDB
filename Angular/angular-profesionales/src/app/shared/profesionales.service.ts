import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from "rxjs"
import { Profesionales } from '../models/profesionales';

@Injectable({
  providedIn: 'root'
})
export class ProfesionalesService {

    private url = "http.//localhost:3000/"
    public profesionales : Profesionales

  constructor(private http: HttpClient) { }

  getProf(){
    this.http.get(this.url).subscribe(
      data=>{
        console.log(data)
      },
      error =>{
        console.log(error)
      }
    )
  }
}
