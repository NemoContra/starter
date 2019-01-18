import { Injectable, InjectionToken } from '@angular/core';
import { Flug } from '../entity/flug';
import { AdvancedFlugService } from './advanced-flug.service';
import { DummyFlugService } from './dummy-flug.service';

export function flugServiceFactory(showFlights: boolean): FlugService {
  return showFlights ? new AdvancedFlugService() : new DummyFlugService();
}

export const SHOW_FLIGHTS = new InjectionToken<boolean>('showFlights', {providedIn: 'root', factory: () => true});

@Injectable({
  providedIn: 'root',
  useFactory: flugServiceFactory,
  deps: [SHOW_FLIGHTS]
})
export abstract class FlugService {
  abstract flugSuchen(von: string, nach: string): Flug[];
}
