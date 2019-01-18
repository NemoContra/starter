import { Injectable } from '@angular/core';
import { fluege, Flug } from '../entity/flug';

@Injectable()
export class FlugService {
  private fluege: Flug[] = fluege;

  public flugSuchen(von: string, nach: string): Flug[] {
    return this.fluege.filter(flug => {
      return flug.from === von && flug.to === nach;
    });
  }
}
