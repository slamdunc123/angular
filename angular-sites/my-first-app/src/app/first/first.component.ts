import { Component } from '@angular/core';

@Component ({
    selector: 'app-first',
    templateUrl: 'first.component.html',
    styleUrls: ['first.component.css']
})

export class FirstComponent{

    headingTwo:string = "I am Component, First Component";
    imageUrl:string = "../../assets/lion-silver - 150x150.png";

    changeValue(){
        this.headingTwo = "This value has been changed!";
    }

    returnString(){
       return "I love Interpolation";
    }
    
}