import { NG_EVENT_PLUGINS } from "@taiga-ui/event-plugins";
import { provideAnimations } from "@angular/platform-browser/animations";
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../HomePage/home-page.component';
import { CatalogPageComponent } from '../CatalogPageComponent/CatalogPageComponent';
import { NgModule } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { reducers } from "../store";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const routes: Routes = [
  {path:"", component:HomePageComponent},
  {path:"catalog", component:CatalogPageComponent},
  {path:"sing-in", component:CatalogPageComponent},
  {path:'registration', component:CatalogPageComponent},
  {path:'movie/:id', component:CatalogPageComponent},
  {path:'film-by-genre', component:CatalogPageComponent}
];
export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    NG_EVENT_PLUGINS,
    provideStore(reducers),
    provideHttpClient(withFetch()), provideAnimationsAsync()]
};