import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {


  Baseurl = "http://api.weatherstack.com/current?access_key=4c729216615d41d89a44fbac0ea7074f&query="
  constructor() { }


  getWeatherData(ciudad:string): Observable<any> {
  
    const url = this.Baseurl+ciudad
   
return new Observable( observer =>{
  

  fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Network response was not ok.');
  })
  .then(data => {
    observer.next(data);
    observer.complete();
  })
  .catch(error => {
    observer.error(error);
  });
});

}
  }


