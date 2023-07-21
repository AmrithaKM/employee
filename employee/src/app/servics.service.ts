import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicsService {

  constructor() { }

  public employees=[]

  public employee = [{"id": 1,
    "location": "Bangalore",
    "mobile": 7653452654,
    "name": "Poonam" },{"id": 2,
    "location": "Goa",
    "mobile": 7653452854,
    "name": "Karthi" }]


  getAllEmployees() {
      return  this.employee;
  }


  addEmployee(data) {
    this.employee.push(data)
  }
  editEmployee(EmpDetails) {
    this.employee = this.employee.filter((value,key)=>{
      if(value.id == EmpDetails.id){
        value.name = EmpDetails.name;
        value.location = EmpDetails.location;
        value.mobile = EmpDetails.mobile
      }
      return true;
    });
  }
  deleteEmployee(EmpDetails) {
    this.employee = this.employee.filter((value,key)=>{
      return value.id != EmpDetails.id;
    });
  }
}
