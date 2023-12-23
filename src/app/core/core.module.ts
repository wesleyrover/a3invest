import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
      HeaderComponent,
      FooterComponent,
      CommonModule,
      RouterModule
    ],
    exports: [HeaderComponent,FooterComponent,],
    declarations: [],
    providers: []
  })
  export class CoreModule { }
  