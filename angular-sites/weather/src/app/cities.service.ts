import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Cities } from "./cities";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CitiesService {

  private _url: string = "assets/cityTest.list.json";
 
  constructor(private _http: HttpClient) { }

  cityData(){
    return this._http.get(this._url)
    .map(result => result);
  }
//uses Observalbe or RXJS map as commented above
  // cityData(): Observable<Cities[]>{
  //   return this._http.get<Cities[]>(this._url);
  // }
}
