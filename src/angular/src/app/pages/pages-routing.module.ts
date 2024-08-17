import { NgModule } from "@angular/core";
import { Routes, RouterModule, RouteReuseStrategy } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";

export const routes: Routes = [
    {
        path: 'home', component: HomeComponent//, runGuardsAndResolvers: 'always',
        //   data: {
        //     requiredPermission: [Permissoes.PERMISSAO_DOC, Permissoes.PERMISSAO_SIGA, Permissoes.PERMISSAO_FS],
        //     nextRoute: DocumentoPesquisarSimplesComponent
        //   },
        //   canActivate: [AuthGuard]
    },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: 'home' },
];
@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule],
    // providers: [
    //   {
    //     provide: RouteReuseStrategy,
    //     useClass: CustomRouteReuseStrategy
    //   }
    // ],
})
export class PagesRoutingModule { }
