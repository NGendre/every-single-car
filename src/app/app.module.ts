import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarRowComponent } from './components/car-row/car-row.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    SortingComponent,
    CarListComponent,
    CarRowComponent,
    AddCarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
