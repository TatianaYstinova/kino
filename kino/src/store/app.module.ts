import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { AppComponent } from '../app/app.component';
import { HomePageComponent } from '../HomePage/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
