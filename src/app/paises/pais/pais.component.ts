import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'doc-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {
  paisCode: string;
  pais: any;
  constructor(private activatedRoute: ActivatedRoute, 
              private router: Router,
              private paisesService: PaisesService
              ) { }

  ngOnInit() {
    this.paisCode = this.activatedRoute.snapshot.params.id;
    this.paisesService.getPaisInfo(this.paisCode).subscribe(
      response => this.pais = response
    )
  }

  onPaises() {
    this.router.navigateByUrl('paises')
  }

}
