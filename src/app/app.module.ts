import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule.forRoot()
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
