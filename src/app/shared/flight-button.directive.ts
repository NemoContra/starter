import { Directive, Input, OnChanges } from '@angular/core';

@Directive({
  selector: 'button[flightButton]'
})
export class FlightButtonDirective implements OnChanges {
  @Input() selected;

  constructor() { }

  ngOnChanges(): void {
    console.log(this.selected);
  }
}
