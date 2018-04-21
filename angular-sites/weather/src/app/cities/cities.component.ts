import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../cities.service';
import { DatePipe } from '@angular/common';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  heading:any = "hello";
  //citiesData:any;
 citiesData:any;

  constructor(private _cities: CitiesService, private _weather: WeatherService) { }

  ngOnInit() {


  //JavaScript
   /* var request = new XMLHttpRequest();

  request.open('GET', '/assets/city.list.json', true);

  request.onload = function () {
	// begin accessing JSON data here
	var data = JSON.parse(this.response);

	for (var i = 0; i < 10; i++) {
		console.log(data[i].id + ' and ' + data[i].name + '.');
	}
}

request.send();
*/


this._cities.cityData()
  .subscribe(res => {
   
    this.citiesData=res;
  })

  }
//Use if need to call the above in a separate function
// method used to subscribe to the CitiesService - cities.service.ts
//citiesData:any;
 // }
 
// getCities(id) {
//    this._cities.cityData(id)
//   .subscribe(res => {
//     console.log(res);
//     this.citiesData=res;
//     console.log(id);
//     // let self = this;
//     // self.getWeather(id);
//   })
  
// }  

 
 // method used to subscribe to the WetherService - weather.service.ts
posts:any;
 
 //this function needs to receive a parameter representing the city id as this is inserted into the URL of the api call in the weather.service.ts 
 getWeather(id) {
   this._weather.weatherForecast(id)
   .subscribe(res => {
     console.log(res);
     this.posts=res;
     console.log(id);
   })
 }  
}



