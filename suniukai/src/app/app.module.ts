import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SoninisMeniuComponent } from './komponentai/soninis-meniu/soninis-meniu.component';
import { DokumentacijaComponent } from './komponentai/dokumentacija/dokumentacija.component';
import { VeislesComponent } from './komponentai/veisles/veisles.component';
import { ApieComponent } from './komponentai/apie/apie.component';
import { IkeltiSuniukaComponent } from './komponentai/ikelti-suniuka/ikelti-suniuka.component';

@NgModule({
  declarations: [
    AppComponent,
    SoninisMeniuComponent,
    DokumentacijaComponent,
    VeislesComponent,
    ApieComponent,
    IkeltiSuniukaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
