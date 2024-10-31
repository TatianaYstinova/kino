import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { AppComponent } from '../app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// import { routes } from '../app/app.routes';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    // RouterModule.forRoot(routes),
    
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {}
