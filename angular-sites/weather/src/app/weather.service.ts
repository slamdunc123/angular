import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  constructor(private _http: HttpClient, ) { }

  //weatherForecast uses RXJS map not Observable
  weatherForecast(cityId){
    return this._http.get("http://api.openweathermap.org/data/2.5/forecast?id="+cityId+"&APPID=8f3bce6554087613da59a6627c23c861")
    .map(result => result);
  }
}
