import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../HomePage/home-page.component';
import { CatalogPageComponent } from '../CatalogPageComponent/CatalogPageComponent';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:'', component:HomePageComponent},
    {path:'catalog', component:CatalogPageComponent},
    {path:'sing-in', component:CatalogPageComponent},
    {path:'registration', component:CatalogPageComponent},
    {path:'movie/:id', component:CatalogPageComponent},
    {path:'film-by-genre', component:CatalogPageComponent}
];
@NgModule({
    imports :[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{
    
}