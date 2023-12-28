import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { PagesModule } from './pages/pages.modules';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({

  declarations: [],
  imports: [
    //BrowserModule,
   // BrowserAnimationsModule,
    MatMenuModule,],
  providers: [
  ],
  bootstrap: [],
})
export class AppModule { }

// import { Routes } from '@angular/router';

// export const routes: Routes = [];
