import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CityPipe } from './city.pipe';
import { FlightDetailDirective } from './flight-detail.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CityPipe,
    FlightDetailDirective
  ],
  exports: [
    CityPipe,
    FlightDetailDirective
  ]
})
export class SharedModule {
}
