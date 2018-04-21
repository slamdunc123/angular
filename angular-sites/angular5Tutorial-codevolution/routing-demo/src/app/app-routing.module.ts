//Tutorial 23 - ROUTING AND NAVIGATION
//this file created automatically when creating a new app with --routing

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//remember to import the routing destination components here
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';


const routes: Routes = [ //define all routes here - each route is an object
  {path: '', redirectTo: '/departments', pathMatch: 'full'},//redirect routes - use this format
  {path: 'departments', component: DepartmentListComponent},
  {
    path: 'departments/:id', 
    component: DepartmentDetailComponent, //Tutorial 29 - CHILD ROUTES
    children: [
      { path: 'overview', component: DepartmentOverviewComponent},
      { path: 'contact', component: DepartmentContactComponent}
    ]
},//Tutorial 25 - ROUTE PARAMETERS
  {path: 'employees', component: EmployeeListComponent},
  {path: '**', component: PageNotFoundComponent}//wildcard route should always be the last in the routing array
  //Tutorial 28 - RELATIVE NAVIGATION
  //cahnging the referneces to departments to an alternative eg departments2 in Routes section will still work throughout the app as the code has been altered to work with relative paths in the department-list.component.ts and the department-details.component.ts
  //NOTE: there is more to do here to get it to work completely as clicking th edepartments button results in page not found so something is breaking
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent,DepartmentDetailComponent, EmployeeListComponent, PageNotFoundComponent, DepartmentOverviewComponent, DepartmentContactComponent];//remember to add any new routing components to the routingComponents array here
