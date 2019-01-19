import { Directive } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { delay, map } from 'rxjs/operators';

import { FlightService } from '../../flight-booking/flight-search/flight.service';

@Directive({
  selector: '[asyncCity]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: AsyncCityValidatorDirective,
    multi: true
  }]
})
export class AsyncCityValidatorDirective implements AsyncValidator {

  constructor(private flightService: FlightService) {
  }

  validate(c: AbstractControl): Observable<ValidationErrors | null> {
    return this.flightService
      .find(c.value, '').pipe(
        map(flights => (flights.length) > 0 ? {} : {asyncCity: true}),
        delay(4000) // <-- Künstlicher Delay; Kann später entfernt werden...
      );
  }

}
