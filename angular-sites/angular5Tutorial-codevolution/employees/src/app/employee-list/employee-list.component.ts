import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';//include the service here


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
//it's not goot practice to hardcode data into the class like this plus the data needs replicating in all other classes which need to access this data //it's not goot practice to hardcode data into the class like this plus the data needs replicating in all other classes which need to access this data 
//this is where using a service is best practice  
public employees = [
    {"id": 1, "name": "Andrew", "age": 30},
    {"id": 2, "name": "Brandon", "age": 25},
    {"id": 3, "name": "Christina", "age": 26},
    {"id": 4, "name": "Elena", "age": 28}
  ];

  public employees2 = []; //using the employee.service to populate the array
  public employees3 = []; //using the employee.service and observable to populate the array
  public errorMsg;
  
  constructor(private _employeeService: EmployeeService) { }//register the service within the constructor of the component

  ngOnInit() { //use the service instance within ngOnInit()
    this.employees2=this._employeeService.getEmployees();

    this._employeeService.httpGetEmployees()
    .subscribe( data => this.employees3 = data,
                 //Tutorial 22 - HTTP ERROR HANDLING    
    error => this.errorMsg = error);//subscribe to the observable returned by the method httpGetEmployees()
  }

}
