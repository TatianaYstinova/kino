import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { AppComponent } from '../app/app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    HttpClientModule,
  ],
  providers: [HttpClientModule],
  bootstrap: []
})
export class AppModule {}
