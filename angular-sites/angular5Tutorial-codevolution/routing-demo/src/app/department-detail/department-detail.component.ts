import { Component, OnInit } from '@angular/core';
//Tutorial 25 - ROUTE PARAMETERS
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId; //Tutorial 25 - ROUTE PARAMETERS

  constructor(private route: ActivatedRoute, private router: Router) { }//Tutorial 25 - ROUTE PARAMETERS

  ngOnInit() {
    //snapshot is not the right solution as it only works once
   // let id = parseInt(this.route.snapshot.paramMap.get('id'));
   // this.departmentId = id;


   //Tutorial 26 - PARAMMAP OBSERVABLE

    //correct solution is to use paramMap Observable to read parameter values
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }

  goPrevious(){
    let previousId = this.departmentId -1;
    this.router.navigate(['/departments', previousId]);
  }
  
  goNext(){
    let nextId = this.departmentId +1;
    this.router.navigate(['/departments', nextId]);
  }

  //Tutorial 27 - OPTIONAL ROUTE PARAMETERS
  gotoDepartments(){ //this create optional route parameter - optional because it doesn't affect the view
     let selectedId = this.departmentId ? this.departmentId:null;
     //this.router.navigate(['/departments', {id:selectedId}]); //using inflexible absolute path
     //Tutorial 28 - RELATIVE NAVIGATION
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route}); //using flexible relative path
  }


  //Tutorial 29 - CHILD ROUTES
  showOverview(){
    this.router.navigate(['overview'],{relativeTo: this.route});
  }

  showContact(){
    this.router.navigate(['contact'],{relativeTo: this.route});
  }

}


