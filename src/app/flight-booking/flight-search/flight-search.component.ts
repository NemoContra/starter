import { Component, OnInit } from '@angular/core';
import { Flight } from '../../entities/flight';
import { FlightService } from './flight.service';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html'
})
export class FlightSearchComponent implements OnInit {
  from: string;
  to: string;
  flights: Array<Flight> = [];
  selectedFlight: Flight;
  message: string;

  basket: object = {   // <-- Neue Eigenschaft
    '3': true,
    '5': true
  };

  constructor(private flightService: FlightService) {
  }

  ngOnInit(): void {
  }

  search(): void {
    this.flightService
      .find(this.from, this.to)
      .subscribe(
        (flights) => {
          this.flights = flights;
        },
        (errResp) => {
          console.error('Error loading flights', errResp);
        }
      );
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

  onSearch({from, to}) {
    this.from = from;
    this.to = to;
    this.search();
  }

  save(): void {

    this.flightService
      .save(this.selectedFlight)
      .subscribe(
        flight => {
          this.selectedFlight = flight;
          this.message = 'Erfolgreich gespeichert!';
        },
        errResponse => {
          console.error('Fehler beim Speichern', errResponse);
          this.message = 'Fehler beim Speichern: ';
        }
      );
  }
}
