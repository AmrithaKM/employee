import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ServicsService } from '../servics.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  EmployeeData:any;
  EmpID:number;
  LocList = ['Trichy', 'Chennai', 'Bangalore', 'Delhi'];
  constructor(private route:ActivatedRoute,public dmService:ServicsService) { }

  ngOnInit(): void {

    this.EmpID = Number(this.route.snapshot.paramMap.get('empID'));
    this.EmployeeData = this.dmService.getAllEmployees().find(x=> x.id == this.EmpID );
   console.log(this.EmployeeData)
  }

  updateEmployee(EmpDetails)
  {   
    this.dmService.editEmployee(EmpDetails);
  }


  Cancel(){

  }

}
