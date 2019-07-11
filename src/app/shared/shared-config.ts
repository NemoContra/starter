import { InjectionToken } from '@angular/core';

export interface SharedConfig {
  baseUrl: string;
}

export const SHARED_CONFIG =
  new InjectionToken<SharedConfig>('SHARED_CONFIG');
