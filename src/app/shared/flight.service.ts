import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from '../flight';
import { SHARED_CONFIG, SharedConfig } from './shared-config';

@Injectable()
export class FlightService {
  constructor(private httpClient: HttpClient,
              @Optional() @Inject(SHARED_CONFIG)
              private sharedConfig?: SharedConfig) { }

  getFlights(): Observable<Flight[]> {
    let url = 'http://www.angular.at/api';

    if (this.sharedConfig) {
      url = this.sharedConfig.baseUrl;
    }

    return this.httpClient
      .get<Flight[]>(`${url}/flight`);
  }
}
