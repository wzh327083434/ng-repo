import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';

import { AppComponent, HelloComponent, AboutComponent } from './app.component';

const helloState = { name: 'hello', url: '/hello', component: HelloComponent };
const aboutState = { name: 'about', url: '/about', component: AboutComponent };

@NgModule({
  declarations: [AppComponent, HelloComponent, AboutComponent],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({
      states: [helloState, aboutState],
      useHash: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
