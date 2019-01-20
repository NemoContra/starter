import { Component, OnInit } from '@angular/core';
import { Flug, testFlug } from '../entity/flug';
import { FlugService } from '../services/flug.service';

@Component({
  selector: 'app-flug-suchen',
  templateUrl: './flug-suchen.component.html',
  styleUrls: ['./flug-suchen.component.css']
})
export class FlugSuchenComponent implements OnInit {
  public fluege: Flug[];
  public error: string;

  public testFlug: Flug = testFlug;

  constructor(private flugService: FlugService) { }

  ngOnInit() {
    this.getFluege();
  }

  public getFluege(): void {
    this.flugService.getFluege().subscribe(fluege => {
      this.fluege = fluege;
    }, error => {
      this.error = `Fehler: ${error}`;
    });
  }

  public getFlug(id: number): void {
    this.flugService.getFlug(id).subscribe(console.log);
  }

  public speichereFlug(): void {
    this.flugService.speichern(this.testFlug).subscribe(console.log);
  }

  public entferneFlug(): void {
    this.flugService.entfernen(this.testFlug).subscribe(console.log);
  }
}
