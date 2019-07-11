import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from './flight';
import { filter, publishReplay, refCount } from 'rxjs/operators';
import { FlightService } from './shared/flight.service';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  flights$: Observable<Flight[]>;

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.flights$ = this.flightService.getFlights().pipe(
      filter(flights => flights.length > 0),
      publishReplay(1),
      refCount()
    );
  }
}
