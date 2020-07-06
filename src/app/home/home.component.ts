import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mobile;

  constructor() { }

  ngOnInit(): void {
    if (window.screen.width <= 490) { // 768px portrait
      console.log(this.mobile);
      this.mobile = true;
    }
  }

}

