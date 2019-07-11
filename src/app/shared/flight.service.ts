import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from '../flight';
import { SHARED_CONFIG, SharedConfig } from './shared-config';

@Injectable()
export class FlightService {
  constructor(private httpClient: HttpClient,
              /**
               * Import wird als @Optional dekoriert,
               * damit Angular keinen Fehler wirft, wenn keine Config
               * existiert und somit auch nichts provided wird
               */
              @Optional() @Inject(SHARED_CONFIG)
              private sharedConfig?: SharedConfig) { }

  getFlights(): Observable<Flight[]> {
    // Default baseUrl:
    let url = 'http://www.default-baseurl.com/api';

    /**
     * Hier wird zuerst geprüft ob die Config vorhanden ist,
     * dies unbedingt notwendig in Verbindung mit @Optional(),
     * da sonst ein Laufzeitfehler auftreten kann:
     * "Cannot read property baseUrl of undefined".
     */
    if (this.sharedConfig) {
      url = this.sharedConfig.baseUrl;
    }

    return this.httpClient
      .get<Flight[]>(`${url}/flight`);
  }
}
