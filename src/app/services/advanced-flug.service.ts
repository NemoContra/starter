import { Injectable } from '@angular/core';
import { FlugService } from './flug.service';
import { fluege, Flug } from '../entity/flug';

@Injectable()
export class AdvancedFlugService implements FlugService {
  private fluege: Flug[] = fluege;

  flugSuchen(von: string, nach: string): Flug[] {
    return this.fluege.filter(flug => flug.from === von && flug.to === nach);
  }
}
