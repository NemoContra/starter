import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Flight } from './flight';
import { exhaustMap, map } from 'rxjs/operators';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Flights als Observable speichern und mit Async-Pipe übers Template
  // subscriben
  public flights$: Observable<Flight[]>;

  // OnClickSubject wird als "MessageBus" verwendet, um den Button-Click
  // mit Operatoren versehen zu können
  public onClick$ = new Subject<void>();

  public formGroup = new FormGroup({
    von: new FormControl('')
  });

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    // Hier verwenden wir Operatoren, um vom Click auf den Http-Request
    // springen zu können:
    this.flights$ = this.onClick$.pipe(
      // Wir mappen den leeren Output von onClick$ auf den Wert der FormControl
      map(() => this.formGroup.get('von').value),
      // ExhaustMap wartet mit dem nächsten Request immer bis der vorherige
      // beantwortet wurde, egal wie oft der User klickt
      exhaustMap(von => this.getFlights(von))
    );
  }

  getFlights(from: string): Observable<Flight[]> {
    return this.httpClient
      .get<Flight[]>('http://www.angular.at/api/flight', {
        params: new HttpParams().set('from', from)
      });
  }
}
