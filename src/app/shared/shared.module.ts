import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './city.pipe';
import { FlugDetailsDirective } from './flug-details.directive';

@NgModule({
  declarations: [
    CityPipe,
    FlugDetailsDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CityPipe,
    FlugDetailsDirective
  ]
})
export class SharedModule { }
