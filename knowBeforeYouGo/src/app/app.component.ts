import { Component } from '@angular/core';
import { QuizzlerService } from './drowning-prevention/quizzler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [QuizzlerService]
})
export class AppComponent {
  title = 'app';
}
