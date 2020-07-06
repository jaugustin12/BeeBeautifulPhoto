import * as $ from 'jquery';
import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, AfterViewInit {

  constructor() { }
  collection = 'Explore Collections';
  package = 'Explore Packages';
  currentIndex = 1;


  ngOnInit(): void {
/*     $(document).click((event) => {
      console.log('hi');
      $('#carousel').carousel(1);
    }); */
  }
  ngAfterViewInit() {
  }

  CarouselChange(index) {
    this.currentIndex = index;
}

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
