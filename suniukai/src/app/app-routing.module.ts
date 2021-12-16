import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApieComponent } from './komponentai/apie/apie.component';
import { DokumentacijaComponent } from './komponentai/dokumentacija/dokumentacija.component';
import { IkeltiSuniukaComponent } from './komponentai/ikelti-suniuka/ikelti-suniuka.component';
import { PagrindinisComponent } from './komponentai/pagrindinis/pagrindinis.component';
import { VeislesComponent } from './komponentai/veisles/veisles.component';

const routes: Routes = [
  {path: '', component:PagrindinisComponent},
  {path: 'apie', component:ApieComponent},
  {path: 'dokumentacija', component:DokumentacijaComponent},
  {path: 'ikelti-suniuka', component:IkeltiSuniukaComponent},
  {path: 'veisles', component:VeislesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
