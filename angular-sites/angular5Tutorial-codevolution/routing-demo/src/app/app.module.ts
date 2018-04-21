import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';//AppRoutingModule added automatically when creating a new app with --routing

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
//remember to import the routing destination components here - although if creating a property to contain all the routing components in app-routing.module.ts then these can be deleted - this has been done - routingComponents and imported into this app.module.ts 
//import { DepartmentListComponent } from './department-list/department-list.component';
//import { EmployeeListComponent } from './employee-list/employee-list.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    DepartmentDetailComponent,
    DepartmentOverviewComponent,
    DepartmentContactComponent //this replaces the the 2 below
    //DepartmentListComponent,
    //EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule //added automatically when creating a new app with --routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
