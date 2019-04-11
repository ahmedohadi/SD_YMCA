import { FormsModule } from '@angular/forms';
import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { QuizzlerService } from './quizzler.service';

// animation definitions:

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

// sliders declaraions

@ViewChild('local') elemRef: ElementRef;
@ViewChild('local1') elemRef1: ElementRef;
@ViewChild('local2') elemRef2: ElementRef;
@ViewChild('local3') elemRef3: ElementRef;
@ViewChild('local3') elemRef4: ElementRef;
@ViewChild('local3') elemRef5: ElementRef;
@ViewChild('local3') elemRef6: ElementRef;




imgArr = [];
imgTracker = 0;

validator = false;
validator1 = false;
validator2 = false;
validator3 = false;
validator4 = false;
validator5 = false;
validator6 = false;




// end slider declartions

  secSlide = '';
  state = 'normal';

// quizzler service definition:
  questions: {q: string, a: boolean}[] = [];

// quizzler service injection:
  constructor(public quizzlerService: QuizzlerService, private rend: Renderer2) {}

  ngOnInit() {
    this.questions = this.quizzlerService.questions;
    this.rend.setStyle(this.elemRef.nativeElement, 'backgroundImage', 'url(http://media1.razorplanet.com/share/511646-7524/resources/2_image_1493237904_1233324_TrytheYWBimage.jpg');
    this.validator = true;
  }

  updaetImages() {
    this.imgArr.push(this.imgTracker);
    if (this.imgTracker === this.imgArr[0]) {
      this.rend.setStyle(this.elemRef1.nativeElement, 'backgroundImage', 'url(./../assets/DrowningStatistics.jpg');
      this.validator = false;
      this.validator1 = true;
      this.validator2 = false;
      this.validator3 = false;
      this.validator4 = false;
      this.validator5 = false;
      this.validator6 = false;

    } else if (this.imgTracker === this.imgArr[1]) {
      this.rend.setStyle(this.elemRef2.nativeElement, 'backgroundImage', 'url(./../assets/childrenIncreased.jpg)');
      this.validator = false;
      this.validator1 = false;
      this.validator2 = true;
      this.validator3 = false;
      this.validator4 = false;
      this.validator5 = false;
      this.validator6 = false;

    } else if (this.imgTracker === this.imgArr[2]) {
      this.rend.setStyle(this.elemRef3.nativeElement, 'backgroundImage', 'url(./../assets/poolSafteyTips.jpg)');
      this.validator = false;
      this.validator1 = false;
      this.validator2 = false;
      this.validator3 = true;
      this.validator4 = false;
      this.validator5 = false;
      this.validator6 = false;

    } else if (this.imgTracker === this.imgArr[3]) {
      this.rend.setStyle(this.elemRef4.nativeElement, 'backgroundImage', 'url(./../assets/preparToSwim.jpg)');
      this.validator = false;
      this.validator1 = false;
      this.validator2 = false;
      this.validator3 = false;
      this.validator4 = true;
      this.validator5 = false;
      this.validator6 = false;

    } else if (this.imgTracker === this.imgArr[4]) {
      this.rend.setStyle(this.elemRef5.nativeElement, 'backgroundImage', 'url(./../assets/Whenyourpoolisbeingused.jpg)');
      this.validator = false;
      this.validator1 = false;
      this.validator2 = false;
      this.validator3 = false;
      this.validator4 = false;
      this.validator5 = true;
      this.validator6 = false;

    } else if (this.imgTracker === this.imgArr[5]) {
      this.rend.setStyle(this.elemRef6.nativeElement, 'backgroundImage', 'url(./../assets/Whenyourpoolisnotinuse.jpeg)');
      this.validator = false;
      this.validator1 = false;
      this.validator2 = false;
      this.validator3 = false;
      this.validator4 = false;
      this.validator5 = false;
      this.validator6 = true;
      this.reset();
    }
    console.log('length', this.imgArr.length);
    console.log('tracker', this.imgTracker);
    this.imgTracker++;
}
reset() {
  this.imgTracker = 0;
  this.imgArr.length = 0;
}
// onAnimate() {
  //   this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal';
  // }
}
