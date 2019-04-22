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

@ViewChild('local0') elemRef: ElementRef;
@ViewChild('local1') elemRef1: ElementRef;
@ViewChild('local2') elemRef2: ElementRef;
@ViewChild('local3') elemRef3: ElementRef;
@ViewChild('local4') elemRef4: ElementRef;
@ViewChild('local5') elemRef5: ElementRef;
@ViewChild('local6') elemRef6: ElementRef;
@ViewChild('local7') elemRef7: ElementRef;

imgArr = [];
imgTracker = 0;

validator0 = false;
validator1 = false;
validator2 = false;
validator3 = false;
validator4 = false;
validator5 = false;
validator6 = false;
validator7 = false;


// end slider declartions

  secSlide = '';
  state = 'normal';

// quizzler service definition:
  questions: {q: string, a: boolean}[] = [];
  questionsOfAugest: {q: string, a: boolean}[] = [];


// quizzler service injection:
  constructor(
    public quizzlerService: QuizzlerService,
    private rend: Renderer2) {}

  ngOnInit() {
    this.questions = this.quizzlerService.questions;
    this.rend.setStyle(this.elemRef.nativeElement, 'backgroundImage', 'url(assets/DrwoningPreventionHome.png)');
    this.validator0 = true;
    console.log('length', this.imgArr.length);
    console.log('tracker', this.imgTracker);
  }

  nextImages() {
    this.imgArr.push(this.imgTracker);

    if (this.imgTracker === this.imgArr[0]) {

      this.rend.setStyle(this.elemRef.nativeElement, 'backgroundImage', 'url(assets/DrownStatistics.png)');
      this.validator0 = false;
      this.validator1 = true;
      this.validator2 = false;
      this.validator3 = false;
      this.validator4 = false;
      this.validator5 = false;
      this.validator6 = false;
      this.validator7 = false;


    } else if (this.imgTracker === this.imgArr[1]) {
      this.rend.setStyle(this.elemRef.nativeElement, 'backgroundImage', 'url(assets/DrwoningIncreasedRisk.png)');
      this.validator0 = false;
      this.validator1 = false;
      this.validator2 = true;
      this.validator3 = false;
      this.validator4 = false;
      this.validator5 = false;
      this.validator6 = false;
      this.validator7 = false;


    } else if (this.imgTracker === this.imgArr[2]) {
      this.rend.setStyle(this.elemRef.nativeElement, 'backgroundImage', 'url(assets/safteyTips.png)');
      this.validator0 = false;
      this.validator1 = false;
      this.validator2 = false;
      this.validator3 = true;
      this.validator4 = false;
      this.validator5 = false;
      this.validator6 = false;
      this.validator7 = false;


    } else if (this.imgTracker === this.imgArr[3]) {
      this.rend.setStyle(this.elemRef.nativeElement, 'backgroundImage', 'url(assets/poolBeingUsed.png)');
      this.validator0 = false;
      this.validator1 = false;
      this.validator2 = false;
      this.validator3 = false;
      this.validator4 = true;
      this.validator5 = false;
      this.validator6 = false;
      this.validator7 = false;
    } else if (this.imgTracker === this.imgArr[4]) {
      this.rend.setStyle(this.elemRef.nativeElement, 'backgroundImage', 'url(assets/poolNotUsed.png)');
      this.validator0 = false;
      this.validator1 = false;
      this.validator2 = false;
      this.validator3 = false;
      this.validator4 = false;
      this.validator5 = true;
      this.validator6 = false;
      this.validator7 = false;


      this.reset();
    }

    this.imgTracker++;

    console.log('length', this.imgArr.length);
    console.log('tracker', this.imgTracker);

    }

      // this.validator0 = false;
      // this.validator1 = false;
      // this.validator2 = false;
      // this.validator3 = false;
      // this.validator4 = false;
      // this.validator5 = false;
      // this.validator6 = true;
      // this.validator7 = false;

      // [4]
        // else if (this.imgTracker === this.imgArr[4]) {
    //   this.rend.setStyle(this.elemRef.nativeElement, 'backgroundImage', 'url(assets/poolBeingUsed.png)');
    //   this.validator0 = false;
    //   this.validator1 = false;
    //   this.validator2 = false;
    //   this.validator3 = false;
    //   this.validator4 = false;
    //   this.validator5 = true;
    //   this.validator6 = false;
    //   this.validator7 = false;
    // }





  previousImages() {
    this.imgArr.push(this.imgTracker);

    if (this.imgTracker === this.imgArr[0]) {

      this.rend.setStyle(this.elemRef.nativeElement, 'backgroundImage', 'url(assets/DrowningStatistics.jpg)');
      this.validator0 = false;
      this.validator1 = true;
      this.validator2 = false;
      this.validator3 = false;
      this.validator4 = false;
      this.validator5 = false;
      this.validator6 = false;
      this.validator7 = false;


    } else if (this.imgTracker === this.imgArr[1]) {
      this.rend.setStyle(this.elemRef.nativeElement, 'backgroundImage', 'url(assets/childrenIncreased.jpg)');
      this.validator0 = false;
      this.validator1 = false;
      this.validator2 = true;
      this.validator3 = false;
      this.validator4 = false;
      this.validator5 = false;
      this.validator6 = false;
      this.validator7 = false;


    } else if (this.imgTracker === this.imgArr[2]) {
      this.rend.setStyle(this.elemRef.nativeElement, 'backgroundImage', 'url(assets/poolSafteyTips.jpg)');
      this.validator0 = false;
      this.validator1 = false;
      this.validator2 = false;
      this.validator3 = true;
      this.validator4 = false;
      this.validator5 = false;
      this.validator6 = false;
      this.validator7 = false;


    } else if (this.imgTracker === this.imgArr[3]) {
      this.rend.setStyle(this.elemRef.nativeElement, 'backgroundImage', 'url(assets/preparToSwim.jpg)');
      this.validator0 = false;
      this.validator1 = false;
      this.validator2 = false;
      this.validator3 = false;
      this.validator4 = true;
      this.validator5 = false;
      this.validator6 = false;
      this.validator7 = false;


    } else if (this.imgTracker === this.imgArr[4]) {
      this.rend.setStyle(this.elemRef.nativeElement, 'backgroundImage', 'url(assets/Whenyourpoolisbeingused.jpg)');
      this.validator0 = false;
      this.validator1 = false;
      this.validator2 = false;
      this.validator3 = false;
      this.validator4 = false;
      this.validator5 = true;
      this.validator6 = false;
      this.validator7 = false;


    } else if (this.imgTracker === this.imgArr[5]) {
      this.rend.setStyle(this.elemRef.nativeElement, 'backgroundImage', 'url(assets/Whenyourpoolisnotinuse.jpg)');
      this.validator0 = false;
      this.validator1 = false;
      this.validator2 = false;
      this.validator3 = false;
      this.validator4 = false;
      this.validator5 = false;
      this.validator6 = true;
      this.validator7 = false;
      this.reset();
    }
    this.imgTracker--;


    console.log('length', this.imgArr.length);
    console.log('tracker', this.imgTracker);
    }

  // previousImages() {
  //   this.imgTracker--;
  // }

  reset() {
    this.imgArr.length = 0;
    this.imgTracker = 0;
  }

} // end of class


// onAnimate() {
  //   this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal';
  // }

