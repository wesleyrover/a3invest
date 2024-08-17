import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { NgModule } from '@angular/core';
import { AtivoComponent } from './page/ativo/ativo.component';

export const routes: Routes = [ 
    { path: 'login', component: LoginComponent },
    {path: 'ativo', component: AtivoComponent}];


@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}

// const appRoutes: Routes = [
   
//     // {
//     //     path: '',
//     //     redirectTo: '/home',
//     //     pathMatch: 'full'
//     // }
// ];