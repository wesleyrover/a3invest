import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

// import { AppRoutingModule } from './app-routing.module';
// import { PagesModule } from './pages/pages.module';
// import { CoreModule } from './core/core.module';
 import { AppComponent } from './app.component';
// import { SpinnerModule } from 'angular-spinners';
// import { AuthModule } from './auth/auth.module';
// import { AuthGuard } from './auth';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
// import { AuthInterceptor } from './auth/auth.interceptor';
// import { AuthenticationService } from './commons/services';
// import { LocalStorageModule } from 'angular-2-local-storage';
// import { Data } from './core/domain';
// import { AuthDocumentoGuard } from './auth/auth-documento.guard';
// import { AuthMailGuard } from './auth/auth-mail.guard';
// import { AuthAcessoAposentadoGuard } from './auth/auth-acesso-aposentado.guard';
// import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({

  declarations: [
  ],
  imports: [
    // HttpClientModule,
    // SpinnerModule,
    // PagesModule,
    // AppRoutingModule,
    CommonModule,
    AppComponent,
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule
    // CoreModule,
    // AuthModule,
    // ColorPickerModule,
    // LocalStorageModule.withConfig({
    //   prefix: 'siganovo',
    //   storageType: 'sessionStorage'
    // }),

  ],
  providers: [
    // AuthenticationService,
    // Data,
    // AuthGuard,
    // AuthDocumentoGuard,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true
    // },
    // AuthMailGuard,
    // AuthAcessoAposentadoGuard
  ],
  bootstrap: [],
  exports: [AppComponent],
})

export class AppModule { }
