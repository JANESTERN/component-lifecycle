import { Component } from '@angular/core';
import { EnrollService } from '../services/enrol.service';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css'],
  providers:[EnrollService]
})
export class TypescriptComponent {

  title="typecript"

  constructor( private enrollservice:EnrollService){

  }

  OnEnroll(){
    // creating an instance of class by our owm is a bad practice.
    // angular can do it for us using dependency injection
    // const enrollService = new EnrollService();
this.enrollservice.OnEnrollClick(this.title)
  }


}
