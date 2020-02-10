import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { HelloComponent, AboutComponent } from './app.component';

const helloState = { name: 'hello', url: '/hello', component: HelloComponent };
const aboutState = { name: 'about', url: '/about', component: AboutComponent };

@NgModule({
  imports: [
    UIRouterModule.forRoot({
      states: [helloState, aboutState],
      useHash: true
    })
  ],
  exports: [UIRouterModule]
})
export class AppRoutingModule {}
