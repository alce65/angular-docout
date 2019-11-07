import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SaludoComponent } from './saludo/saludo.component';
import { SaludoRefComponent } from './saludo-ref/saludo-ref.component';

@NgModule({
  declarations: [HomeComponent, SaludoComponent, SaludoRefComponent],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    NgbModule
  ]
})
export class HomeModule { }
