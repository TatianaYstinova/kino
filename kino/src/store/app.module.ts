import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';

@NgModule({
  declarations: [
    //  компоненты
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [],
  bootstrap: [/*  корневой компонент */]
})
export class AppModule {}
