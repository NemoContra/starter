import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightService } from './flight.service';
import { SHARED_CONFIG, SharedConfig } from './shared-config';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
  public static forRoot(config?: SharedConfig): ModuleWithProviders<SharedModule> {
    const provider: Provider = config ?
      [{provide: SHARED_CONFIG, useValue: config}] : [];

    return {
      ngModule: SharedModule,
      providers: [
        FlightService,
        ...provider
      ]
    };
  }
}
