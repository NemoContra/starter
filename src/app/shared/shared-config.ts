import { InjectionToken } from '@angular/core';

// Interface für das Config-Objekt des SharedModules
export interface SharedConfig {
  baseUrl: string;
}

// Injection-Token für die SharedConfig.
// Hier wäre ebenfalls eine abstrakte Klasse möglich gewesen.
export const SHARED_CONFIG =
  new InjectionToken<SharedConfig>('SHARED_CONFIG');
