import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'home', loadComponent:()=>import('./home/home.component').then(mod=>mod.HomeComponent)},
    {path:'about', loadComponent:()=>import('./about/about.component').then(mod=>mod.AboutComponent)}
];
