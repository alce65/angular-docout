import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { LibrosMockComponent } from './libros-mock/libros-mock.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LibrosGoogleComponent } from './libros-google/libros-google.component';


@NgModule({
  declarations: [LibrosComponent, LibrosMockComponent, LibrosGoogleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LibrosRoutingModule
  ]
})
export class LibrosModule { }
