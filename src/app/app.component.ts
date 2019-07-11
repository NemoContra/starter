import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from './flight';
import { FlightService } from './flight.service';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  flights$: Observable<Flight[]>;

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.flights$ = this.flightService.getFlights();
  }
}
