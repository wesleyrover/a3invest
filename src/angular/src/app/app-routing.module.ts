import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AdsenseModule } from 'ng2-adsense';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true }),
    AdsenseModule.forRoot({ adClient: 'ca-pub-3380691171417477', adSlot: 9975399151 }),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
