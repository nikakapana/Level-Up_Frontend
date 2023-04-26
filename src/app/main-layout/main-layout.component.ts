import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  isActive: boolean = false;
  isOpen1 = false;
  isOpen2 = false;
  isOpen3 = false;
  constructor() { }

  ngOnInit(): void {
  }

  ClickToOpen1() {
    this.isOpen1 = !this.isOpen1
  }
  ClickToOpen2() {
    this.isOpen2 = !this.isOpen2;
  }
  ClickToOpen3() {
    this.isOpen2 = !this.isOpen3;
  }
}
