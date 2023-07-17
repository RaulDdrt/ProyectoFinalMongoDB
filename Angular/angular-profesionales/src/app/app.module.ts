import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfesionalesComponent } from './pages/profesionales/profesionales.component';
import {HttpClientModule} from "@angular/common/http"
import { Profesionales } from './models/profesionales';
import { ProfesionalesService } from './shared/profesionales.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfesionalesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [ProfesionalesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
