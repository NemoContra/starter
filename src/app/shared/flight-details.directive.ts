import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { Flight } from '../entities/flight';

@Directive({
  selector: '[flightDetails]'
})
export class FlightDetailsDirective implements OnInit {
  @Input() flightDetails: Flight;
  @Input() showTitle = true;

  @HostBinding() title = '';

  constructor(private elementRef: ElementRef<HTMLParagraphElement>) { }

  @HostListener('click')
  onClick(): void {
    alert(
      `Flug von ${this.flightDetails.from} nach ${this.flightDetails.to}`
    );
  }

  ngOnInit(): void {
    if (!this.showTitle) {
      return;
    }

    console.log(this.elementRef.nativeElement);

    this.title =
      `Flug von ${this.flightDetails.from} nach ${this.flightDetails.to}`;
  }

}
