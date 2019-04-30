import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { QuizzlerService } from './quizzler.service';

@Component({
  selector: 'app-drowning-prevention',
  templateUrl: './drowning-prevention.component.html',
  styleUrls: ['./drowning-prevention.component.css'],
  providers: [QuizzlerService],
})

export class DrowningPreventionComponent implements OnInit {

// sliders declaraions

@ViewChild('local') elemRef: ElementRef;

title1 = 'one';
title2 = 'two';
title3 = 'three';

validator1 = false;
validator2 = false;
validator3 = false;
validator4 = false;
validator5 = false;


container = [];
tracker = 0;

  questions: {q: string, a: boolean} [] = [];
  questionsOfAugest: {q: string, a: boolean} [] = [];

// quizzler service injection:

  constructor(
    public quizzlerService: QuizzlerService,
    private rend: Renderer2) {}

  ngOnInit() {
    this.questions = this.quizzlerService.questions;
    this.elemRef.nativeElement = 'url(assets/DrwoningPreventionHome.png)';
  }


facts() {
  this.container.push(this.tracker);
  if (this.tracker === 0) {
    this.validator1 = true;
    this.validator2 = false;
    this.validator3 = false;
    console.log(this.tracker);
  } else if (this.tracker === 1) {
    this.validator1 = false;
    this.validator2 = true;
    this.validator3 = false;
    console.log(this.tracker);
  } else if (this.tracker === 2) {
    this.validator1 = false;
    this.validator2 = false;
    this.validator3 = true;
    console.log(this.tracker);
  } else if (this.tracker === 3) {
    this.validator1 = false;
    this.validator2 = false;
    this.validator3 = false;
    this.validator4 = true;
    this.validator5 = false;
    console.log(this.tracker);
  } else if (this.tracker === 4) {
    this.validator1 = false;
    this.validator2 = false;
    this.validator3 = false;
    this.validator4 = false;
    this.validator5 = true;
    console.log(this.tracker);
  } else {
    this.tracker = 0;
    console.log(this.tracker);
  }
  this.tracker++;
  console.log(this.tracker);
}

  } // end of class
