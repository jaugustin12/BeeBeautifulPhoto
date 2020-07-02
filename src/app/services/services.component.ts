import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }
  collection = 'Explore Collections';
  package = 'Explore Packages';

  ngOnInit(): void {}

  portraits()
  {
    this.collection = 'Portraits';
  }
  boudoir() {
    this.collection = 'Boudoir';
  }
  package1()
  {
    this.package = 'Package 1';
  }
  package2() {
    this.package = 'Package 2';
  }
  package3() {
    this.package = 'Package 3';
  }
}
