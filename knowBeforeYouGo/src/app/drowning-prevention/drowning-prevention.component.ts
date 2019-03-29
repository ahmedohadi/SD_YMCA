import { Component, OnInit } from '@angular/core';
import { QuizzlerService } from './quizzler.service';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-drowning-prevention',
  templateUrl: './drowning-prevention.component.html',
  styleUrls: ['./drowning-prevention.component.css'],
  providers: [QuizzlerService],
  animations: [
    trigger('divState', [
      state('normal', style({
        // inititial state:
        'background-color': 'Green',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        // inititial state:
        'background-color': 'red',
        transform: 'translateX(100px)',
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800))
    ])
  ]
})
export class DrowningPreventionComponent implements OnInit {

  state = 'normal';

  questions: {q: string, a: boolean}[] = [];

  constructor(public quizzlerService: QuizzlerService) {}

  ngOnInit() {
    this.questions = this.quizzlerService.questions;
  }

  onAnimate() {
    this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal';
  }
}
