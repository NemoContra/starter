import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { Flight } from '../entities/flight';

@Directive({
  selector: '[flightDetails]'
})
export class FlightDetailsDirective implements OnInit {
  @Input() flight: Flight;
  @Input() showTooltip = true;

  @HostBinding() title = '';

  constructor() { }

  @HostListener('click')
  onClick(): void {
    alert(`Flug von ${this.flight.from}`);
  }

  ngOnInit(): void {
    this.title = this.showTooltip ? `Flug von ${this.flight.from} nach ${this.flight.to}` : '';
  }
}
