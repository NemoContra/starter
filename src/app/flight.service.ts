import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from './flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  constructor(private httpClient: HttpClient) { }

  getFlights(): Observable<Flight[]> {
    return this.httpClient
      .get<Flight[]>('http://www.angular.at/api/flight');
  }
}
