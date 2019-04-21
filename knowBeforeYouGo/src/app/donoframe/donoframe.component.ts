import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-donoframe',
  templateUrl: './donoframe.component.html',
  styleUrls: ['./donoframe.component.css']
})
export class DonoFrameComponent implements OnInit {

  @Input()
  public home: any;

  constructor() { }

  ngOnInit() {

  }
}
