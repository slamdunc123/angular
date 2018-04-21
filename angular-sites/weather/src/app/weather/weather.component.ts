import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  //cityId:string = "529334";

  
  constructor(private _weather: WeatherService) { }

  ngOnInit() {

  }
  

  // method used to subscribe to the WetherService - weather.service.ts
  
  posts:any;
  
  getWeather(id) {
     this._weather.weatherForecast(id)
    .subscribe(res => {
      console.log(res);
      this.posts=res;
    })
  }  
 
 }
