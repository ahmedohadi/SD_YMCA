import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mroom',
  templateUrl: './mroom.component.html',
  styleUrls: ['./mroom.component.css']
})
export class MroomComponent implements OnInit {

  @Input()
  public home: any;

  constructor() { }

  ngOnInit() {

  }
}
