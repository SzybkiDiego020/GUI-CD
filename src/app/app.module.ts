import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {GaugesModule} from "@biacsics/ng-canvas-gauges";
import {FormsModule} from "@angular/forms";
import { GaugesComponent } from './gauges/gauges.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'gauges', component: GaugesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '***',   component: HomeComponent}
];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    GaugesComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    GaugesModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
