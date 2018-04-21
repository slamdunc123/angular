import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 5 Tutorial - Structural Directives';

  //used in Tutorial 15 - COMPONENT INTERACTION

  public name="Vishwas"; //property declared in this parent component
  public message="";
}
