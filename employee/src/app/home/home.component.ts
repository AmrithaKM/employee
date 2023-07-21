import { Component, OnInit } from '@angular/core';

import { ServicsService } from '../servics.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  inputVal:string = '';
  public employee = [];
  // [{"id": 1;,
  //   "location": "Bangalore",
  //   "mobile": 7653452654,
  //   "name": "Poonam" },{"id": 2,
  //   "location": "Goa",
  //   "mobile": 7653452854,
  //   "name": "Karthi" }]

  constructor(public dmService:ServicsService, private router:Router) { }

  ngOnInit(): void {

    this.employee = this.dmService.getAllEmployees();
    console.log('appcomponent ngOnInit',this.employee );
  }


  editEmpDetails(empID)
  {
    this.router.navigate(['app-edit-employee/' +empID]);  
  }

  deleteEmpDetails(emp){
    this.dmService.deleteEmployee(emp);
 
}

}
