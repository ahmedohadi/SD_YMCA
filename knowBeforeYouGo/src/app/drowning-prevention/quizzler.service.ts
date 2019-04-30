import swal from 'sweetalert';

export class QuizzlerService {

pickedAnswer: Boolean = false;
tracker = 0;
progBar = 0;
score = 0;

answer4 = 'Children and inexperienced swimmers should wear life jackets whenever in, on and around the water, even if a lifeguard is present';
answer1 = 'test';

questions = [
  {
    q: 'Children under one years of age most often drown in a backyard pool',
    a: false
  },
  {
    q: 'Males are more at risk for drowning than females',
    a: true
  },
  {
    q: 'Parents, babysitters, guardians and anyone over 14 should learn CPR',
    a: true
  },
  {
    q: 'Children and inexperienced swimmers under 18 should wear life jackets whenever in, on and around the water, even if a lifeguard is present',
    a: false
  },
  {
    q: 'Keep constant visual contact with children in the pool. Touch supervision is essential for small children and those who can’t swim',
    a: true
  },
  {
    q: 'Make sure all fence gates and doors leading to the pool area are self-closing and self-latching',
    a: true
  },
];

constructor() {}

// corrent answers trigger (button)

onTrue () {
  this.trueAnswer();
  this.tracker++;

  if (this.tracker >= this.questions.length) {
    console.log('finished!');
    this.rest();
  }
  console.log(this.tracker);
}

// incorrect answers trigger (button)


onFalse() {
  this.falseAnswer();
  this.tracker++;

  if (this.tracker >= this.questions.length) {
    console.log('finished!');
    this.rest();
  }
  console.log(this.tracker);
}

// correct answer implementaion:

trueAnswer() {
  if (this.questions[this.tracker].a !== this.pickedAnswer) {
    this.pickedAnswer = true;
    // console.log('CORRECT!');
    swal("Good job!", "you got this right!", "success");
    this.progressBar();
    this.score++;

  } else if (this.tracker === 0 && this.pickedAnswer === false) {
    swal("Oops!", this.answer1, "error");

  } else if (this.tracker === 3 && this.pickedAnswer === false) {
    // alert(this.answer4);
    swal("Oops!", this.answer4, "error");

  } else {
    this.pickedAnswer = false;
    // console.log('INCORRECT!');
    swal("Oops!", "Wrong!", "error");

    this.progressBar();
    }
    this.pickedAnswer = false;
  }

// false answers implementation

falseAnswer() {
  this.pickedAnswer = true;
  if (this.questions[this.tracker].a === this.pickedAnswer) {
    this.pickedAnswer = false;
    // console.log('INCORRECT!');
    swal("Oops!", "Wrong!", "error");

    this.progressBar();

  } else {
    this.pickedAnswer = true;
    // console.log('CORRECT!');

    swal("Good job!", "you got this right!", "success");

    this.progressBar();
    this.score++;
  }
}

progressBar() {
  this.progBar = this.progBar + 100 / this.questions.length + 1;
}

rest() {
  if (this.tracker >= this.questions.length) {
    swal('You scored ' + this.score + '/' + this.questions.length);
    console.log('your score is: ', this.score);
    this.tracker = 0;
    this.score = 0;
    this.progBar = 0;
  }
}

}
