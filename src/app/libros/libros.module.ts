import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { LibrosMockComponent } from './libros-mock/libros-mock.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LibrosGoogleComponent } from './libros-google/libros-google.component';
import { LibrosServiceComponent } from './libros-service/libros-service.component';


@NgModule({
  declarations: [LibrosComponent, LibrosMockComponent, LibrosGoogleComponent, LibrosServiceComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LibrosRoutingModule
  ]
})
export class LibrosModule { }
