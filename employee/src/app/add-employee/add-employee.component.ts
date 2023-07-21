import { Component, OnInit } from '@angular/core';
import { ServicsService } from '../servics.service'

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  public id:string;
  public name:string;
  public location:string;
  public mobile:string;
  LocList = ['Trichy', 'Chennai', 'Bangalore', 'Delhi'];


  constructor(public dmService:ServicsService) { }

  ngOnInit(): void {
  }

  addEmployeeDetails()
  {   
    let EmpDetails = {
      "id":this.id,
      "name":this.name,
      "location":this.location,
      "mobile":this.mobile
    }
    
      this.dmService.addEmployee(EmpDetails);
      
    
  }

  Cancel()
  {
    // this.location.back();
  }
}
