import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
      HeaderComponent,
      CommonModule,
      RouterModule
    ],
    exports: [HeaderComponent,],
    declarations: [],
    providers: []
  })
  export class CoreModule { }
  