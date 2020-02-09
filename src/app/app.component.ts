import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Hello Angular!';
}

@Component({
  template: '<h3>{{title}}</h3>'
})
export class HelloComponent {
  title = 'Hello world!';
}

@Component({
  template: '<h3>{{title}}</h3>'
})
export class AboutComponent {
  title = 'Its the UI-Router hello world app!';
}
