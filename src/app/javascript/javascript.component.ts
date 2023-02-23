import { Component } from '@angular/core';
import { EnrollService } from '../services/enrol.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
  providers:[EnrollService]
})
export class JavascriptComponent {
  title = "Javascript"

constructor(private enrollService:EnrollService){

}


  OnEnroll(){
    // const enrollService = new EnrollService();
    this.enrollService.OnEnrollClick(this.title)


  }

}
