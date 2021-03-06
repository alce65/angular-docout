import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doc-header',
  templateUrl: './header.component.html',
  styleUrls: [
    '../common.css',
    './header.component.css'
  ]
})
export class HeaderComponent implements OnInit {
  title: string;
  logo: string;
  constructor() {}

  ngOnInit() {
    this.title = 'Angular DocOut';
    this.logo = '../../../assets/logo.svg';
  }

}
