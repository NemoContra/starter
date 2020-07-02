import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { HomeComponent } from './home/home.component';
import { PassengerSearchComponent } from './flight-booking/passenger-search/passenger-search.component';
import { APP_ROUTES } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    FlightBookingModule
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    PassengerSearchComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
