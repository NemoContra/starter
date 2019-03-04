import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CityPipe } from './city.pipe';
import { FlightDetailsDirective } from './flight-details.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CityPipe,
    FlightDetailsDirective
  ],
  exports: [
    CityPipe,
    FlightDetailsDirective
  ]
})
export class SharedModule {
}
