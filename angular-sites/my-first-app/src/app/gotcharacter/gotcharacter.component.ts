import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gotcharacter',
  templateUrl: './gotcharacter.component.html',
  styleUrls: ['./gotcharacter.component.css']
})
export class GotcharacterComponent implements OnInit {

  GOTCharacter:string[];
  GOTCharacterFirstName:string[]=['John','Arya','Cersei','Daenerys'];
  GOTCharacterLastName:string[]=['Snow','Stark','Lannister','Targaryen'];
  i=0;
  stopSwitch:any;
  stopSwitchStatus=true;
  twoWayData="Tyrion";

  @Input() imageUrlChild:string;

 
  switchFirstAndLastName(){
    this.stopSwitch=setInterval(()=>{
      if(this.i%2==0){
        this.GOTCharacter=this.GOTCharacterFirstName;
        console.log('if');
      }
      else{
        this.GOTCharacter=this.GOTCharacterLastName;
        console.log('else');
      }
      this.i++;
    }, 3000);
    this.stopSwitchStatus=false;
  }

  stopSwitchFirstAndLast(){
    clearInterval(this.stopSwitch);
    this.stopSwitchStatus=true;
    console.log('stop');
  }


  constructor() { 
    this.GOTCharacter=this.GOTCharacterFirstName;
  }

  ngOnInit() {
    console.log(this.imageUrlChild);
    
  }

}
