import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ChartlineComponent } from './component/chartline/chartline.component';
import { ChartlinetimeComponent } from './component/chartlinetime/chartlinetime.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'chartline',
    component: ChartlineComponent
  },
  {
    path: 'chartlinetime',
    component: ChartlinetimeComponent
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
