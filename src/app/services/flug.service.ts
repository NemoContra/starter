import { Injectable } from '@angular/core';
import { Flug } from '../entity/flug';
import { AdvancedFlugService } from './advanced-flug.service';

@Injectable({
  providedIn: 'root',
  useClass: AdvancedFlugService
})
export abstract class FlugService {
  abstract flugSuchen(von: string, nach: string): Flug[];
}
