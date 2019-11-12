import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SaludoComponent } from './saludo/saludo.component';
import { SaludoRefComponent } from './saludo-ref/saludo-ref.component';
import { SaludoRxComponent } from './saludo-rx/saludo-rx.component';
import { UtilsModule } from '../utils/utils.module';

@NgModule({
  declarations: [HomeComponent, SaludoComponent, SaludoRefComponent, SaludoRxComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    NgbModule,
    UtilsModule
  ]
})
export class HomeModule { }
