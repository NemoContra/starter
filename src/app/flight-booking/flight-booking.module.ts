import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { RouterModule } from '@angular/router';
import { FLIGHT_BOOKING_ROUTES } from './flight-booking.routes';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightService } from './flight-search/flight.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(FLIGHT_BOOKING_ROUTES),
    SharedModule
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    FlightEditComponent
  ],
  providers: [
    FlightService
  ],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule {
}
