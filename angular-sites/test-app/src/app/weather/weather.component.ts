import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit { 
  

  constructor (private _weather: WeatherService){}

  ngOnInit() {
    
  }

  posts:any;

  getWeather(){
    //this.posts = 30; /*
    this._weather.dailyForecast()
    .subscribe(res => {
      console.log(res);
      this.posts=res;
      

    })
    console.log(JSON.stringify(this.posts));
    console.log(this._weather);
      
     
  }

}
