import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Profesionales } from 'src/app/models/profesionales';
import { ProfesionalesService } from 'src/app/shared/profesionales.service';

@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.component.html',
  styleUrls: ['./profesionales.component.css']
})
export class ProfesionalesComponent implements OnInit{

  public profesionales : Profesionales[] = [];
  public formulario : FormGroup;


  constructor(public profesionalService: ProfesionalesService){}
  
  ngOnInit() {
    this.formulario = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      age: new FormControl(),
      weight: new FormControl(),
      height: new FormControl(),
      isRetired: new FormControl(),
      nacionality: new FormControl(),
      oscarsNumber: new FormControl(),
      profession: new FormControl()
    });
  }
  
  // getProfs() {
  //   this.profesionalService.getAll().subscribe(
  //     (data: Profesionales[]) => {
  //       this.profesionales = data;
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }


  getProfs(){
    if(this.formulario.get("firstName").value && this.formulario.get("lastName").value){
      this.profesionalService.getName(this.formulario.get("firstName").value, this.formulario.get("lastName").value).subscribe(
        (data: Profesionales[]) =>{
          this.profesionales = data
        },
        (err) =>{
          console.log(err)
        }
      )
    }else{
      this.profesionalService.getAll().subscribe(
        (data:Profesionales[]) =>{
          this.profesionales = data
        },
        (err) =>{
          console.log(err)
        }
      )
    }
  }

  postProf() {
    let firstName = this.formulario.get("firstName")?.value
    let lastName = this.formulario.get("lastName")?.value
    let age = this.formulario.get("age")?.value
    let weight = this.formulario.get("weight")?.value
    let height = this.formulario.get("height")?.value
    let isRetired = this.formulario.get("isRetired")?.value
    let nacionality = this.formulario.get("nacionality")?.value
    let oscarsNumber = this.formulario.get("oscarsNumber")?.value
    let profession = this.formulario.get("profession")?.value

    let profesional: Profesionales = {
      firstName,
      lastName,
      age,
      weight,
      height,
      isRetired,
      nacionality,
      oscarsNumber,
      profession
    }
  
    this.profesionalService.postProf(profesional).subscribe(
      (data: Profesionales[]) => {
        this.profesionales = data
      },
      (err) => {
        console.log(err)
      }
    )
  }
  
  editP() {
    let firstName = this.formulario.get("firstName")?.value
    let lastName = this.formulario.get("lastName")?.value
    let age = this.formulario.get("age")?.value
    let weight = this.formulario.get("weight")?.value
    let height = this.formulario.get("height")?.value
    let isRetired = this.formulario.get("isRetired")?.value
    let nacionality = this.formulario.get("nacionality")?.value
    let oscarsNumber = this.formulario.get("oscarsNumber")?.value
    let profession = this.formulario.get("profession")?.value

    let profesional: Profesionales = {
      firstName,
      lastName,
      age,
      weight,
      height,
      isRetired,
      nacionality,
      oscarsNumber,
      profession
    }
  
    this.profesionalService.editProf(profesional).subscribe(
      (data: Profesionales[]) => {
        this.profesionales = data
        console.log(data)
      },
      (err) => {
        console.log(err)
      }
    )
  }

  deleteThis(){
    if(this.formulario.get("firstName").value && this.formulario.get("lastName").value){
      this.profesionalService.deleteName(this.formulario.get("firstName").value, this.formulario.get("lastName").value).subscribe(
        (data: Profesionales[]) =>{
          this.profesionales = data
          console.log("Profesional eliminado exitosamente")
        },
        (err) =>{
          console.log(err)
        }
      )
  }
}

}







