import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisesRoutingModule } from './paises-routing.module';
import { PaisesComponent } from './paises.component';
import { FormsModule } from '@angular/forms';
import { PaisComponent } from './pais/pais.component';


@NgModule({
  declarations: [PaisesComponent, PaisComponent],
  imports: [
    CommonModule,
    FormsModule,
    PaisesRoutingModule
  ]
})
export class PaisesModule { }
