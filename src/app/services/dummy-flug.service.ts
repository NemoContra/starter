import { Injectable } from '@angular/core';
import { FlugService } from './flug.service';
import { Flug } from '../entity/flug';

@Injectable()
export class DummyFlugService implements FlugService {
  flugSuchen(von: string, nach: string): Flug[] {
    return [];
  }
}
