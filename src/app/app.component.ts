import { Component, OnInit } from '@angular/core';

import { Flug } from './entity/flug';
import { FlugService } from './services/flug.service';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public von: string;
  public nach: string;
  public fluege: Flug[];

  constructor(private flugService: FlugService) { }

  ngOnInit(): void {
    this.von = 'Wien';
    this.nach = 'Berlin';

    this.flugSuchen();
  }

  public flugSuchen(): void {
    this.fluege = this.flugService.flugSuchen(this.von, this.nach);
  }
}
