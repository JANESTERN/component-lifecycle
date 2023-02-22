import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit{

  @Input()name:string="wright"


  constructor(){
    // console.log("constructor called");
    
  }

  // gets called after the constructor and it updates the input fields
  // therefore it is a perfect place to have all your logics
  ngOnInit(): void {
   console.log(this.name);
   
  }

}
