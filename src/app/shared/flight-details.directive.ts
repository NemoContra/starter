import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { Flight } from '../entities/flight';

@Directive({
  selector: '[flightDetails]'
})
export class FlightDetailsDirective implements OnInit {
  @Input() flightDetails: Flight;
  @HostBinding() title = '';

  @HostListener('click')
  public onClick(): void {
    alert(`Von: ${this.flightDetails.from} nach: ${this.flightDetails.to}`);
  }

  ngOnInit(): void {
    if (this.flightDetails) {
      this.title = `Von: ${this.flightDetails.from} nach: ${this.flightDetails.to}`;
    }
  }
}
