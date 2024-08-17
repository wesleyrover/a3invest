import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
    imports: [
      MatMenuModule,
      MenuComponent,
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
  