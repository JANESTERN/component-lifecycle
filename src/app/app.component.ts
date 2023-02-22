import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifecycle';
  
  inputext:string=''

  onSubmit(inputel:HTMLInputElement){
    this.inputext=inputel.value

  }


}
