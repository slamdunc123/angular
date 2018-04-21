import { Injectable } from '@angular/core';

//Tutorial 21 - FETCH DATA USING HTTP
import { HttpClient, HttpErrorResponse } from '@angular/common/http';//import Http service
import { IEmployee } from './employee-interface';//remember to import the interface here
import { Observable } from 'rxjs/Observable';//remember to import the Observable here

//Tutorial 22 - HTTP ERROR HANDLING
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable() //best practice has this @Injectable by default in case this service has dependencies - component use the @Component instead
export class EmployeeService {

  //Tutorial 19 - USING A SERVICE

  getEmployees(){ //Tutorial 19 - USING A SERVICE
    return [
      {"id": 1, "name": "Andrew", "age": 30},
      {"id": 2, "name": "Brandon", "age": 25},
      {"id": 3, "name": "Christina", "age": 26},
      {"id": 4, "name": "Elena", "age": 28}
    ]
  }

  //Tutorial 21 - FETCH DATA USING HTTP

  private _url: string ="/assets/data/employees1.json"; //url to the data //Tutorial 22 - HTTP ERROR HANDLING  - change the url to see the error message

  httpGetEmployees(): Observable<IEmployee[]>{//add the type here eg IEmployee
    return this.http.get<IEmployee[]>(this._url)//this takes a URL as its argument
  //Tutorial 22 - HTTP ERROR HANDLING                     
                    .catch(this.errorHandler);//catch the error exception on the observable
                      
  }

  errorHandler(error: HttpErrorResponse){//remember to import at the top of the page
      return Observable.throw(error.message || "Server Error");//throw the error exception to the components which subscribe to the observable
  }
  constructor(private http: HttpClient) { }//declare Http service in the constructor class

}
