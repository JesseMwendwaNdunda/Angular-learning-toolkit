import { Component } from '@angular/core';
import { GreetingComponent } from './greeting/greeting';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GreetingComponent],
  templateUrl: './app.html'
})
export class AppComponent {}
