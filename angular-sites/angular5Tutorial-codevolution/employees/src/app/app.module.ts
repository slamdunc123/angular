import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';//include the service here
import { HttpClientModule } from '@angular/common/http';//include for using Http requests

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule//include for using Http requests
  ],
  providers: [EmployeeService],//include the service here
  bootstrap: [AppComponent]
})
export class AppModule { }
