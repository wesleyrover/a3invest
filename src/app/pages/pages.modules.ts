import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
    imports: [
      CommonModule,
      RouterModule,
      PagesRoutingModule,
      HomeComponent
    ],
    exports: [HomeComponent],
    declarations: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  export class PagesModule { }