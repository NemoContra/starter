import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject, Subscription } from 'rxjs';
import { Flight } from './flight';
import { debounceTime, distinctUntilChanged, switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public flights: Flight[];

  public formGroup = new FormGroup({
    von: new FormControl('')
  });

  private subscription = new Subscription();

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.subscription.add(this.formGroup.get('von').valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(von => this.getFlights(von))
    ).subscribe(flights => this.flights = flights));

    this.subscription.add(this.formGroup.valueChanges.subscribe());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(): void {
    //
  }

  getFlights(from: string): Observable<Flight[]> {
    return this.httpClient
      .get<Flight[]>('http://www.angular.at/api/flight', {
        params: new HttpParams().set('from', from)
      });
  }
}
