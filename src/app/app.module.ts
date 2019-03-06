import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlugSuchenComponent } from './flug-suchen/flug-suchen.component';
import { CityPipe } from './shared/city.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FlugDetailsDirective } from './shared/flug-details.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CityPipe
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FlugSuchenComponent,
    FlugDetailsDirective
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
