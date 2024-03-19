// import { CounterComponent } from './counter/counter.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HeroComponent } from './heroes/hero/hero.component';
// import { ListComponent } from './heroes/list/list.component';
import { HeroesModule } from './heroes/Heroes.module';


@NgModule({
  declarations: [
    AppComponent,
    // CounterComponent,
    // HeroComponent,
    // ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
