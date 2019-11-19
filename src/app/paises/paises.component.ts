import { Component, OnInit } from '@angular/core';
import { CONTINENTES } from '../models/mundo..data';
import { PaisesService } from '../services/paises.service';
import { Router } from '@angular/router';

@Component({
  selector: 'doc-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {
  continentes: Array<any>;
  selectedContinent: any;
  paises: Array<any>;
  selectedPais: any;

  constructor(private paisesService: PaisesService,
              private router: Router) { }

  ngOnInit() {
    this.continentes = CONTINENTES;
  }

  onContinent() {
    this.paisesService.getPaises(this.selectedContinent.codigo)
      .subscribe(
        response => this.paises = response
      )
  }
  onPais() {
    this.router.navigateByUrl('paises/' + this.selectedPais.alpha3Code);
  }
}
