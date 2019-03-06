import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { Flug } from '../entity/flug';

@Directive({
  selector: '[flugDetails]'
})
export class FlugDetailsDirective implements OnInit {
  @Input() flugDetails: Flug;
  @HostBinding() title = '';

  @HostListener('click')
  public onClick(): void {
    alert(`Von: ${this.flugDetails.from} nach: ${this.flugDetails.to}`);
  }

  ngOnInit(): void {
    if (this.flugDetails) {
      this.title = `Von: ${this.flugDetails.from} nach: ${this.flugDetails.to}`;
    }
  }
}
