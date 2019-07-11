import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightService } from './flight.service';
import { SHARED_CONFIG, SharedConfig } from './shared-config';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    // Muss leer sein, damit nicht bei öfterem Import mehrfach provided wird
  ]
})
export class SharedModule {
  /*
  * ForRoot-Methode wird nur beim Import im AppModule verwendet.
  * Config kann übergeben werden und wird über Dependency Injection bereitgestellt.
  * Beim Aufruf ohne forRoot (z.B. in einem Feature Module wird das Module ohne Provider
  * importiert
  */
  public static forRoot(config?: SharedConfig): ModuleWithProviders<SharedModule> {
    /**
     * Das config Object wird von außen (aus dem AppModule) übergeben
     * und wird für den konsumierenden Service (FlightService) mittels
     * DependenyInjection bereitgestellt, sofern es existiert (die Übergabe
     * ist optional, da der User den Service eventuell einfach mit einer default
     * config konsumieren möchte.)
     */
    const provider: Provider = config ?
      [{provide: SHARED_CONFIG, useValue: config}] : [];

    // Hier wird das Module mit Providers zurückgegeben und
    // kann so im AppModule (RootModule) importiert werden.
    return {
      ngModule: SharedModule,
      providers: [
        FlightService,
        /**
         * Hier wird die Spread-Syntax von ES2015 verwendet:
         * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Spread_operator
         * Sie ermöglicht es uns hier, entweder einen Provider zu registrieren
         * oder nicht. Der Spread eines leeren Arrays ist in JavaScript eine
         * noop-Operation. Den Provider mit null oder undefined einzusetzen,
         * wenn er nicht existiert würde einen Fehler zur Folge haben
         * (null or undefined is not a Provider)
         */
        ...provider
      ]
    };
  }
}
