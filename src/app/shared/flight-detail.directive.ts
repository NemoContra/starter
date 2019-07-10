import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { Flight } from '../entities/flight';

@Directive({
  selector: '[flightDetail]'
})
export class FlightDetailDirective implements OnInit {
  @Input() flightDetail: Flight;

  @HostBinding() title = '';

  @HostListener('click')
  onClick(): void {
    alert(`Dieser Flug geht von ${this.flightDetail.from} nach ${this.flightDetail.to}`);
  }

  ngOnInit(): void {
    this.title = `Flug von ${this.flightDetail.from} nach ${this.flightDetail.to}`;
  }
}
