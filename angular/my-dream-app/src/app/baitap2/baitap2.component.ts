import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap2',
  templateUrl: './baitap2.component.html',
  styleUrls: ['./baitap2.component.css']
})
export class Baitap2Component implements OnInit {
  name: string  = ""
  email: string = ""
  constructor() { }
  Click(fullName :string){
    this.name = fullName;
  }
  ngOnInit(): void {
  }

}
