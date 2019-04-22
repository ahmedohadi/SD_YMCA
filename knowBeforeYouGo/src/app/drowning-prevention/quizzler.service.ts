import { Component, Input } from '@angular/core';

export class QuizzlerService {

pickedAnswer: Boolean = false;
tracker = 0;
progBar = 0;
score = 0;


questions = [
  {
    q: 'question 1',
    a: true
  },
  {
    q: 'question 2',
    a: true
  },
  {
    q: 'question 3',
    a: false
  },
  {
    q: 'question 4',
    a: false
  },
  {
    q: 'question 5',
    a: true
  },
  {
    q: 'question 6',
    a: true
  },
  {
    q: 'question 7',
    a: true
  },
  {
    q: 'question 8',
    a: true
  }
];

onTrue () {
  this.trueAnswer();
  this.tracker++;

  if (this.tracker >= this.questions.length) {
    console.log('finished!');
    this.rest();
  }
}

onFalse() {
  this.falseAnswer();
  this.tracker++;

  if (this.tracker >= this.questions.length) {
    console.log('finished!');
    // this.progBar = 0;
    // this.tracker = 0;
    this.rest();
  }
}

trueAnswer() {
  if (this.questions[this.tracker].a !== this.pickedAnswer) {
    this.pickedAnswer = true;
    console.log('CORRECT!');
    this.progressBar();
    this.score++;

  } else {
    this.pickedAnswer = false;
    console.log('INCORRECT!');
    this.progressBar();
    }
    this.pickedAnswer = false;
}

falseAnswer() {
  this.pickedAnswer = true;
  if (this.questions[this.tracker].a === this.pickedAnswer) {
    this.pickedAnswer = false;
    console.log('INCORRECT!');
    this.progressBar();

  } else {
    this.pickedAnswer = true;
    console.log('CORRECT!');
    this.progressBar();
    this.score++;
  }
}

progressBar() {
  this.progBar = this.progBar + 100 / this.questions.length + 1;
}

rest() {
  if (this.tracker >= this.questions.length) {
    alert('You scored ' + this.score + '/' + this.questions.length);
    console.log('your score is: ', this.score);
    this.tracker = 0;
    this.score = 0;
    this.progBar = 0;
  }
}















}
