import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'doc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: Array<string>;
  constructor(private storageService: StorageService) {
    console.log(this.storageService.usado)
   }

  ngOnInit() {
    this.images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  }
}
