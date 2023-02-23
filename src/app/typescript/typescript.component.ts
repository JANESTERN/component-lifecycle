import { Component } from '@angular/core';
import { EnrollService } from '../services/enrol.service';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})
export class TypescriptComponent {

  typescript="typecript"

  OnEnroll(){
    const enrollService = new EnrollService();
    enrollService.OnEnrollClick(this.typescript)
  }


}
