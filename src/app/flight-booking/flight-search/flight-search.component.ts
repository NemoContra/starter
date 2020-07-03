import { Component, OnDestroy, OnInit } from '@angular/core';
import { Flight } from '../../entities/flight';
import { FlightService } from './flight.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, combineLatest, forkJoin, Observable, of, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  exhaustMap,
  filter,
  map,
  mergeMap,
  switchMap,
  takeUntil,
  withLatestFrom
} from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html'
})
export class FlightSearchComponent implements OnInit, OnDestroy {
  from: string;
  to: string;
  selectedFlight: Flight;
  message: string;

  flights$: Observable<Flight[]>;

  formGroup = new FormGroup({
    from: new FormControl('', [Validators.required]),
    to: new FormControl('', [Validators.required])
  });

  basket: object = {   // <-- Neue Eigenschaft
    '3': true,
    '5': true
  };

  result: number;

  destroy$$ = new Subject<void>();

  constructor(private flightService: FlightService,
              private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    // Other operators than switchMap: concatMap, exhaustMap, mergeMap.
    // switchMap is the right one here. ExhaustMap is better for a button click.
    // Put Chrome Network tab to high latency and vary your typing speed to test this

    this.flights$ = this.formGroup.valueChanges.pipe(
      filter(() => this.formGroup.valid),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(({from, to}) => this.flightService.find(from, to))
    );

    const name$ = new Subject<string>();

    setTimeout(() => name$.next('Bosch'), 2000);

    name$.pipe(
      switchMap(name => this.buildHello(name)),
      takeUntil(this.destroy$$)
    ).subscribe(console.log);

    /*this.router.navigate(['1234'], {
      relativeTo: this.activatedRoute,
      skipLocationChange: false
    });*/
  }

  buildHello(name: string): Observable<string> {
    return of(`Hello ${name}`);
  }

  ngOnDestroy() {
    this.destroy$$.next();
  }

  select(f: Flight): void {
    this.selectedFlight = f;
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
