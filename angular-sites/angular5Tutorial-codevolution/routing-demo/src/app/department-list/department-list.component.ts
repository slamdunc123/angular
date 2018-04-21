import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'; //Tutorial 25 - ROUTE PARAMETERS and 
//Tutorial 27 - OPTIONAL ROUTE PARAMETERS

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  //Tutorial 25 - ROUTE PARAMETERS

  departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"}
  ]

  public selectedId;  //Tutorial 27 - OPTIONAL ROUTE PARAMETERS

  onSelect(department){  //Tutorial 25 - ROUTE PARAMETERS
    //this.router.navigate(['/departments', department.id]); //using inflexible absolute path
    //Tutorial 28 - RELATIVE NAVIGATION
    this.router.navigate([department.id], {relativeTo: this.route}); //using flexible relative path
  }

 
  constructor(private router: Router, private route: ActivatedRoute) { }//Tutorial 25 - ROUTE PARAMETERS and 
  //Tutorial 27 - OPTIONAL ROUTE PARAMETERS

  ngOnInit() {
    //Tutorial 27 - OPTIONAL ROUTE PARAMETERS
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  isSelected(department){ //Tutorial 27 - OPTIONAL ROUTE PARAMETERS
    return department.id === this.selectedId;
  }


}
