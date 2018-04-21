import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address; //uses interface Address defined below
  hobbies:string[]; //uses an array of string values 
  posts:Posts[];
  isEdit:boolean = false;


  constructor(private dataService: DataService) {
    console.log('constructor ran...');
   }
 

  ngOnInit() {
    console.log('ngOnInit ran...');

    this.name ='John Doe';
    this.age = 30;
    this.email = 'test@test.com';
    this.address = {
      street: '50 Main St',
      city: 'Boston',
      state: 'MA'
    }
    this.hobbies = ['Write code', 'Watch movies', 'Listen to music'];

    this.dataService.getPosts().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    });
  }

  onClick(){
    this.name = 'Duncan Laidlaw'; //manipulate properties
    this.hobbies.push('New Hobby'); //add to array using JavaScript function push()
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby); //add to start of array using JavaScript function unshift()
    return false;
  }

  deleteHobby(hobby){
    console.log(hobby);
    for (let i = 0; i <this.hobbies.length; i++){
      if (this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
    
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}
//declare Address object in interface to be used elsewhere in code
interface Address{ 
  street:string,
  city:string,
  state:string
}

interface Posts {
  id:number,
  title:string,
  body:string,
  userId:number
}