import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CityPipe } from './city.pipe';
import { FlightButtonDirective } from './flight-button.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CityPipe,
    FlightButtonDirective
  ],
  exports: [
    CityPipe,
    FlightButtonDirective
  ]
})
export class SharedModule {
}
