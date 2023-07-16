import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profesionales } from 'src/app/models/profesionales';
import { ProfesionalesService } from 'src/app/shared/profesionales.service';

@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.component.html',
  styleUrls: ['./profesionales.component.css']
})
export class ProfesionalesComponent {

  public

  constructor(private http: HttpClient){}


  getProf(){
    this.http.
  }

}
