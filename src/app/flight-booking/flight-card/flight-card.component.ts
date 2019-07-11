import {
  AfterViewInit,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output, QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { Flight } from '../../entities/flight';

@Directive({
  selector: '[flightSelectDeselect]'
})
export class FlightSelectDeselectDirective { }

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements AfterViewInit {
  constructor() { }

  @Input() item: Flight;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  @ViewChildren(FlightSelectDeselectDirective, {
    read: ElementRef
  }) private selectDeselectButtons: QueryList<ElementRef<HTMLButtonElement>>;

  ngAfterViewInit() {
  }

  select() {
    this.selected = true;
    this.selectedChange.next(this.selected);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.next(this.selected);
  }

  onClick(): void {
    this.selectDeselectButtons.first.nativeElement.focus();
  }
}
